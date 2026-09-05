import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/bigcloud";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow="CUSTOMER EXPERIENCES"
          title="Được tin dùng bởi các"
          titleHighlight="đội ngũ kỹ thuật & startup"
          description="Lắng nghe chia sẻ từ các kỹ sư phần mềm, Tech Lead và Quản lý hạ tầng đã và đang vận hành hệ thống cùng BigCloud."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-border p-6 sm:p-7 shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-text-secondary leading-relaxed italic mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary border border-blue-200/80 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(-2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-deep">{item.author}</div>
                  <div className="text-xs text-text-muted">
                    {item.role} — <span className="font-semibold text-text-secondary">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
