import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import AdminSidebar from "../_components/AdminSidebar";
import { getCurrentAdmin } from "@/lib/admin/auth";

export default async function AdminAuthedLayout({ children }: { children: ReactNode }) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <div className="flex min-h-dvh">
      <AdminSidebar adminEmail={admin.email} />
      <div className="flex min-h-dvh min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
