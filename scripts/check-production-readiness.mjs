import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const fullPath = (path) => join(root, path);
const read = (path) => readFileSync(fullPath(path), "utf8");
const readIfExists = (path) => (existsSync(fullPath(path)) ? read(path) : "");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const loginPage = read("app/admin/login/page.tsx");
const loginForm = read("app/admin/login/LoginForm.tsx");
const homePage = read("app/page.tsx");
const footer = read("app/components/SiteFooter.tsx");
const header = read("app/components/SiteHeader.tsx");
const layout = read("app/layout.tsx");
const middleware = read("middleware.ts");
const authActions = read("lib/admin/auth-actions.ts");
const auth = read("lib/admin/auth.ts");
const sitemap = readIfExists("app/sitemap.ts");
const robots = readIfExists("app/robots.ts");

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
assert(homePage.includes("Get a free growth systems audit"), "Make the homepage primary CTA a concrete free audit offer.");
assert(homePage.includes("Built from real operating needs"), "Replace weak future proof with proof from built operating systems.");
assert(!homePage.includes("Proof in progress"), "Remove proof copy that signals the studio is not proven yet.");
assert(!homePage.includes("First client") && !homePage.includes("Second client"), "Remove anonymous pilot proof cards from the live homepage.");
assert(!homePage.includes('href="#"'), "Do not ship dead CTA links on the homepage.");
assert(header.includes("Free Audit") || header.includes("Free audit"), "Header CTA should point to the concrete audit offer.");
assert(layout.includes("openGraph") && layout.includes("twitter"), "Add richer Open Graph and Twitter metadata.");
assert(layout.includes("application/ld+json") && layout.includes("ProfessionalService"), "Add ProfessionalService structured data.");
assert(existsSync(fullPath("app/sitemap.ts")) && sitemap.includes("SERVICE_ITEMS"), "Add an SEO sitemap with service URLs.");
assert(existsSync(fullPath("app/robots.ts")) && robots.includes("sitemap"), "Add robots metadata pointing to the sitemap.");
assert(homePage.includes("Frequently asked questions"), "Add an FAQ section for conversion and search intent.");

if (failures.length > 0) {
  console.error("Production readiness checks failed:");
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log("Production readiness checks passed.");
