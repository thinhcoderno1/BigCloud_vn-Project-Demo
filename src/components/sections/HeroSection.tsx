import React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroData } from "@/data/bigcloud";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 bg-[#030914] pb-16 pt-28 md:pb-24 md:pt-36 lg:pb-28 lg:pt-40">
      <Image
        src="/images/hero-datacenter-dark.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 scale-[1.01] object-cover object-[62%_center] opacity-75 saturate-[0.75] blur-[0.5px]"
      />

      {/* The muted navy veil keeps the datacenter present without competing with the copy. */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,8,23,0.9)_0%,rgba(3,12,29,0.78)_48%,rgba(3,10,24,0.48)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,6,18,0.14)_0%,rgba(2,6,18,0.06)_55%,rgba(2,6,18,0.45)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-dark-grid opacity-[0.1]" />
      <div className="absolute left-[8%] top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <Container size="wide" className="relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              {heroData.eyebrow}
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
              {heroData.h1Prefix}
              <span className="text-sky-400">{heroData.h1Highlight}</span>
              {heroData.h1Suffix}
            </h1>

            <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              {heroData.description}
            </p>

            <div className="mb-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Button
                href={heroData.primaryCtaHref}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="shadow-[0_0_28px_-5px_rgba(37,99,235,0.75)] hover:shadow-[0_0_34px_-4px_rgba(56,189,248,0.72)]"
              >
                {heroData.primaryCtaText}
              </Button>

              <Button
                href={heroData.secondaryCtaHref}
                variant="dark"
                size="lg"
                className="border-slate-600/80 bg-slate-950/55 text-white backdrop-blur-sm hover:border-sky-400/60 hover:bg-slate-900/80"
              >
                {heroData.secondaryCtaText}
              </Button>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 sm:ml-2 sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)]" />
                <span>{heroData.priceStartingAt}</span>
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-700/70 pt-6 text-xs text-slate-300 sm:text-sm">
              {heroData.microTrust.map((item) => (
                <div key={item} className="flex items-center gap-1.5 font-medium">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
