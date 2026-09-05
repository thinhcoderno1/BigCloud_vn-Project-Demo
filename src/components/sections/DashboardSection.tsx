"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { controlPanelMock } from "@/data/bigcloud";
import {
  Server,
  LayoutDashboard,
  Camera,
  Archive,
  Network,
  Shield,
  Activity,
  Key,
  RotateCw,
  Power,
  Sliders,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export const DashboardSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [copiedIp, setCopiedIp] = useState(false);
  const [serverState, setServerState] = useState<"Running" | "Restarting" | "Stopped">("Running");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(controlPanelMock.ipv4);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const handleAction = (action: string) => {
    if (action.includes("Restart")) {
      setServerState("Restarting");
      setTimeout(() => setServerState("Running"), 2000);
    } else if (action.includes("Shutdown")) {
      setServerState(serverState === "Running" ? "Stopped" : "Running");
    }
  };

  const sidebarItems = [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Instances", icon: Server, count: 3 },
    { label: "Snapshots", icon: Camera },
    { label: "Backups", icon: Archive },
    { label: "Network & IP", icon: Network },
    { label: "Cloud Firewall", icon: Shield },
    { label: "Monitoring", icon: Activity },
    { label: "API & Tokens", icon: Key },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="UNIFIED CONTROL PANEL"
          title="Quản lý Cloud Server trong"
          titleHighlight="một giao diện trực quan"
          description="Tất cả thao tác vận hành cơ bản: theo dõi metric thời gian thực, reboot, snapshot, cấu hình firewall và scale tài nguyên được gói gọn trong dashboard hiện đại."
          align="center"
        />

        {/* Realistic SaaS Control Panel Mockup */}
        <div className="rounded-2xl border border-slate-300 shadow-elevated bg-slate-900 overflow-hidden font-sans text-slate-200">
          {/* Top Window Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                portal.bigcloud.vn / instances / {controlPanelMock.instanceName}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                Region: SGN-01 (TP.HCM)
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
            {/* Sidebar (Hidden on small mobile, 2 cols on lg) */}
            <div className="lg:col-span-3 bg-slate-950/60 p-4 border-r border-slate-800 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 py-2">
                  Cloud Management
                </div>
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.label;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveTab(item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.count && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick SSH link */}
              <div className="pt-4 border-t border-slate-800/80 mt-4 text-[11px] text-slate-400 px-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-electric" /> Web SSH Terminal
                </span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Main Content Area (9 cols on lg) */}
            <div className="lg:col-span-9 p-5 sm:p-7 bg-slate-900 space-y-6">
              {/* Instance Header Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold font-mono text-white">
                      {controlPanelMock.instanceName}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${
                        serverState === "Running"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : serverState === "Restarting"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          serverState === "Running"
                            ? "bg-emerald-400 animate-pulse"
                            : serverState === "Restarting"
                            ? "bg-amber-400 animate-spin"
                            : "bg-rose-400"
                        }`}
                      />
                      {serverState}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-3">
                    <span>{controlPanelMock.os}</span>
                    <span>•</span>
                    <span>Uptime: {controlPanelMock.uptime}</span>
                  </div>
                </div>

                {/* IP & SSH helper */}
                <div className="flex items-center gap-2">
                  <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-2">
                    <span className="text-slate-500">IPv4:</span>
                    <span className="text-white font-semibold">{controlPanelMock.ipv4}</span>
                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Copy IP"
                    >
                      {copiedIp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Telemetry Gauges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* CPU Card */}
                <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 space-y-2 font-mono">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>CPU Utilization</span>
                    <span className="text-electric font-bold">{controlPanelMock.cpuUsage}%</span>
                  </div>
                  <div className="text-lg font-bold text-white">4 vCPU</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-electric h-full rounded-full" style={{ width: `${controlPanelMock.cpuUsage}%` }} />
                  </div>
                </div>

                {/* RAM Card */}
                <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 space-y-2 font-mono">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Memory (RAM)</span>
                    <span className="text-emerald-400 font-bold">46%</span>
                  </div>
                  <div className="text-lg font-bold text-white">3.7 / 8 GB</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: "46%" }} />
                  </div>
                </div>

                {/* Storage Card */}
                <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 space-y-2 font-mono">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>NVMe Disk</span>
                    <span className="text-amber-400 font-bold">52%</span>
                  </div>
                  <div className="text-lg font-bold text-white">42 / 80 GB</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: "52%" }} />
                  </div>
                </div>

                {/* Bandwidth Card */}
                <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 space-y-2 font-mono">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Traffic Rate</span>
                    <span className="text-primary font-bold">In/Out</span>
                  </div>
                  <div className="text-lg font-bold text-white">128 Mbps</div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: "42%" }} />
                  </div>
                </div>
              </div>

              {/* Realtime Live Chart Preview */}
              <div className="bg-slate-950/70 rounded-xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 font-mono">Network Ingress / Egress Telemetry</span>
                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" /> In: 42.8 Mbps
                    </span>
                    <span className="flex items-center gap-1 text-sky-400">
                      <span className="w-2 h-2 rounded-full bg-sky-400" /> Out: 85.2 Mbps
                    </span>
                  </div>
                </div>

                <div className="h-28 w-full bg-slate-950 rounded-lg p-2 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <path
                      d="M0 65 Q 60 40, 120 70 T 240 30 T 360 50 T 500 25"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 80 Q 70 60, 140 85 T 280 50 T 420 65 T 500 45"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Thao tác nhanh trên máy chủ
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <button
                    type="button"
                    onClick={() => handleAction("Restart")}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-amber-400" />
                    <span>Reboot Server</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAction("Shutdown")}
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    <Power className="w-3.5 h-3.5 text-rose-400" />
                    <span>{serverState === "Running" ? "Power Off" : "Power On"}</span>
                  </button>

                  <button
                    type="button"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5 text-electric" />
                    <span>Create Snapshot</span>
                  </button>

                  <button
                    type="button"
                    className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    <Sliders className="w-3.5 h-3.5 text-primary" />
                    <span>Scale Resources</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
