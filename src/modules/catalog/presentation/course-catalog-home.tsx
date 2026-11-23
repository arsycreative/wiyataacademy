import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { createCourseRepository } from "@/modules/catalog/infrastructure/course-repository.server";
import { CourseCatalogBrowser } from "@/modules/catalog/presentation/course-catalog-browser";
import { CpnsFeaturesSection } from "@/modules/catalog/presentation/cpns-features-section";
import { CpnsHeroSection } from "@/modules/catalog/presentation/cpns-hero-section";
import { CpnsTestimonialsAndFaqSection } from "@/modules/catalog/presentation/cpns-testimonials-faq-section";

export async function CourseCatalogHome() {
  const courses = await createCourseRepository().listPublished();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <SiteHeader />

      <main>
        <CpnsHeroSection />
        <CpnsFeaturesSection />
        <CourseCatalogBrowser courses={courses} />
        <CpnsTestimonialsAndFaqSection />
      </main>

      <SiteFooter />
    </div>
  );
}
