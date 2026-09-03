import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerData, siteMeta } from "@/data/bigcloud";
import { Server, Mail, Phone, MapPin, Shield, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-deep text-slate-400 pt-16 pb-12 border-t border-navy-border">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 border-b border-navy-border">
          {/* Brand Col (Spans 2 on lg) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div className="flex items-baseline">
                <span className="text-xl font-bold tracking-tight text-white">Big</span>
                <span className="text-xl font-bold tracking-tight text-primary">Cloud</span>
                <span className="ml-1 text-[10px] font-semibold text-slate-400">.vn</span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {footerData.tagline}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{siteMeta.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <a href={`mailto:${siteMeta.supportEmail}`} className="hover:text-white transition-colors">
                  {siteMeta.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Hotline: {siteMeta.hotline}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-navy-surface border border-navy-border">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 27001 Certified Tier 3 DC</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerData.columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{footerData.copyright}</div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Data Center: Viettel IDC SGN-01 (Ho Chi Minh City)</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
