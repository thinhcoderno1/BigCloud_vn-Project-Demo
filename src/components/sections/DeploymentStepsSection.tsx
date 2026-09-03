import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { deploymentSteps } from "@/data/bigcloud";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const DeploymentStepsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="FAST ONBOARDING"
          title="Từ đăng ký đến Cloud Server"
          titleHighlight="chỉ trong 3 bước"
          description="Quy trình khởi tạo máy chủ được tự động hoá toàn diện, giúp bạn tiết kiệm thời gian thiết lập và nhanh chóng bắt tay vào công việc."
          align="center"
        />

        {/* Horizontal Connected Stepper */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-primary via-electric to-emerald-500 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {deploymentSteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-border p-6 sm:p-7 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary-light text-primary border border-blue-200/80 flex items-center justify-center font-mono font-extrabold text-lg shadow-sm">
                      {step.stepNumber}
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted">
                      Step {idx + 1} of 3
                    </span>
                  </div>

                  {/* Step Title & Details */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy-deep mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
