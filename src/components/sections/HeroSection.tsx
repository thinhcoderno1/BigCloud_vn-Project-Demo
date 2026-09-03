"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { heroData } from "@/data/bigcloud";
import {
  ArrowRight,
  Check,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  Globe,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("sgn-01");
  const [selectedOs, setSelectedOs] = useState("ubuntu-24");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploySuccess, setDeploySuccess] = useState(false);

  const handleSimulateDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setDeploySuccess(true);
      setTimeout(() => setDeploySuccess(false), 4000);
    }, 1200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-border/60">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-primary text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {heroData.eyebrow}
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-text-primary tracking-tight leading-[1.15] mb-6">
              {heroData.h1Prefix}
              <span className="text-primary">{heroData.h1Highlight}</span>
              {heroData.h1Suffix}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl font-normal">
              {heroData.description}
            </p>

            {/* Action Buttons & Pricing Note */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 w-full sm:w-auto">
              <Button
                href={heroData.primaryCtaHref}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-md hover:shadow-glow-primary"
              >
                {heroData.primaryCtaText}
              </Button>

              <Button
                href={heroData.secondaryCtaHref}
                variant="secondary"
                size="lg"
              >
                {heroData.secondaryCtaText}
              </Button>

              <div className="sm:ml-2 text-xs sm:text-sm font-semibold text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{heroData.priceStartingAt}</span>
              </div>
            </div>

            {/* Micro Trust Checklist */}
            <div className="pt-6 border-t border-border w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-text-secondary">
              {heroData.microTrust.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (45%) - Interactive Simulated Cloud Console */}
          <div className="lg:col-span-5 relative">
            {/* Ambient subtle back glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 to-electric/10 rounded-2xl blur-xl opacity-70 pointer-events-none" />

            {/* Main Console Box */}
            <div className="relative rounded-xl bg-white border border-slate-200/90 shadow-elevated overflow-hidden font-sans">
              {/* Console Top Bar */}
              <div className="bg-navy-deep px-4 py-3 flex items-center justify-between border-b border-navy-border text-white">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-slate-300 font-medium flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-electric" />
                    bigcloud-cli / quick-deploy
                  </span>
                </div>
                <Badge variant="dark" size="sm" dot>
                  KVM Gen4
                </Badge>
              </div>

              {/* Console Body */}
              <div className="p-5 space-y-4 text-sm bg-slate-50/50">
                {/* Region Selector */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">
                    1. Data Center Region
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRegion("sgn-01")}
                      className={`px-3 py-2 rounded-md text-xs font-medium border text-left flex items-center justify-between transition-all ${
                        selectedRegion === "sgn-01"
                          ? "bg-white border-primary text-primary shadow-subtle ring-1 ring-primary/20"
                          : "bg-white/60 border-border text-text-secondary hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">SGN-01 (TP.HCM)</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-mono font-bold">&lt;8ms</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRegion("han-01")}
                      className={`px-3 py-2 rounded-md text-xs font-medium border text-left flex items-center justify-between transition-all ${
                        selectedRegion === "han-01"
                          ? "bg-white border-primary text-primary shadow-subtle ring-1 ring-primary/20"
                          : "bg-white/60 border-border text-text-secondary hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">HAN-01 (Hà Nội)</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-mono font-bold">&lt;12ms</span>
                    </button>
                  </div>
                </div>

                {/* OS Choice */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-text-muted block mb-1.5">
                    2. Operating System
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "ubuntu-24", label: "Ubuntu 24.04 LTS" },
                      { id: "debian-12", label: "Debian 12" },
                      { id: "almalinux-9", label: "AlmaLinux 9" },
                    ].map((os) => (
                      <button
                        key={os.id}
                        type="button"
                        onClick={() => setSelectedOs(os.id)}
                        className={`px-2.5 py-1.5 rounded-md text-xs font-medium border text-center transition-all truncate ${
                          selectedOs === os.id
                            ? "bg-white border-primary text-primary shadow-subtle ring-1 ring-primary/20"
                            : "bg-white/60 border-border text-text-secondary hover:border-slate-300"
                        }`}
                      >
                        {os.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Instance Spec Summary */}
                <div className="bg-white rounded-lg p-3.5 border border-border space-y-2.5 shadow-subtle">
                  <div className="flex items-center justify-between text-xs font-semibold text-text-primary pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-primary" />
                      Standard Node Instance
                    </span>
                    <span className="text-emerald-600 text-[11px] font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Available
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{heroData.simulatedConsole.specs.cpu}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{heroData.simulatedConsole.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{heroData.simulatedConsole.specs.storage}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{heroData.simulatedConsole.specs.network}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & Deploy Trigger */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-text-muted font-medium">Chi phí ước tính</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-text-primary font-mono">
                        {heroData.simulatedConsole.price}
                      </span>
                      <span className="text-xs text-text-muted">
                        {heroData.simulatedConsole.period}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant={deploySuccess ? "secondary" : "primary"}
                    size="md"
                    onClick={handleSimulateDeploy}
                    disabled={isDeploying}
                    className="min-w-[140px]"
                  >
                    {isDeploying ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Deploying...
                      </span>
                    ) : deploySuccess ? (
                      <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        Server Ready!
                      </span>
                    ) : (
                      "Deploy Server"
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Live Telemetry Badge (Bottom Right) */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-navy-deep/95 backdrop-blur-md text-white border border-navy-border rounded-lg p-3 shadow-dark-card text-xs hidden sm:block w-56 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-navy-border pb-1.5 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  SERVER TELEMETRY
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between text-slate-300">
                  <span>CPU Load:</span>
                  <span className="text-electric font-semibold">
                    {heroData.simulatedConsole.floatingMetrics.cpu}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Memory:</span>
                  <span className="text-slate-200">
                    {heroData.simulatedConsole.floatingMetrics.memory}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Network:</span>
                  <span className="text-emerald-400">
                    {heroData.simulatedConsole.floatingMetrics.network}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
