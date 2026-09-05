import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { InfrastructurePhoto } from "./InfrastructurePhoto";

export const WhyBigCloudSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy-deep border-b border-navy-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="WHY BIGCLOUD"
          title="Hạ tầng Cloud được xây dựng"
          titleHighlight="cho hiệu năng thực tế"
          description="Chúng tôi tập trung vào 3 trụ cột kỹ thuật cốt lõi: Năng lực xử lý CPU bền bỉ, Ổ cứng NVMe độ trễ thấp và Băng thông mạng đa hướng ổn định."
          align="center"
          theme="dark"
        />

        <div className="space-y-12 lg:space-y-16">
          {/* FEATURE 01: COMPUTE */}
          <div className="bg-navy-surface rounded-2xl border border-navy-border p-6 sm:p-8 lg:p-10 shadow-dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="dark" size="md">
                01 • COMPUTE INFRASTRUCTURE
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                CPU hiệu năng cao cho production workloads
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Tài nguyên xử lý ổn định cho website, API, container và production workloads. 100% vCPU được cấp phát từ vi xử lý AMD EPYC™ và Intel® Xeon® Scalable thế hệ mới, đảm bảo zero-throttling khi tải cao liên tục.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">3.2+ GHz</div>
                  <div className="text-xs text-slate-400">All-core Turbo Frequency</div>
                </div>
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">KVM Dedicated</div>
                  <div className="text-xs text-slate-400">Không oversell CPU</div>
                </div>
              </div>
            </div>

            <InfrastructurePhoto kind="compute" />
          </div>

          {/* FEATURE 02: STORAGE */}
          <div className="bg-navy-surface rounded-2xl border border-navy-border p-6 sm:p-8 lg:p-10 shadow-dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <InfrastructurePhoto kind="storage" className="order-2 lg:order-1" />

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <Badge variant="dark" size="md">
                02 • ENTERPRISE STORAGE
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                NVMe Storage tốc độ cao cho Database & Cache
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Tối ưu cho MySQL, PostgreSQL, Redis và các workload cần khả năng truy xuất dữ liệu nhanh. 100% ổ cứng chuẩn NVMe Enterprise PCIe Gen4 với cấu hình RAID phân tán đảm bảo dữ liệu an toàn tuyệt đối.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">520K IOPS</div>
                  <div className="text-xs text-slate-400">Truy xuất ngẫu nhiên cực đại</div>
                </div>
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">&lt; 0.2 ms</div>
                  <div className="text-xs text-slate-400">Độ trễ đọc ghi trung bình</div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 03: NETWORK */}
          <div className="bg-navy-surface rounded-2xl border border-navy-border p-6 sm:p-8 lg:p-10 shadow-dark-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="dark" size="md">
                03 • NETWORK & CONNECTIVITY
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Network ổn định kết nối đa ISP băng thông 100 Gbps
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                Hạ tầng Core Router kết nối trực tiếp đến các nhà mạng Viettel, VNPT, FPT và VNIX. Độ trễ tới người dùng trong nước dưới 10ms cùng hệ thống lọc tấn công Anti-DDoS tự động ở tầng mạng.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">8 ms</div>
                  <div className="text-xs text-slate-400">Độ trễ phản hồi trong nước</div>
                </div>
                <div className="border-l-2 border-electric pl-3">
                  <div className="text-xl font-bold font-mono text-white">0.01%</div>
                  <div className="text-xs text-slate-400">Tỷ lệ mất gói (Packet Loss)</div>
                </div>
              </div>
            </div>

            <InfrastructurePhoto kind="network" />
          </div>
        </div>
      </Container>
    </section>
  );
};
