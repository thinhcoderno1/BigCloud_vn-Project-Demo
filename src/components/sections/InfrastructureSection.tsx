import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { dataCenterSpecs } from "@/data/bigcloud";
import dataCenterImage from "../../../public/images/infrastructure/datacenter.png";

const metricLabels: Record<string, string> = {
  "Backbone Network": "Băng thông mạng lõi",
  "Uptime SLA": "Cam kết uptime",
  "Power Redundancy": "Dự phòng nguồn điện",
  "Multi-Carrier": "Kết nối nhà mạng",
  "Latency Vietnam": "Độ trễ trong nước",
};

export const InfrastructureSection = () => {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-title"
      className="bg-navy-deep py-20 text-white md:py-24 scroll-mt-20"
    >
      <Container size="wide">
        <div className="mb-10 max-w-3xl lg:mb-12">
          <p className="mb-4 text-sm font-medium text-slate-400">Hạ tầng & vận hành</p>
          <h2
            id="infrastructure-title"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Hạ tầng đặt tại Data Center
            <br className="hidden sm:block" /> tiêu chuẩn Quốc tế
          </h2>
        </div>

        <div className="grid items-start gap-9 lg:grid-cols-12 lg:gap-14">
          <figure className="min-w-0 lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-surface lg:aspect-[5/4]">
              <Image
                src={dataCenterImage}
                alt="Dãy tủ rack máy chủ dọc lối đi trong trung tâm dữ liệu"
                fill
                sizes="(min-width: 1280px) 677px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                className="object-cover object-left"
              />
            </div>
          </figure>

          <div className="min-w-0 lg:col-span-5">
            <p className="mb-2 text-sm text-slate-400">
              {dataCenterSpecs.location} · {dataCenterSpecs.regionCode}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              {dataCenterSpecs.facility}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Cụm máy chủ BigCloud đặt tại Viettel IDC TP.HCM, với nguồn điện
              dự phòng, hệ thống làm mát và kết nối tới nhiều nhà mạng.
            </p>

            <dl className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {dataCenterSpecs.metrics.map((item) => (
                <div key={item.label} className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 py-3.5">
                  <dt className="text-sm text-slate-400">{metricLabels[item.label] ?? item.label}</dt>
                  <dd className="text-sm font-medium text-white">{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Kiểm soát ra vào, giám sát camera 24/7 và hệ thống phòng cháy
              chữa cháy bảo vệ khu vực đặt máy chủ.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
