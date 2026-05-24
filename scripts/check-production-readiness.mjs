import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const loginPage = read("app/admin/login/page.tsx");
const loginForm = read("app/admin/login/LoginForm.tsx");
const homePage = read("app/page.tsx");
const footer = read("app/components/SiteFooter.tsx");
const layout = read("app/layout.tsx");
const middleware = read("middleware.ts");
const authActions = read("lib/admin/auth-actions.ts");
const auth = read("lib/admin/auth.ts");

assert(!loginPage.includes("any email and password will work"), "Remove mock-auth warning from public admin login page.");
assert(!loginPage.includes("Replace with Supabase later"), "Remove implementation roadmap from public admin login page.");
assert(!loginForm.includes("defaultValue=\"admin@limitedlabs.co\""), "Do not prefill the production admin email field.");
assert(!homePage.includes("placeholder copy"), "Remove live placeholder language from the case snapshots intro.");
assert(!homePage.includes("What our clients"), "Replace future-tense proof heading with production-ready trust copy.");
assert(!homePage.includes("Quotes land here once pilots finish"), "Remove unfinished testimonial placeholder copy.");
assert(!footer.toLowerCase().includes("v0.1"), "Remove public v0.1 marker from footer.");
assert(layout.includes("metadataBase: new URL(\"https://www.limitedlabs.ai\")"), "Set canonical metadata base to the www domain.");
assert(middleware.includes("limitedlabs.ai") && middleware.includes("www.limitedlabs.ai"), "Redirect non-www limitedlabs.ai requests to www.");
assert(authActions.includes("getExpectedAdminPassword") && authActions.includes("Invalid email or password."), "Admin sign-in must validate configured credentials.");
assert(auth.includes("ADMIN_SESSION_TOKEN") && middleware.includes("getExpectedSessionToken"), "Admin sessions should not trust a public ll_admin=1 cookie.");

if (failures.length > 0) {
  console.error("Production readiness checks failed:");
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log("Production readiness checks passed.");
