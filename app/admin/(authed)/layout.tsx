import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import AdminShell from "../_components/AdminShell";
import { getCurrentAdmin } from "@/lib/admin/auth";

export default async function AdminAuthedLayout({ children }: { children: ReactNode }) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return <AdminShell adminEmail={admin.email}>{children}</AdminShell>;
}
