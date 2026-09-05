import Image from "next/image";
import computeImage from "../../../public/images/why-bigcloud/compute.jpg";
import storageImage from "../../../public/images/why-bigcloud/storage.png";
import networkImage from "../../../public/images/why-bigcloud/network.png";

const photos = {
  compute: {
    src: computeImage,
    alt: "Bộ vi xử lý AMD EPYC 9005 Series",
    
  },
  storage: {
    src: storageImage,
    alt: "Ổ SSD Samsung U.2 trước hệ thống máy chủ",
  
  },
  network: {
    src: networkImage,
    alt: "Minh họa vi mạch và các đường truyền dữ liệu trên nền xanh",
    
  },
};

export function InfrastructurePhoto({
  kind,
  className = "",
}: {
  kind: keyof typeof photos;
  className?: string;
}) {
  const photo = photos[kind];

  return (
    <figure className={`min-w-0 lg:col-span-6 ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-navy-border bg-white/5">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1280px) 551px, (min-width: 1024px) calc(50vw - 89px), (min-width: 640px) calc(100vw - 114px), calc(100vw - 82px)"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-xs text-slate-400">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
