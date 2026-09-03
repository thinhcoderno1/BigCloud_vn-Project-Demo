import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { dataCenterSpecs } from "@/data/bigcloud";
import {
  Server,
  Shield,
  Zap,
  Globe,
  Radio,
  HardDrive,
  Cpu,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

export const InfrastructureSection: React.FC = () => {
  return (
    <section id="infrastructure" className="py-20 md:py-28 bg-navy-deep text-white border-b border-navy-border relative overflow-hidden">
      {/* Dark subtle grid background */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <SectionHeader
          eyebrow="TIER 3 FACILITY ARCHITECTURE"
          title="Hạ tầng đặt tại Data Center"
          titleHighlight="tiêu chuẩn Quốc tế"
          description="Cụm máy chủ BigCloud được vận hành tại Trung tâm Dữ liệu Viettel IDC TP.HCM (SGN-01), đảm bảo nguồn điện kép 2N, điều hòa chính xác và kết nối cáp quang trực tiếp tới các ISP hàng đầu."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Data Center Specs & Metrics (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-surface border border-navy-border text-xs text-slate-300 font-mono">
              <Globe className="w-3.5 h-3.5 text-primary" />
              <span>Location: {dataCenterSpecs.location} ({dataCenterSpecs.regionCode})</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {dataCenterSpecs.facility}
            </h3>

            {/* Metrics List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {dataCenterSpecs.metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-navy-surface p-4 rounded-xl border border-navy-border font-mono space-y-1 hover:border-slate-700 transition-colors"
                >
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">{item.label}</div>
                  <div className="text-xl font-bold text-electric">{item.value}</div>
                  <div className="text-xs text-slate-400 font-sans mt-1">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-navy-surface/80 border border-navy-border text-xs text-slate-300 space-y-2 font-mono">
              <div className="text-electric font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Physical Security & Compliance:
              </div>
              <p className="font-sans text-slate-400 leading-relaxed">
                Kiểm soát an ninh 6 lớp sinh trắc học, giám sát camera CCTV 24/7, hệ thống phòng cháy chữa cháy khí FM-200 và chứng nhận tiêu chuẩn bảo mật ISO 27001 / PCI-DSS.
              </p>
            </div>
          </div>

          {/* Right Column: Abstract SVG Network Topology (6 cols) */}
          <div className="lg:col-span-6 bg-navy-surface rounded-2xl border border-navy-border p-6 sm:p-8 shadow-dark-card font-mono text-xs">
            <div className="flex items-center justify-between border-b border-navy-border pb-4 mb-6">
              <span className="font-bold text-slate-200 text-sm flex items-center gap-2">
                <Radio className="w-4 h-4 text-electric animate-pulse" />
                Network & Compute Topology
              </span>
              <Badge variant="dark" size="sm" dot>
                Online
              </Badge>
            </div>

            {/* Structured Connected Node Flow */}
            <div className="space-y-4 relative">
              {/* Node 1: Public Internet */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-electric flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Public Internet (Tier 1 ISP Core)</div>
                    <div className="text-[11px] text-slate-400">Viettel, VNPT, FPT Telecom BGP Ingress</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  100 Gbps
                </span>
              </div>

              {/* Connecting Flow Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-slate-700 flex items-center justify-center">
                  <ArrowDown className="w-3 h-3 text-electric" />
                </div>
              </div>

              {/* Node 2: Edge Routing & Anti-DDoS */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Edge Anti-DDoS Scrubbing Layer</div>
                    <div className="text-[11px] text-slate-400">L3/L4 Traffic Filtering & Rate Limiting</div>
                  </div>
                </div>
                <span className="text-[10px] text-electric font-bold px-2 py-0.5 rounded bg-electric/10 border border-electric/30">
                  Active Filter
                </span>
              </div>

              {/* Connecting Flow Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-slate-700 flex items-center justify-center">
                  <ArrowDown className="w-3 h-3 text-electric" />
                </div>
              </div>

              {/* Node 3: KVM Hypervisors */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-electric" />
                  </div>
                  <div>
                    <div className="font-bold text-white">KVM Compute Hypervisor Cluster</div>
                    <div className="text-[11px] text-slate-400">AMD EPYC™ & Intel Xeon Dual-Socket Nodes</div>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  ECC DDR4
                </span>
              </div>

              {/* Connecting Flow Line */}
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-slate-700 flex items-center justify-center">
                  <ArrowDown className="w-3 h-3 text-electric" />
                </div>
              </div>

              {/* Node 4: NVMe Storage Pool */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Distributed NVMe All-Flash SAN Pool</div>
                    <div className="text-[11px] text-slate-400">PCIe Gen4 RAID 10 Redundant Storage</div>
                  </div>
                </div>
                <span className="text-[10px] text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  &gt;3.2 GB/s
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
