"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigationData, siteMeta } from "@/data/bigcloud";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-subtle py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-4.5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1 -m-1"
          >
            {/* Custom Cloud & Node SVG Brand Icon */}
            <div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:bg-primary-hover transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:scale-105"
              >
                <path
                  d="M6.5 17.5H17.5C19.7091 17.5 21.5 15.7091 21.5 13.5C21.5 11.4589 19.9723 9.77496 18.0039 9.53073C17.5501 6.38605 14.8624 4 11.5 4C8.4239 4 5.89279 6.00289 5.16335 8.76106C3.37684 9.38792 2.1 11.0963 2.1 13.1C2.1 15.5301 4.06995 17.5 6.5 17.5Z"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11" r="1.5" fill="#38BDF8" />
                <path d="M12 12.5V17.5" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-navy-deep">Big</span>
                <span className="text-xl font-bold tracking-tight text-primary">Cloud</span>
                <span className="ml-1 text-[10px] font-semibold text-slate-400">.vn</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={navigationData.loginUrl}
              className="text-sm font-medium text-text-secondary hover:text-text-primary px-3.5 py-2 rounded-md hover:bg-slate-100/70 transition-colors"
            >
              Đăng nhập
            </Link>

            <Button
              href={navigationData.ctaHref}
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {navigationData.ctaText}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-elevated px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 pb-4 mb-4 border-b border-border">
            {navigationData.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-text-primary hover:text-primary py-2.5 px-3 rounded-md hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col space-y-2.5">
            <Button
              href={navigationData.loginUrl}
              variant="secondary"
              size="md"
              isFullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Đăng nhập Portal
            </Button>

            <Button
              href={navigationData.ctaHref}
              variant="primary"
              size="md"
              isFullWidth
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => setMobileMenuOpen(false)}
            >
              {navigationData.ctaText}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
