import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Cpu, HardDrive, Wifi, Activity, Zap, CheckCircle2, BarChart2 } from "lucide-react";

export const WhyBigCloudSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="WHY BIGCLOUD"
          title="Hạ tầng Cloud được xây dựng"
          titleHighlight="cho hiệu năng thực tế"
          description="Chúng tôi tập trung vào 3 trụ cột kỹ thuật cốt lõi: Năng lực xử lý CPU bền bỉ, Ổ cứng NVMe độ trễ thấp và Băng thông mạng đa hướng ổn định."
          align="center"
        />

        <div className="space-y-12 lg:space-y-16">
          {/* FEATURE 01: COMPUTE */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="primary" size="md">
                01 • COMPUTE INFRASTRUCTURE
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep tracking-tight">
                CPU hiệu năng cao cho production workloads
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                Tài nguyên xử lý ổn định cho website, API, container và production workloads. 100% vCPU được cấp phát từ vi xử lý AMD EPYC™ và Intel® Xeon® Scalable thế hệ mới, đảm bảo zero-throttling khi tải cao liên tục.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">3.2+ GHz</div>
                  <div className="text-xs text-text-muted">All-core Turbo Frequency</div>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">KVM Dedicated</div>
                  <div className="text-xs text-text-muted">Không oversell CPU</div>
                </div>
              </div>
            </div>

            {/* Visual: Mini CPU Dashboard */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-dark-card font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-electric" />
                  <span className="font-bold text-slate-200">EPYC 7763 64-Core Telemetry</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Optimal Health
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase">CPU Utilization</div>
                  <div className="text-2xl font-bold text-white mt-1">68.4%</div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "68.4%" }} />
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                  <div className="text-slate-400 text-[10px] uppercase">Compute Benchmark Score</div>
                  <div className="text-2xl font-bold text-electric mt-1">9.4 / 10</div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-electric h-full rounded-full" style={{ width: "94%" }} />
                  </div>
                </div>
              </div>

              {/* vCPU Cores Grid Simulation */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">vCPU Threads Load Distribution</div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[64, 72, 58, 80, 69, 61, 75, 66].map((load, i) => (
                    <div key={i} className="bg-slate-800 p-1.5 rounded border border-slate-700/60 text-center">
                      <div className="text-[10px] text-slate-400">Core {i}</div>
                      <div className="text-xs font-bold text-slate-200">{load}%</div>
                      <div className="w-full bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${load > 75 ? "bg-amber-400" : "bg-emerald-400"}`}
                          style={{ width: `${load}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 02: STORAGE */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual: Benchmark Panel */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-dark-card font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-primary" />
                  <span className="font-bold text-slate-200">FIO NVMe Storage Benchmark Test</span>
                </div>
                <Badge variant="dark" size="sm">
                  PCIe Gen4
                </Badge>
              </div>

              {/* Benchmark bars */}
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300">Sequential Read (fio 1M bs):</span>
                    <span className="font-bold text-emerald-400">3.2 GB/s</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: "92%" }} />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">So với Standard SSD: ~550 MB/s (Nhanh hơn 5.8x)</div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300">Sequential Write (fio 1M bs):</span>
                    <span className="font-bold text-electric">2.6 GB/s</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-sky-400 h-full rounded-full" style={{ width: "80%" }} />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">So với Standard SSD: ~500 MB/s (Nhanh hơn 5.2x)</div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300">Random 4K Read IOPS:</span>
                    <span className="font-bold text-amber-400">520,000 IOPS</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: "88%" }} />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Độ trễ trung bình truy xuất: &lt; 0.18 ms</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <Badge variant="primary" size="md">
                02 • ENTERPRISE STORAGE
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep tracking-tight">
                NVMe Storage tốc độ cao cho Database & Cache
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                Tối ưu cho MySQL, PostgreSQL, Redis và các workload cần khả năng truy xuất dữ liệu nhanh. 100% ổ cứng chuẩn NVMe Enterprise PCIe Gen4 với cấu hình RAID phân tán đảm bảo dữ liệu an toàn tuyệt đối.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">520K IOPS</div>
                  <div className="text-xs text-text-muted">Truy xuất ngẫu nhiên cực đại</div>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">&lt; 0.2 ms</div>
                  <div className="text-xs text-text-muted">Độ trễ đọc ghi trung bình</div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 03: NETWORK */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 lg:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="primary" size="md">
                03 • NETWORK & CONNECTIVITY
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep tracking-tight">
                Network ổn định kết nối đa ISP băng thông 100 Gbps
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                Hạ tầng Core Router kết nối trực tiếp đến các nhà mạng Viettel, VNPT, FPT và VNIX. Độ trễ tới người dùng trong nước dưới 10ms cùng hệ thống lọc tấn công Anti-DDoS tự động ở tầng mạng.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">8 ms</div>
                  <div className="text-xs text-text-muted">Độ trễ phản hồi trong nước</div>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <div className="text-xl font-bold font-mono text-navy-deep">0.01%</div>
                  <div className="text-xs text-text-muted">Tỷ lệ mất gói (Packet Loss)</div>
                </div>
              </div>
            </div>

            {/* Visual: Network Waveform Graph */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-dark-card font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-slate-200">Port Traffic & Latency Realtime</span>
                </div>
                <span className="text-slate-400 text-[11px]">Port: 300 Mbps</span>
              </div>

              {/* Realtime metric badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-800/90 p-2 rounded border border-slate-700">
                  <div className="text-[10px] text-slate-400">Current Ingress</div>
                  <div className="text-sm font-bold text-emerald-400">142.8 Mbps</div>
                </div>
                <div className="bg-slate-800/90 p-2 rounded border border-slate-700">
                  <div className="text-[10px] text-slate-400">Current Egress</div>
                  <div className="text-sm font-bold text-sky-400">218.4 Mbps</div>
                </div>
                <div className="bg-slate-800/90 p-2 rounded border border-slate-700">
                  <div className="text-[10px] text-slate-400">VN Ping Latency</div>
                  <div className="text-sm font-bold text-amber-400">~8 ms</div>
                </div>
              </div>

              {/* SVG Line Graph */}
              <div className="relative h-28 w-full bg-slate-950/60 rounded-lg p-2 border border-slate-800 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="400" y2="25" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="0" y1="75" x2="400" y2="75" stroke="#1E293B" strokeDasharray="3 3" />

                  {/* Gradient Area */}
                  <defs>
                    <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 70 Q 50 30, 100 55 T 200 40 T 300 20 T 400 35 L 400 100 L 0 100 Z"
                    fill="url(#netGrad)"
                  />
                  <path
                    d="M0 70 Q 50 30, 100 55 T 200 40 T 300 20 T 400 35"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Trạng thái: BGP Multi-homing Active</span>
                <span className="text-emerald-400">Packet Loss: 0.00%</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
