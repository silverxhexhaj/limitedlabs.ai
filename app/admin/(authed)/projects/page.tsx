import AdminTopbar from "../../_components/AdminTopbar";
import ProjectsListClient from "../../_components/ProjectsListClient";
import { listProjects } from "@/lib/admin/projects";

export default async function AdminProjectsPage() {
  const projects = await listProjects();

  return (
    <>
      <AdminTopbar
        title="Projects"
        breadcrumbs={[{ label: "Admin", href: "/admin" }, { label: "Projects" }]}
      />
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <ProjectsListClient projects={projects} />
      </main>
    </>
  );
}
