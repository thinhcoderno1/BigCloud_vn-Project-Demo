import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { PricingSection } from "@/components/sections/PricingSection";
import { ConfiguratorSection } from "@/components/sections/ConfiguratorSection";
import { WhyBigCloudSection } from "@/components/sections/WhyBigCloudSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { DeploymentStepsSection } from "@/components/sections/DeploymentStepsSection";
import { OsAppsSection } from "@/components/sections/OsAppsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MigrationSection } from "@/components/sections/MigrationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <>
      {/* 02. HERO */}
      <HeroSection />

      {/* 03. TRUST / INFRASTRUCTURE METRICS */}
      <MetricsStrip />

      {/* 04. PRICING */}
      <PricingSection />

      {/* 05. CLOUD CONFIGURATOR */}
      <ConfiguratorSection />

      {/* 06. WHY BIGCLOUD */}
      <WhyBigCloudSection />

      {/* 07. CLOUD CONTROL PANEL */}
      <DashboardSection />

      {/* 08. DEPLOYMENT PROCESS */}
      <DeploymentStepsSection />

      {/* 09. OPERATING SYSTEMS & APPS */}
      <OsAppsSection />

      {/* 10. USE CASES */}
      <UseCasesSection />

      {/* 11. INFRASTRUCTURE / DATA CENTER */}
      <InfrastructureSection />

      {/* 12. SECURITY & AVAILABILITY */}
      <SecuritySection />

      {/* 13. BIGCLOUD VS TRADITIONAL VPS */}
      <ComparisonSection />

      {/* 14. CUSTOMER / INFRASTRUCTURE TRUST */}
      <TrustSection />

      {/* 15. TESTIMONIAL */}
      <TestimonialsSection />

      {/* 16. MIGRATION CTA */}
      <MigrationSection />

      {/* 17. FAQ */}
      <FaqSection />

      {/* 18. FINAL CTA */}
      <FinalCtaSection />
    </>
  );
}
