"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCases } from "@/data/bigcloud";
import {
  Globe,
  Code2,
  Database,
  Cpu,
  Building2,
  CheckCircle2,
  ArrowRight,
  Server,
  Sparkles,
} from "lucide-react";

export const UseCasesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState("website");

  const currentCase = useCases.find((c) => c.id === selectedCaseId) || useCases[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "website":
        return <Globe className="w-4 h-4" />;
      case "application":
        return <Code2 className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "development":
        return <Cpu className="w-4 h-4" />;
      case "business":
        return <Building2 className="w-4 h-4" />;
      default:
        return <Server className="w-4 h-4" />;
    }
  };

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="WORKLOAD OPTIMIZATION"
          title="Một nền tảng Cloud cho"
          titleHighlight="nhiều mục đích sử dụng"
          description="Kiến trúc linh hoạt đáp ứng từ website thương mại điện tử, backend API microservices cho đến hệ thống quản trị doanh nghiệp quy mô lớn."
          align="center"
        />

        {/* Workload Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/80 shadow-inner">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                type="button"
                onClick={() => setSelectedCaseId(uc.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  selectedCaseId === uc.id
                    ? "bg-white text-navy-deep shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className={selectedCaseId === uc.id ? "text-primary" : "text-slate-400"}>
                  {getTabIcon(uc.id)}
                </span>
                <span>{uc.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Detail Card */}
        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <Badge variant="primary" size="md">
                  Giải pháp {currentCase.tabLabel}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep mt-2">
                  {currentCase.title}
                </h3>
                <p className="text-sm font-medium text-primary mt-1">
                  {currentCase.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {currentCase.description}
              </p>

              {/* Benefits checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Ưu điểm vận hành:
                </div>
                {currentCase.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-text-primary font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Công nghệ tương thích tối ưu:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Recommended Spec Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-navy-deep text-white rounded-xl p-6 border border-navy-border shadow-dark-card space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-navy-border">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-electric" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                      Cấu hình đề xuất
                    </span>
                  </div>
                  <Badge variant="dark" size="sm">
                    Recommended
                  </Badge>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                    <span className="text-slate-400">Compute:</span>
                    <span className="font-semibold text-white">{currentCase.recommendedSpec.cpu}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                    <span className="text-slate-400">RAM:</span>
                    <span className="font-semibold text-white">{currentCase.recommendedSpec.ram}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                    <span className="text-slate-400">NVMe Disk:</span>
                    <span className="font-semibold text-white">{currentCase.recommendedSpec.storage}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Network:</span>
                    <span className="font-semibold text-emerald-400">{currentCase.recommendedSpec.network}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href="#configurator"
                    variant="primary"
                    size="md"
                    isFullWidth
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {currentCase.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
