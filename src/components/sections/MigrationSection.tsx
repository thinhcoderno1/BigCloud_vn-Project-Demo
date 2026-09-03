import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { migrationCtaData } from "@/data/bigcloud";
import { ArrowRight, Server, CheckCircle2, RefreshCw, Layers } from "lucide-react";

export const MigrationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-border">
      <Container size="wide">
        <div className="rounded-3xl bg-gradient-to-br from-navy-deep to-navy-surface text-white p-8 sm:p-12 lg:p-14 border border-navy-border shadow-dark-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="dark" size="md">
                ZERO-DOWNTIME MIGRATION SERVICE
              </Badge>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {migrationCtaData.title}{" "}
                <span className="text-electric block mt-1">
                  {migrationCtaData.subtitle}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {migrationCtaData.description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow-primary"
                >
                  {migrationCtaData.primaryCtaText}
                </Button>

                <Button
                  href="#contact"
                  variant="white"
                  size="lg"
                >
                  {migrationCtaData.secondaryCtaText}
                </Button>
              </div>
            </div>

            {/* Right Visual: Migration Workflow Flowchart (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 font-mono text-xs space-y-3">
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[11px] pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Migration Workflow</span>
                <span className="text-emerald-400">100% Free</span>
              </div>

              {migrationCtaData.workflowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] shrink-0 ${
                      idx === 3
                        ? "bg-primary text-white ring-2 ring-primary/40"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <div className="flex-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-white text-xs">{step.label}</div>
                      <div className="text-[10px] text-slate-400">{step.sub}</div>
                    </div>
                    {idx === 3 ? (
                      <Layers className="w-4 h-4 text-electric shrink-0" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
