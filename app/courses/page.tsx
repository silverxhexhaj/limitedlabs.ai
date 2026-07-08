import type { Metadata } from "next";

import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Courses - Limited Labs",
  description:
    "Short, practical AI courses for business operators. Learn to automate your recurring work with AI while keeping humans in control of every decision.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Courses - Limited Labs",
    description:
      "Short, practical AI courses for business operators. Learn the systems we build for clients.",
  },
};

export default function CoursesPage() {
  return <CoursesContent />;
}
