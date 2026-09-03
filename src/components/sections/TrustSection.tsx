import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustPartners, trustLiveMetrics } from "@/data/bigcloud";
import { ShieldCheck, Cpu, Server } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="ENTERPRISE ECOSYSTEM"
          title="Hạ tầng được xây dựng trên"
          titleHighlight="nền tảng công nghệ hàng đầu"
          description="Hợp tác cùng các nhà sản xuất phần cứng, giải pháp mạng và hệ điều hành tiêu chuẩn công nghiệp thế giới."
          align="center"
        />

        {/* Partner Tech Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-6">
          {trustPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-surface rounded-xl border border-border p-5 text-center flex flex-col items-center justify-center h-24 hover:border-slate-300 hover:shadow-subtle transition-all"
            >
              <div className="text-sm font-extrabold text-navy-deep font-mono tracking-tight">
                {partner.logoText}
              </div>
              <div className="text-[10px] text-text-muted mt-1 font-medium">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        {/* Small subtle note */}
        <p className="text-center text-xs text-text-muted mb-16 italic">
          Logo đối tác và công nghệ phần cứng minh họa cho kiến trúc triển khai tiêu chuẩn của BigCloud.
        </p>

        {/* Live Infrastructure Counters Strip */}
        <div className="bg-slate-50/80 rounded-2xl border border-border p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {trustLiveMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-navy-deep font-mono tracking-tight">
                <span className="text-primary">{metric.value}</span>
              </div>
              <div className="text-sm font-bold text-text-primary">
                {metric.label}
              </div>
              <div className="text-xs text-text-muted">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
