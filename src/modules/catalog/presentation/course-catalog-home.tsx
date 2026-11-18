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
    <div className="min-h-screen bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="relative overflow-hidden border-t border-blue-100/80">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-7rem] top-16 h-[22rem] w-[22rem] rounded-full opacity-70 [background-image:radial-gradient(#bad7ff_1.6px,transparent_1.6px)] [background-size:18px_18px]"
        />

        <CpnsHeroSection />
        <CpnsFeaturesSection />
        <CourseCatalogBrowser courses={courses} />
        <CpnsTestimonialsAndFaqSection />
      </main>

      <SiteFooter />
    </div>
  );
}
