"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  LANDING_FAQS,
  TESTIMONIALS,
} from "@/modules/catalog/presentation/cpns-landing-content";
import { APP_ROUTES } from "@/shared/constants/app";

export function CpnsTestimonialsAndFaqSection() {
  const [featuredTestimonial, ...otherTestimonials] = TESTIMONIALS;

  return (
    <>
      <section
        id="testimoni"
        aria-labelledby="testimoni-title"
        className="border-y border-blue-100 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Testimoni Alumni
          </p>
          <h2
            id="testimoni-title"
            className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            Cerita Peserta yang Lolos Seleksi ASN
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {featuredTestimonial && (
              <article className="rounded-3xl border border-blue-100 bg-[#f8fbff] p-8 sm:p-10">
                <Quote className="size-8 text-blue-600/80" aria-hidden />
                <p className="mt-5 text-xl font-medium leading-9 text-slate-900 sm:text-2xl">
                  “{featuredTestimonial.quote}”
                </p>
                <div className="mt-8 flex items-center gap-3.5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {featuredTestimonial.initials}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-950">
                      {featuredTestimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{featuredTestimonial.role}</p>
                  </div>
                </div>
              </article>
            )}

            <div className="divide-y divide-blue-100 border-y border-blue-100">
              {otherTestimonials.map((item) => (
                <article key={item.name} className="py-7">
                  <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="bg-[#f8fbff] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                FAQ
              </p>
              <h2
                id="faq-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              >
                Pertanyaan Umum
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Informasi singkat mengenai program persiapan CPNS di Wiyata Edu.
              </p>

              <div className="mt-6">
                <Button
                  asChild
                  className="h-10 bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  <Link href={APP_ROUTES.pricing}>
                    Pilih Paket Belajar
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="divide-y divide-blue-100 border-y border-blue-100">
              {LANDING_FAQS.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950 transition-colors group-open:text-blue-700">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
