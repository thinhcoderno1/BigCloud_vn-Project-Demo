"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { pricingPlans, billingCycles } from "@/data/bigcloud";
import { Check, ArrowRight, Zap, Sparkles } from "lucide-react";

export const PricingSection: React.FC = () => {
  const [selectedCycleId, setSelectedCycleId] = useState("monthly");

  const currentCycle = billingCycles.find((c) => c.id === selectedCycleId) || billingCycles[0];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="TRANSPARENT PRICING"
          title="Cloud Server phù hợp với"
          titleHighlight="mọi quy mô"
          description="Bắt đầu với cấu hình phù hợp hôm nay và nâng cấp tài nguyên linh hoạt khi hệ thống phát triển. Chi phí cố định minh bạch, không phí ẩn."
          align="center"
        />

        {/* Billing Cycle Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-lg bg-slate-200/80 border border-slate-300/80 shadow-inner">
            {billingCycles.map((cycle) => (
              <button
                key={cycle.id}
                type="button"
                onClick={() => setSelectedCycleId(cycle.id)}
                className={`relative px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  selectedCycleId === cycle.id
                    ? "bg-white text-text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span>{cycle.label}</span>
                {cycle.tag && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      selectedCycleId === cycle.id
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    {cycle.tag}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {pricingPlans.map((plan) => {
            const discountedMonthlyPrice = Math.round(
              plan.monthlyPrice * (1 - currentCycle.discountPercent / 100)
            );
            const totalCyclePrice = discountedMonthlyPrice * currentCycle.months;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-xl bg-white transition-all duration-200 p-6 ${
                  plan.isPopular
                    ? "border-2 border-primary shadow-elevated ring-1 ring-primary/20 -translate-y-1 lg:-translate-y-2 z-10"
                    : "border border-border shadow-card hover:shadow-card-hover hover:border-slate-300"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-electric" />
                    {plan.popularBadgeText || "MOST POPULAR"}
                  </div>
                )}

                <div>
                  {/* Plan Name & Workload */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-navy-deep font-mono tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">{plan.workload}</p>
                  </div>

                  {/* Price Block */}
                  <div className="pb-5 mb-5 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-navy-deep font-mono tracking-tight">
                        {formatCurrency(discountedMonthlyPrice)}
                      </span>
                      <span className="text-xs text-text-muted font-medium">/tháng</span>
                    </div>

                    {currentCycle.discountPercent > 0 && (
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                        <span className="line-through text-slate-400">
                          {formatCurrency(plan.monthlyPrice)}
                        </span>
                        <span>Tổng {formatCurrency(totalCyclePrice)} / {currentCycle.label}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Hardware Specs */}
                  <div className="bg-slate-50 rounded-lg p-3 mb-5 border border-slate-100 text-xs font-mono space-y-1.5 text-text-secondary">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Compute:</span>
                      <span className="font-semibold text-text-primary">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Memory:</span>
                      <span className="font-semibold text-text-primary">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Storage:</span>
                      <span className="font-semibold text-text-primary">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Port:</span>
                      <span className="font-semibold text-text-primary">{plan.network}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 text-xs text-text-secondary">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            plan.isPopular ? "text-primary" : "text-emerald-600"
                          }`}
                          strokeWidth={2.5}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Button
                    href="#configurator"
                    variant={plan.isPopular ? "primary" : "secondary"}
                    size="md"
                    isFullWidth
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
