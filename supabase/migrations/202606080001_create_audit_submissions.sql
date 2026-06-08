create extension if not exists pgcrypto;

create table if not exists public.audit_submissions (
  id uuid primary key default gen_random_uuid(),
  idempotency_key text not null unique,
  full_name text not null check (char_length(full_name) <= 120),
  email text not null,
  phone text,
  company_name text not null check (char_length(company_name) <= 120),
  company_name_normalized text not null,
  primary_url text not null,
  primary_url_normalized text not null,
  additional_urls jsonb not null default '[]'::jsonb,
  industry text,
  team_size text,
  requested_systems jsonb not null,
  challenge text not null check (char_length(challenge) between 30 and 2000),
  desired_outcome text not null check (char_length(desired_outcome) between 30 and 2000),
  timeline text,
  budget_range text,
  referral_detail text,
  consent boolean not null check (consent = true),
  consented_at timestamptz not null,
  source jsonb not null,
  status text not null default 'new' check (
    status in ('new', 'reviewing', 'qualified', 'audit-prepared', 'call-booked', 'closed', 'archived')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists audit_submissions_duplicate_lookup
  on public.audit_submissions (email, company_name_normalized, primary_url_normalized, created_at desc);

alter table public.audit_submissions enable row level security;

create table if not exists public.audit_submission_rate_limits (
  rate_key text primary key,
  attempts timestamptz[] not null default '{}',
  updated_at timestamptz not null default now()
);

alter table public.audit_submission_rate_limits enable row level security;

create or replace function public.check_audit_submission_rate_limit(
  p_key text,
  p_window_seconds integer,
  p_max_attempts integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  recent_attempts timestamptz[];
begin
  insert into public.audit_submission_rate_limits (rate_key, attempts, updated_at)
  values (p_key, array[now()], now())
  on conflict (rate_key) do update
  set attempts = (
    select coalesce(array_agg(attempt), '{}')
    from unnest(audit_submission_rate_limits.attempts) attempt
    where attempt >= now() - make_interval(secs => p_window_seconds)
  ) || now(),
  updated_at = now()
  returning attempts into recent_attempts;

  return cardinality(recent_attempts) <= p_max_attempts;
end;
$$;

revoke all on function public.check_audit_submission_rate_limit(text, integer, integer) from public;
grant execute on function public.check_audit_submission_rate_limit(text, integer, integer) to service_role;
