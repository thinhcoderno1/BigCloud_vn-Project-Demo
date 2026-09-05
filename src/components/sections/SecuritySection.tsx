import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { securityCapabilities } from "@/data/bigcloud";
import { Check, ShieldCheck, Lock, Activity } from "lucide-react";

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="ENTERPRISE-GRADE SECURITY"
          title="Security và Availability được"
          titleHighlight="tích hợp sâu từ hạ tầng"
          description="Chúng tôi thiết kế hệ thống bảo mật đa lớp từ tầng vật lý data center, lớp mạng truyền tải cho đến từng phiên bản máy chủ ảo hóa KVM."
          align="center"
        />

        {/* Technical Capability Table */}
        <div className="rounded-2xl border border-border bg-white shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-border text-xs font-mono font-bold text-navy-deep uppercase tracking-wider">
                  <th className="py-4 px-6 w-1/3">Tiêu chuẩn kỹ thuật</th>
                  <th className="py-4 px-6 w-24 text-center">Trạng thái</th>
                  <th className="py-4 px-6">Chi tiết vận hành & Bảo vệ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm text-text-secondary">
                {securityCapabilities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-text-primary font-mono text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.bigCloud === "boolean" && row.bigCloud ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="w-4 h-4" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="font-mono font-bold text-primary text-sm">
                          {row.bigCloud}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm leading-relaxed text-text-secondary">
                      {row.description}
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
