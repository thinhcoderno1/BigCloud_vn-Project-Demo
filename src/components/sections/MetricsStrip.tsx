import React from "react";
import { Container } from "@/components/ui/Container";
import { infrastructureMetrics } from "@/data/bigcloud";

export const MetricsStrip: React.FC = () => {
  return (
    <section className="bg-white border-b border-border py-8 lg:py-10">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-border">
          {infrastructureMetrics.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx === 0 ? "lg:pr-6" : idx === infrastructureMetrics.length - 1 ? "lg:pl-6" : "lg:px-6"
              } ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-navy-deep font-mono tracking-tight flex items-baseline gap-1">
                <span className="text-primary">{metric.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-text-primary mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-0.5 leading-snug">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
