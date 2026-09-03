import React from "react";
import { siteMeta, faqList, pricingPlans } from "@/data/bigcloud";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.brand,
    url: `https://${siteMeta.domain}`,
    logo: `https://${siteMeta.domain}/logo.png`,
    description: siteMeta.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-1900-xxxx",
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BigCloud Cloud Server / Cloud VPS",
    description: siteMeta.description,
    brand: {
      "@type": "Brand",
      name: siteMeta.brand,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      lowPrice: pricingPlans[0].monthlyPrice,
      highPrice: pricingPlans[pricingPlans.length - 1].monthlyPrice,
      offerCount: pricingPlans.length,
      offers: pricingPlans.map((plan) => ({
        "@type": "Offer",
        name: `BigCloud ${plan.name}`,
        price: plan.monthlyPrice,
        priceCurrency: "VND",
        availability: "https://schema.org/InStock",
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
