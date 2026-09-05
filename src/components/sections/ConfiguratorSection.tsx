"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { configuratorConfig } from "@/data/bigcloud";
import {
  Cpu,
  Activity,
  HardDrive,
  Wifi,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  CheckCircle2,
  Sliders,
} from "lucide-react";

export const ConfiguratorSection: React.FC = () => {
  const [cpu, setCpu] = useState(configuratorConfig.cpu.default);
  const [ram, setRam] = useState(configuratorConfig.ram.default);
  const [storage, setStorage] = useState(configuratorConfig.storage.default);
  const [network, setNetwork] = useState(300);

  // Quick Presets
  const applyPreset = (presetCpu: number, presetRam: number, presetStorage: number, presetNet: number) => {
    setCpu(presetCpu);
    setRam(presetRam);
    setStorage(presetStorage);
    setNetwork(presetNet);
  };

  // Pricing calculation
  const calculatedPrice = useMemo(() => {
    const netOption = configuratorConfig.networkOptions.find((n) => n.value === network) || { price: 0 };
    const cpuCost = cpu * configuratorConfig.cpu.unitPrice;
    const ramCost = ram * configuratorConfig.ram.unitPrice;
    const storageCost = (storage - 20) * configuratorConfig.storage.unitPrice;
    const networkCost = netOption.price;
    const total = configuratorConfig.basePrice + cpuCost + ramCost + storageCost + networkCost;
    return total;
  }, [cpu, ram, storage, network]);

  const formatVnd = (val: number) => new Intl.NumberFormat("vi-VN").format(val) + "đ";

  return (
    <section id="configurator" className="py-20 md:py-28 bg-white border-b border-border relative">
      <Container size="wide">
        <SectionHeader
          eyebrow="CUSTOM RESOURCE BUILDER"
          title="Cần cấu hình riêng cho"
          titleHighlight="workload của bạn?"
          description="Tùy chỉnh linh hoạt số vCPU, dung lượng RAM, ổ đĩa NVMe và băng thông mạng theo đúng nhu cầu thực tế."
          align="center"
        />

        {/* Presets Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs">
          <span className="text-text-muted font-medium mr-1 flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5 text-primary" /> Cấu hình nhanh:
          </span>
          <button
            type="button"
            onClick={() => applyPreset(2, 4, 40, 200)}
            className={`px-3 py-1.5 rounded-full border transition-all ${
              cpu === 2 && ram === 4 && storage === 40 && network === 200
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-slate-50 text-text-secondary border-border hover:bg-slate-100"
            }`}
          >
            Light Web & Dev (2 vCPU • 4GB)
          </button>

          <button
            type="button"
            onClick={() => applyPreset(4, 8, 100, 300)}
            className={`px-3 py-1.5 rounded-full border transition-all ${
              cpu === 4 && ram === 8 && storage === 100 && network === 300
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-slate-50 text-text-secondary border-border hover:bg-slate-100"
            }`}
          >
            Standard Production (4 vCPU • 8GB)
          </button>

          <button
            type="button"
            onClick={() => applyPreset(8, 16, 200, 500)}
            className={`px-3 py-1.5 rounded-full border transition-all ${
              cpu === 8 && ram === 16 && storage === 200 && network === 500
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-slate-50 text-text-secondary border-border hover:bg-slate-100"
            }`}
          >
            High Traffic & DB (8 vCPU • 16GB)
          </button>

          <button
            type="button"
            onClick={() => applyPreset(16, 32, 400, 1000)}
            className={`px-3 py-1.5 rounded-full border transition-all ${
              cpu === 16 && ram === 32 && storage === 400 && network === 1000
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-slate-50 text-text-secondary border-border hover:bg-slate-100"
            }`}
          >
            Enterprise Scale (16 vCPU • 32GB)
          </button>
        </div>

        {/* Main Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sliders Controller (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-border p-6 sm:p-8 space-y-7 shadow-sm">
            {/* Slider 1: vCPU */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy-deep block">Compute (vCPU)</span>
                    <span className="text-[11px] text-text-muted">Vi xử lý AMD EPYC™ Gen3 Enterprise</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-primary">{cpu}</span>
                  <span className="text-xs text-text-muted ml-1 font-semibold">vCPU</span>
                </div>
              </div>

              <input
                type="range"
                min={configuratorConfig.cpu.min}
                max={configuratorConfig.cpu.max}
                step={configuratorConfig.cpu.step}
                value={cpu}
                onChange={(e) => setCpu(parseInt(e.target.value))}
                aria-label="Compute vCPU Slider"
              />

              <div className="flex justify-between text-[11px] text-text-muted font-mono">
                <span>1 vCPU</span>
                <span>4 vCPU</span>
                <span>8 vCPU</span>
                <span>16 vCPU</span>
              </div>
            </div>

            {/* Slider 2: RAM */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy-deep block">Memory (RAM)</span>
                    <span className="text-[11px] text-text-muted">Bộ nhớ DDR4 ECC tự sửa lỗi bit</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-primary">{ram}</span>
                  <span className="text-xs text-text-muted ml-1 font-semibold">GB RAM</span>
                </div>
              </div>

              <input
                type="range"
                min={configuratorConfig.ram.min}
                max={configuratorConfig.ram.max}
                step={configuratorConfig.ram.step}
                value={ram}
                onChange={(e) => setRam(parseInt(e.target.value))}
                aria-label="RAM Memory Slider"
              />

              <div className="flex justify-between text-[11px] text-text-muted font-mono">
                <span>1 GB</span>
                <span>8 GB</span>
                <span>16 GB</span>
                <span>32 GB</span>
                <span>64 GB</span>
              </div>
            </div>

            {/* Slider 3: NVMe Storage */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <HardDrive className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy-deep block">Enterprise NVMe Storage</span>
                    <span className="text-[11px] text-text-muted">PCIe Gen4 RAID 10 Read &gt;3.2 GB/s</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-mono font-extrabold text-primary">{storage}</span>
                  <span className="text-xs text-text-muted ml-1 font-semibold">GB NVMe</span>
                </div>
              </div>

              <input
                type="range"
                min={configuratorConfig.storage.min}
                max={configuratorConfig.storage.max}
                step={configuratorConfig.storage.step}
                value={storage}
                onChange={(e) => setStorage(parseInt(e.target.value))}
                aria-label="NVMe Storage Slider"
              />

              <div className="flex justify-between text-[11px] text-text-muted font-mono">
                <span>20 GB</span>
                <span>100 GB</span>
                <span>250 GB</span>
                <span>500 GB</span>
              </div>
            </div>

            {/* Network Tier Option Selector */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-navy-deep block">Băng thông cổng mạng (Port)</span>
                  <span className="text-[11px] text-text-muted">Không giới hạn dung lượng Data Transfer</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                {configuratorConfig.networkOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setNetwork(opt.value)}
                    className={`py-2 px-2 rounded-lg text-xs font-mono font-semibold border transition-all text-center ${
                      network === opt.value
                        ? "bg-white text-primary border-primary ring-2 ring-primary/20 shadow-sm"
                        : "bg-white/60 text-text-secondary border-border hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div>{opt.label.split(" ")[0]} Mbps</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-navy-deep text-white rounded-2xl p-6 sm:p-7 border border-navy-border shadow-dark-card space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-navy-border">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-electric" />
                  <span className="text-base font-bold font-mono tracking-tight">
                    Custom Cloud Specification
                  </span>
                </div>
                <Badge variant="dark" size="sm" dot>
                  Dedicated
                </Badge>
              </div>

              {/* Spec breakdown */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                  <span className="text-slate-400">Compute:</span>
                  <span className="font-semibold text-white">{cpu} vCPU Core Dedicated</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                  <span className="text-slate-400">Memory:</span>
                  <span className="font-semibold text-white">{ram} GB DDR4 ECC</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                  <span className="text-slate-400">Disk Storage:</span>
                  <span className="font-semibold text-white">{storage} GB NVMe Enterprise</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                  <span className="text-slate-400">Network Speed:</span>
                  <span className="font-semibold text-emerald-400">{network} Mbps Unmetered</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-navy-border/60">
                  <span className="text-slate-400">Public IP:</span>
                  <span className="font-semibold text-white">1 Dedicated IPv4 + /64 IPv6</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">SLA Cam kết:</span>
                  <span className="font-semibold text-electric">99.99% High Availability</span>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-navy-surface rounded-xl p-4 border border-navy-border space-y-1">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  Chi phí dự tính
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    {formatVnd(calculatedPrice)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ tháng</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  ~ {formatVnd(Math.round(calculatedPrice / 720))} / giờ (tính theo giờ)
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  isFullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-glow-primary"
                >
                  Khởi tạo cấu hình này
                </Button>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Giá trên chỉ mang tính minh họa cho phiên bản demo. Khởi tạo tài nguyên hoàn tất trong &lt; 60 giây.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
