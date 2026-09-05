import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { vpsComparison } from "@/data/bigcloud";
import { Check, X, Server, Layers } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="ARCHITECTURE COMPARISON"
          title="Cloud Server khác gì so với"
          titleHighlight="VPS truyền thống?"
          description="Sự khác biệt cốt lõi nằm ở hạ tầng điện toán phân tán, khả năng mở rộng tài nguyên không cần cài đặt lại và độ tin cậy phần cứng cao hơn."
          align="center"
        />

        {/* Comparison Table */}
        <div className="rounded-2xl border border-border bg-white shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-5 px-6 bg-slate-50/80 text-xs font-mono font-bold text-navy-deep uppercase tracking-wider w-1/3">
                    Đặc tính kỹ thuật
                  </th>
                  <th className="py-5 px-6 bg-slate-100/60 text-xs font-mono font-bold text-text-muted uppercase tracking-wider w-1/3">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-slate-400" />
                      <span>VPS truyền thống</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 bg-blue-50/70 text-xs font-mono font-bold text-primary uppercase tracking-wider w-1/3 border-l border-blue-100">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      <span>BigCloud Server</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {vpsComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy-deep font-mono text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-text-muted">
                      {row.traditionalVps}
                    </td>
                    <td className="py-4 px-6 font-medium text-text-primary bg-blue-50/30 border-l border-blue-100/80">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span>{row.bigCloud}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};
