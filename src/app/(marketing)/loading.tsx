import { SiteHeader } from "@/components/layout/site-header";

export default function MarketingLoading() {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-950">
      <SiteHeader />
      <main className="border-t border-blue-100/80">
        <section className="mx-auto w-full max-w-[1360px] px-5 pb-12 pt-10 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-4">
              <div className="h-7 w-64 animate-pulse rounded-full bg-blue-100/70" />
              <div className="h-14 w-full max-w-xl animate-pulse rounded-xl bg-blue-100/70" />
              <div className="h-20 w-full max-w-lg animate-pulse rounded-xl bg-blue-50" />
            </div>
            <div className="h-80 animate-pulse rounded-2xl border border-blue-100 bg-white shadow-sm shadow-blue-100/60" />
          </div>
        </section>
      </main>
    </div>
  );
}
