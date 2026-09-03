import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { finalCtaData } from "@/data/bigcloud";
import { ArrowRight, Check, Zap } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-deep text-white border-b border-navy-border relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-dark-grid opacity-35 pointer-events-none" />

      <Container size="narrow" className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-surface border border-navy-border text-electric text-xs font-semibold tracking-wider uppercase mb-6">
          <Zap className="w-3.5 h-3.5" />
          GET STARTED IN MINUTES
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
          {finalCtaData.heading}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-9 leading-relaxed">
          {finalCtaData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            href={finalCtaData.primaryCtaHref}
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shadow-glow-primary min-w-[220px]"
          >
            {finalCtaData.primaryCtaText}
          </Button>

          <Button
            href="mailto:support@bigcloud.vn"
            variant="dark"
            size="lg"
            className="min-w-[180px]"
          >
            {finalCtaData.secondaryCtaText}
          </Button>
        </div>

        {/* Microcopy features */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 font-mono">
          {finalCtaData.microcopy.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
