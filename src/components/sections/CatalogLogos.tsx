import Image from "next/image";

const catalogLogos: Record<string, { file: string; name: string }[]> = {
  ubuntu: [{ file: "ubuntu", name: "Ubuntu" }],
  debian: [{ file: "debian", name: "Debian" }],
  almalinux: [{ file: "almalinux", name: "AlmaLinux" }],
  rocky: [{ file: "rockylinux", name: "Rocky Linux" }],
  centos: [{ file: "centos", name: "CentOS Stream" }],
  windows: [{ file: "windows11", name: "Windows" }],
  docker: [{ file: "docker", name: "Docker" }],
  wordpress: [{ file: "wordpress", name: "WordPress" }],
  n8n: [{ file: "n8n", name: "n8n" }],
  coolify: [{ file: "coolify", name: "Coolify" }],
  nodejs: [
    { file: "nodejs", name: "Node.js" },
    { file: "pm2", name: "PM2" },
  ],
  lemp: [
    { file: "linux", name: "Linux" },
    { file: "nginx", name: "NGINX" },
    { file: "mariadb", name: "MariaDB" },
    { file: "php", name: "PHP" },
  ],
  lamp: [
    { file: "linux", name: "Linux" },
    { file: "apache", name: "Apache" },
    { file: "mysql", name: "MySQL" },
    { file: "php", name: "PHP" },
  ],
  gitlab: [{ file: "gitlab", name: "GitLab" }],
};

export function CatalogLogos({ id }: { id: string }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {catalogLogos[id].map((logo) => (
        <div
          key={logo.file}
          className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-subtle shrink-0"
        >
          <Image
            src={`/images/catalog/${logo.file}.svg`}
            alt={`Logo ${logo.name}`}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
