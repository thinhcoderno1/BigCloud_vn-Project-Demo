"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqList } from "@/data/bigcloud";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="narrow">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Câu hỏi thường gặp về"
          titleHighlight="Cloud Server"
          description="Giải đáp các thắc mắc phổ biến về cấu hình, cách thức thanh toán, cơ chế snapshot và hỗ trợ kỹ thuật tại BigCloud."
          align="center"
        />

        {/* Single Open Accordion */}
        <div className="space-y-3.5">
          {faqList.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-primary/60 shadow-card"
                    : "bg-white border-border hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-navy-deep text-sm sm:text-base flex items-center gap-3">
                    <span className="text-primary font-mono text-xs font-semibold">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-primary-light text-primary rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p className="mt-2 text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
