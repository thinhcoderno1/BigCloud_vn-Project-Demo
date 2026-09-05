"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { osCatalog, appCatalog } from "@/data/bigcloud";
import { Server, Boxes, Check } from "lucide-react";
import { CatalogLogos } from "./CatalogLogos";

export const OsAppsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"os" | "app">("os");

  const currentItems = activeTab === "os" ? osCatalog : appCatalog;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="READY-TO-USE ENVIRONMENTS"
          title="Triển khai môi trường"
          titleHighlight="bạn cần trong 1 click"
          description="Lựa chọn hệ điều hành Linux/Windows nguyên bản hoặc cài đặt sẵn các template ứng dụng và DevOps stack phổ biến."
          align="center"
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab("os")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "os"
                  ? "bg-white text-navy-deep shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Server className="w-4 h-4 text-primary" />
              <span>Hệ điều hành ({osCatalog.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("app")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "app"
                  ? "bg-white text-navy-deep shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Boxes className="w-4 h-4 text-primary" />
              <span>1-Click Applications & Stacks ({appCatalog.length})</span>
            </button>
          </div>
        </div>

        {/* Catalog Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl border border-border p-4 sm:p-5 hover:border-slate-300 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <CatalogLogos id={item.id} />
                  {item.badge && (
                    <Badge variant="primary" size="sm">
                      {item.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-base font-bold text-navy-deep">
                  {item.name}
                </h3>
                {item.version && (
                  <div className="text-xs font-mono text-primary font-medium mt-0.5">
                    {item.version}
                  </div>
                )}
                <p className="text-xs text-text-secondary leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-text-muted">
                <span className="flex items-center gap-1 font-medium text-emerald-600">
                  <Check className="w-3.5 h-3.5" /> Auto-Provisioned
                </span>
                <span className="font-mono">SSH / Cloud-init</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
