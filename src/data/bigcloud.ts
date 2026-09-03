// ============================================================================
// BIGCLOUD DEMO DATA STORE
// ============================================================================
// NOTICE FOR DEVELOPERS & CLIENT:
// This file contains all mock & demonstration data for BigCloud (bigcloud.vn).
// All pricing, technical specifications, SLA figures, benchmarks, partner
// logos, data center details, testimonials, and FAQs are structured here.
// Replace this data with official product specifications when ready for launch.
// ============================================================================

export interface NavigationItem {
  label: string;
  href: string;
}

export interface InfrastructureMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  workload: string;
  cpu: string;
  ram: string;
  storage: string;
  network: string;
  ipv4: string;
  monthlyPrice: number;
  isPopular?: boolean;
  popularBadgeText?: string;
  features: string[];
  ctaText: string;
  isDemo?: boolean;
}

export interface ConfiguratorConfig {
  cpu: { min: number; max: number; step: number; default: number; unitPrice: number };
  ram: { min: number; max: number; step: number; default: number; unitPrice: number };
  storage: { min: number; max: number; step: number; default: number; unitPrice: number };
  networkOptions: { value: number; label: string; price: number }[];
  basePrice: number;
}

export interface WhyFeature {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: { label: string; value: string; unit?: string; highlight?: boolean }[];
  visualType: "compute" | "storage" | "network";
}

export interface ControlPanelData {
  instanceName: string;
  region: string;
  regionCode: string;
  status: "Running" | "Stopped" | "Restarting";
  ipv4: string;
  os: string;
  uptime: string;
  cpuUsage: number;
  ramUsage: { used: number; total: number; unit: string };
  diskUsage: { used: number; total: number; unit: string };
  networkBandwidth: { in: string; out: string; peak: string };
  quickActions: string[];
}

export interface DeploymentStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface CatalogItem {
  id: string;
  name: string;
  version?: string;
  category: "os" | "app";
  badge?: string;
  description: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedSpec: {
    cpu: string;
    ram: string;
    storage: string;
    network: string;
  };
  technologies: string[];
  benefits: string[];
  ctaText: string;
}

export interface DataCenterSpecs {
  location: string;
  facility: string;
  regionCode: string;
  metrics: { label: string; value: string; detail: string }[];
  topologyNodes: {
    id: string;
    label: string;
    sublabel: string;
    status: "active" | "standby";
  }[];
}

export interface SecurityRow {
  feature: string;
  bigCloud: string | boolean;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  traditionalVps: string;
  bigCloud: string;
  isBigCloudAdvantage: boolean;
}

export interface PartnerLogo {
  name: string;
  category: string;
  logoText: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  isDemo: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ----------------------------------------------------------------------------
// DATA EXPORTS
// ----------------------------------------------------------------------------

export const siteMeta = {
  brand: "BigCloud",
  domain: "bigcloud.vn",
  tagline: "Cloud Infrastructure for modern workloads",
  title: "Cloud Server Hiệu Năng Cao | BigCloud",
  description:
    "BigCloud cung cấp Cloud Server hiệu năng cao với NVMe Storage, hạ tầng ổn định, khả năng mở rộng linh hoạt và hỗ trợ kỹ thuật 24/7.",
  keywords: [
    "Cloud Server",
    "Cloud VPS",
    "VPS Việt Nam",
    "Cloud Hosting",
    "Máy chủ Cloud",
    "Thuê Cloud VPS",
    "NVMe Cloud Server",
  ],
  supportEmail: "support@bigcloud.vn",
  salesEmail: "sales@bigcloud.vn",
  hotline: "1900 xxxx (Demo)",
  address: "Tầng 8, Tòa nhà Innovation, Khu Công Nghệ Cao, TP. Hồ Chí Minh",
  isDemo: true,
};

export const navigationData: {
  links: NavigationItem[];
  loginUrl: string;
  ctaText: string;
  ctaHref: string;
} = {
  links: [
    { label: "Cloud Server", href: "#cloud-server" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Tính năng", href: "#features" },
    { label: "Hạ tầng", href: "#infrastructure" },
    { label: "Giải pháp", href: "#use-cases" },
    { label: "FAQ", href: "#faq" },
  ],
  loginUrl: "/login",
  ctaText: "Khởi tạo Cloud Server",
  ctaHref: "#configurator",
};

export const heroData = {
  eyebrow: "CLOUD SERVER • HIGH PERFORMANCE INFRASTRUCTURE",
  h1Prefix: "Cloud Server ",
  h1Highlight: "hiệu năng cao.",
  h1Suffix: " Sẵn sàng trong vài phút.",
  description:
    "Hạ tầng Cloud hiệu năng cao với NVMe Storage, network tốc độ cao và khả năng mở rộng linh hoạt cho website, ứng dụng và hệ thống doanh nghiệp.",
  priceStartingAt: "Chỉ từ 149.000đ/tháng",
  primaryCtaText: "Khởi tạo Cloud Server",
  primaryCtaHref: "#configurator",
  secondaryCtaText: "Xem bảng giá",
  secondaryCtaHref: "#pricing",
  microTrust: [
    "Khởi tạo nhanh < 60s",
    "NVMe Gen4 Storage",
    "Hỗ trợ kỹ thuật 24/7",
  ],
  simulatedConsole: {
    title: "Create Cloud Server",
    region: "Ho Chi Minh City (SGN-01)",
    os: "Ubuntu 24.04 LTS",
    specs: {
      cpu: "4 vCPU (EPYC Gen3)",
      ram: "8 GB DDR4 ECC",
      storage: "80 GB NVMe Gen4",
      network: "300 Mbps High-Speed",
      ipv4: "1 Dedicated IPv4",
    },
    price: "349.000đ",
    period: "/ tháng",
    statusBadge: "Running",
    floatingMetrics: {
      status: "Online",
      cpu: "23%",
      memory: "46% (3.7/8 GB)",
      network: "128 Mbps",
      latency: "8 ms",
    },
  },
};

export const infrastructureMetrics: InfrastructureMetric[] = [
  {
    value: "99.99%",
    label: "Uptime SLA",
    subtext: "Cam kết tính sẵn sàng dịch vụ bằng văn bản",
  },
  {
    value: "NVMe",
    label: "High Performance Storage",
    subtext: "Enterprise NVMe Gen4 tốc độ cao",
  },
  {
    value: "300 Mbps+",
    label: "Network Port",
    subtext: "Băng thông trong nước tốc độ cao",
  },
  {
    value: "24/7",
    label: "Technical Support",
    subtext: "Kỹ sư túc trực giải quyết ticket tức thì",
  },
  {
    value: "< 60s",
    label: "Rapid Deployment",
    subtext: "Khởi tạo tự động ngay sau thanh toán",
  },
];

export const billingCycles = [
  { id: "monthly", label: "Theo tháng", discountPercent: 0, months: 1 },
  { id: "sixMonths", label: "6 tháng", discountPercent: 5, months: 6, tag: "Tiết kiệm 5%" },
  { id: "yearly", label: "12 tháng", discountPercent: 10, months: 12, tag: "Tiết kiệm 10%" },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    workload: "Website & Development",
    cpu: "2 vCPU",
    ram: "2 GB RAM",
    storage: "40 GB NVMe",
    network: "200 Mbps",
    ipv4: "1 Dedicated IPv4",
    monthlyPrice: 149000,
    features: [
      "2 vCPU High-Performance",
      "2 GB RAM ECC DDR4",
      "40 GB NVMe Enterprise",
      "200 Mbps Network Port",
      "1 Dedicated IPv4 + IPv6",
      "Miễn phí Anti-DDoS cơ bản",
      "Kỹ thuật hỗ trợ 24/7",
    ],
    ctaText: "Đăng ký Starter",
    isDemo: true,
  },
  {
    id: "standard",
    name: "STANDARD",
    workload: "Website & Application",
    cpu: "4 vCPU",
    ram: "4 GB RAM",
    storage: "80 GB NVMe",
    network: "300 Mbps",
    ipv4: "1 Dedicated IPv4",
    monthlyPrice: 249000,
    features: [
      "4 vCPU High-Performance",
      "4 GB RAM ECC DDR4",
      "80 GB NVMe Enterprise",
      "300 Mbps Network Port",
      "1 Dedicated IPv4 + IPv6",
      "Hỗ trợ Snapshot theo yêu cầu",
      "Anti-DDoS Protection tích hợp",
      "Kỹ thuật hỗ trợ 24/7",
    ],
    ctaText: "Đăng ký Standard",
    isDemo: true,
  },
  {
    id: "performance",
    name: "PERFORMANCE",
    workload: "High Traffic & Production",
    cpu: "6 vCPU",
    ram: "8 GB RAM",
    storage: "120 GB NVMe",
    network: "500 Mbps",
    ipv4: "1 Dedicated IPv4",
    monthlyPrice: 399000,
    isPopular: true,
    popularBadgeText: "MOST POPULAR",
    features: [
      "6 vCPU High-Performance",
      "8 GB RAM ECC DDR4",
      "120 GB NVMe Enterprise",
      "500 Mbps Network Port",
      "1 Dedicated IPv4 + IPv6",
      "1 Free Snapshot tự động",
      "Cloud Firewall tích hợp",
      "SLA 99.99% Uptime cam kết",
      "Hỗ trợ kỹ thuật ưu tiên 24/7",
    ],
    ctaText: "Khởi tạo Performance",
    isDemo: true,
  },
  {
    id: "pro",
    name: "PRO",
    workload: "Database & Business",
    cpu: "8 vCPU",
    ram: "16 GB RAM",
    storage: "200 GB NVMe",
    network: "500 Mbps",
    ipv4: "1 Dedicated IPv4",
    monthlyPrice: 699000,
    features: [
      "8 vCPU High-Performance",
      "16 GB RAM ECC DDR4",
      "200 GB NVMe Enterprise",
      "500 Mbps Network Port",
      "1 Dedicated IPv4 + IPv6",
      "2 Free Snapshots tự động",
      "Cloud Firewall & DDoS Shield",
      "Full API Access & Monitoring",
      "SLA 99.99% & Dedicated Support",
    ],
    ctaText: "Khởi tạo Pro Plan",
    isDemo: true,
  },
];

export const configuratorConfig: ConfiguratorConfig = {
  basePrice: 49000,
  cpu: { min: 1, max: 16, step: 1, default: 4, unitPrice: 45000 },
  ram: { min: 1, max: 64, step: 1, default: 8, unitPrice: 25000 },
  storage: { min: 20, max: 500, step: 10, default: 100, unitPrice: 1000 },
  networkOptions: [
    { value: 100, label: "100 Mbps", price: 0 },
    { value: 200, label: "200 Mbps", price: 30000 },
    { value: 300, label: "300 Mbps", price: 60000 },
    { value: 500, label: "500 Mbps", price: 120000 },
    { value: 1000, label: "1000 Mbps (1 Gbps)", price: 250000 },
  ],
};

export const whyBigCloudFeatures: WhyFeature[] = [
  {
    id: "compute",
    tag: "COMPUTE",
    title: "CPU hiệu năng cao cho production workloads",
    description:
      "Tài nguyên xử lý ổn định cho website, API, container và production workloads. 100% vCPU được phân bổ trên vi xử lý Enterprise thế hệ mới, đảm bảo zero-throttle khi chịu tải cao.",
    visualType: "compute",
    metrics: [
      { label: "CPU Utilization", value: "68%", highlight: true },
      { label: "Compute Score", value: "9.4 / 10", highlight: true },
      { label: "Clock Speed", value: "3.2+ GHz" },
      { label: "Architecture", value: "x86_64 Zen3/IceLake" },
    ],
  },
  {
    id: "storage",
    tag: "STORAGE",
    title: "NVMe Storage tốc độ cao và độ trễ cực thấp",
    description:
      "Tối ưu cho database, cache và workload cần khả năng truy xuất dữ liệu nhanh. Cụm lưu trữ NVMe phân tán đạt chuẩn Enterprise với cơ chế sao lưu dự phòng RAID 10 đảm bảo toàn vẹn dữ liệu.",
    visualType: "storage",
    metrics: [
      { label: "Sequential Read", value: "3.2", unit: "GB/s", highlight: true },
      { label: "Sequential Write", value: "2.6", unit: "GB/s", highlight: true },
      { label: "Random Read", value: "520K", unit: "IOPS", highlight: true },
      { label: "Average Latency", value: "< 0.2", unit: "ms" },
    ],
  },
  {
    id: "network",
    tag: "NETWORK",
    title: "Hạ tầng Network ổn định kết nối đa nhà mạng",
    description:
      "Hệ thống mạng Core 100 Gbps kết nối trực tiếp đến các ISP lớn (VNPT, Viettel, FPT, CMC) và cổng quốc tế, mang lại độ trễ thấp nhất cùng hệ thống Anti-DDoS lọc lưu lượng thông minh.",
    visualType: "network",
    metrics: [
      { label: "Network Bandwidth", value: "300", unit: "Mbps", highlight: true },
      { label: "Peak Observed", value: "276", unit: "Mbps" },
      { label: "Latency VN", value: "8", unit: "ms", highlight: true },
      { label: "Packet Loss", value: "0.01%", highlight: true },
    ],
  },
];

export const controlPanelMock: ControlPanelData = {
  instanceName: "cloud-sgn-01",
  region: "Ho Chi Minh City",
  regionCode: "SGN-01",
  status: "Running",
  ipv4: "103.178.234.21",
  os: "Ubuntu 24.04 LTS (x86_64)",
  uptime: "48 days, 14 hours, 22 mins",
  cpuUsage: 23,
  ramUsage: { used: 3.7, total: 8, unit: "GB" },
  diskUsage: { used: 42, total: 80, unit: "GB" },
  networkBandwidth: { in: "42.8 Mbps", out: "85.2 Mbps", peak: "276 Mbps" },
  quickActions: [
    "Restart Server",
    "Shutdown",
    "Reinstall OS",
    "Create Snapshot",
    "Backup Management",
    "Firewall Rules",
    "Resource Resizing",
    "API Access Token",
  ],
};

export const deploymentSteps: DeploymentStep[] = [
  {
    stepNumber: "01",
    title: "Chọn cấu hình",
    description: "Tùy biến vCPU, RAM và dung lượng NVMe Storage phù hợp với nhu cầu sử dụng thực tế.",
    detail: "Từ 1 vCPU - 1GB RAM cho dev đến cụm 16 vCPU - 64GB RAM cho production database.",
  },
  {
    stepNumber: "02",
    title: "Chọn hệ điều hành hoặc Ứng dụng",
    description: "Cài đặt tức thì Ubuntu, Debian, AlmaLinux, Windows Server hoặc 1-Click Apps như Docker, WordPress.",
    detail: "Hỗ trợ Cloud-init, SSH Key injection tự động ngay từ bước khởi tạo.",
  },
  {
    stepNumber: "03",
    title: "Deploy Server",
    description: "Hệ thống tự động kích hoạt tài nguyên, cấp phát IP tĩnh và sẵn sàng hoạt động trong < 60 giây.",
    detail: "Nhận thông tin root SSH qua dashboard và email ngay khi hoàn tất.",
  },
];

export const osCatalog: CatalogItem[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    version: "24.04 LTS / 22.04 LTS",
    category: "os",
    badge: "Phổ biến",
    description: "Hệ điều hành Linux phổ biến nhất cho server, tối ưu cho mọi framework.",
    iconName: "Terminal",
  },
  {
    id: "debian",
    name: "Debian",
    version: "12 (Bookworm) / 11",
    category: "os",
    badge: "Ổn định",
    description: "Phân phối Linux nổi tiếng về tính ổn định, tối giản và bảo mật cao.",
    iconName: "Server",
  },
  {
    id: "almalinux",
    name: "AlmaLinux",
    version: "9.4 / 8.9",
    category: "os",
    badge: "Enterprise",
    description: "Hệ điều hành tương thích 1:1 với RHEL, tối ưu cho ứng dụng doanh nghiệp.",
    iconName: "Shield",
  },
  {
    id: "rocky",
    name: "Rocky Linux",
    version: "9.4 / 8.9",
    category: "os",
    badge: "Enterprise",
    description: "Bản phân phối Enterprise Linux nguồn mở do cộng đồng phát triển.",
    iconName: "Cpu",
  },
  {
    id: "centos",
    name: "CentOS Stream",
    version: "Stream 9",
    category: "os",
    description: "Nền tảng kiểm thử và đón đầu các công nghệ mới của hệ sinh thái Red Hat.",
    iconName: "Layers",
  },
  {
    id: "windows",
    name: "Windows Server",
    version: "2022 / 2019 Standard",
    category: "os",
    badge: "GUI Ready",
    description: "Tối ưu cho ứng dụng .NET, SQL Server, Active Directory và Remote Desktop.",
    iconName: "Monitor",
  },
];

export const appCatalog: CatalogItem[] = [
  {
    id: "docker",
    name: "Docker & Compose",
    version: "v26.0+ / Compose v2",
    category: "app",
    badge: "Developer",
    description: "Triển khai container hoá ứng dụng microservices chỉ với 1 click.",
    iconName: "Boxes",
  },
  {
    id: "wordpress",
    name: "WordPress",
    version: "Latest (LEMP + Redis)",
    category: "app",
    badge: "1-Click",
    description: "Cấu hình sẵn Nginx, PHP-FPM 8.3, MariaDB và Redis Object Cache tốc độ cao.",
    iconName: "Globe",
  },
  {
    id: "n8n",
    name: "n8n Workflow Automation",
    version: "Community Edition",
    category: "app",
    badge: "AI & Automation",
    description: "Nền tảng tự động hoá workflow và tích hợp AI tự lưu trữ mạnh mẽ.",
    iconName: "Workflow",
  },
  {
    id: "coolify",
    name: "Coolify (Self-hosted PaaS)",
    version: "Latest",
    category: "app",
    badge: "PaaS",
    description: "Giải pháp PaaS tự lưu trữ thay thế Heroku/Netlify/Vercel trên VPS riêng.",
    iconName: "LayoutGrid",
  },
  {
    id: "nodejs",
    name: "Node.js & PM2",
    version: "v20 LTS / v22",
    category: "app",
    description: "Môi trường runtime JavaScript hiệu năng cao cho REST API và Next.js.",
    iconName: "Code2",
  },
  {
    id: "lemp",
    name: "LEMP Stack",
    version: "Nginx + PHP 8.3 + MariaDB",
    category: "app",
    description: "Ngăn xếp máy chủ web hiệu năng cao chuẩn mực cho các ứng dụng PHP hiện đại.",
    iconName: "Flame",
  },
  {
    id: "lamp",
    name: "LAMP Stack",
    version: "Apache + PHP + MySQL",
    category: "app",
    description: "Ngăn xếp web truyền thống kinh điển, tương thích hoàn hảo mọi CMS.",
    iconName: "FolderGit2",
  },
  {
    id: "gitlab",
    name: "GitLab CE",
    version: "Community Edition",
    category: "app",
    badge: "DevOps",
    description: "Hệ thống quản lý mã nguồn Git và CI/CD pipeline riêng biệt cho team lập trình.",
    iconName: "GitBranch",
  },
];

export const useCases: UseCaseItem[] = [
  {
    id: "website",
    tabLabel: "Website",
    title: "Website tốc độ cao & Hệ thống eCommerce",
    subtitle: "Xử lý hàng triệu lượt truy cập mà không gặp gián đoạn",
    description:
      "Từ WordPress, WooCommerce đến website tin tức doanh nghiệp và cổng thông tin lớn. Hạ tầng NVMe Storage kết hợp cùng đường truyền mạng trong nước 300 Mbps+ giúp thời gian phản hồi TTFB dưới 50ms.",
    recommendedSpec: {
      cpu: "4 vCPU (High Performance)",
      ram: "4–8 GB DDR4 ECC",
      storage: "80–120 GB NVMe Gen4",
      network: "300 Mbps Port",
    },
    technologies: ["WordPress", "WooCommerce", "Nginx FastCGI", "Redis Cache", "LiteSpeed / OpenLiteSpeed"],
    benefits: [
      "Tối ưu điểm Core Web Vitals và SEO Google",
      "Xử lý peak traffic các đợt flash sale mượt mà",
      "Tự động sao lưu Snapshot bảo vệ cơ sở dữ liệu",
    ],
    ctaText: "Xem cấu hình cho Website",
  },
  {
    id: "application",
    tabLabel: "Application",
    title: "Backend API & Microservices",
    subtitle: "Môi trường thực thi mạnh mẽ cho Next.js, Node.js, Python, Golang",
    description:
      "Cung cấp sức mạnh tính toán bền bỉ cho các backend microservices, real-time socket servers và API gateways. CPU không bị throttle xung nhịp khi xử lý hàng nghìn request/giây.",
    recommendedSpec: {
      cpu: "4–8 vCPU",
      ram: "8–16 GB RAM",
      storage: "100 GB NVMe",
      network: "500 Mbps Port",
    },
    technologies: ["Node.js / Bun", "Next.js", "Python FastApi / Django", "Golang", "Java Spring Boot"],
    benefits: [
      "Xung nhịp CPU ổn định 3.2+ GHz cho workload nặng",
      "Khởi tạo container Docker và staging server nhanh chóng",
      "Hỗ trợ Cloud Firewall chặn traffic độc hại từ lớp mạng",
    ],
    ctaText: "Xem cấu hình cho Application",
  },
  {
    id: "database",
    tabLabel: "Database",
    title: "Cơ sở dữ liệu hiệu năng cao",
    subtitle: "Truy xuất IOPS cực đại cho MySQL, PostgreSQL, MongoDB, Redis",
    description:
      "Ổ cứng NVMe Enterprise với thông lượng đọc ghi tuần tự >3.2 GB/s và hơn 500.000 IOPS ngẫu nhiên, giúp giải quyết triệt để nút thắt cổ chai I/O của hệ quản trị cơ sở dữ liệu quy mô lớn.",
    recommendedSpec: {
      cpu: "8 vCPU",
      ram: "16–32 GB RAM",
      storage: "200–500 GB NVMe",
      network: "500 Mbps Port",
    },
    technologies: ["PostgreSQL", "MySQL / MariaDB", "MongoDB", "Redis In-Memory", "Elasticsearch"],
    benefits: [
      "Thông lượng IOPS cao đáp ứng truy vấn phức tạp",
      "RAM ECC chống lỗi bit dữ liệu cho in-memory cache",
      "Cơ chế snapshot tức thời cho disaster recovery",
    ],
    ctaText: "Xem cấu hình cho Database",
  },
  {
    id: "development",
    tabLabel: "Development",
    title: "Môi trường Dev, CI/CD & Self-Hosting",
    subtitle: "Nâng cao năng suất cho đội ngũ kỹ thuật và DevOps",
    description:
      "Triển khai runner cho GitLab CI, GitHub Actions, xây dựng môi trường staging test app, hoặc tự lưu trữ các công cụ nội bộ như n8n, Coolify, Supabase mà không lo phát sinh chi phí billing khó đoán.",
    recommendedSpec: {
      cpu: "2–4 vCPU",
      ram: "4–8 GB RAM",
      storage: "60–100 GB NVMe",
      network: "300 Mbps Port",
    },
    technologies: ["Docker Compose", "GitLab CI Runner", "Coolify", "n8n Automation", "Supabase Self-hosted"],
    benefits: [
      "Chi phí cố định rõ ràng, không phí ẩn băng thông",
      "Cài lại hệ điều hành sạch trong 30 giây",
      "SSH Key authentication bảo mật tuyệt đối",
    ],
    ctaText: "Xem cấu hình cho Development",
  },
  {
    id: "business",
    tabLabel: "Business",
    title: "Hệ thống Quản trị & Ứng dụng Doanh nghiệp",
    subtitle: "Độ sẵn sàng 99.99% cho ERP, CRM, Kế toán và Dữ liệu công ty",
    description:
      "Lưu trữ và vận hành các phần mềm nghiệp vụ quan trọng (Odoo, ERP, CRM, phần mềm kế toán) trên cụm máy chủ đặt tại Data Center chuẩn Quốc tế tại TP.HCM, đảm bảo bảo mật và truy cập liên tục 24/7.",
    recommendedSpec: {
      cpu: "8 vCPU",
      ram: "16–32 GB RAM",
      storage: "200 GB NVMe",
      network: "500 Mbps Port",
    },
    technologies: ["Odoo ERP", "SuiteCRM", "Fast / Misa Server", "Internal API", "Nextcloud Storage"],
    benefits: [
      "SLA cam kết uptime 99.99% cho hoạt động kinh doanh",
      "Dữ liệu được lưu trữ an toàn trong nước",
      "Đội ngũ kỹ thuật hỗ trợ riêng cho doanh nghiệp",
    ],
    ctaText: "Xem cấu hình cho Doanh nghiệp",
  },
];

export const dataCenterSpecs: DataCenterSpecs = {
  location: "TP. Hồ Chí Minh, Việt Nam",
  facility: "Viettel IDC Ho Chi Minh City",
  regionCode: "SGN-01",
  metrics: [
    {
      label: "Backbone Network",
      value: "100 Gbps",
      detail: "Hạ tầng lõi băng thông cực lớn kết nối đa hướng",
    },
    {
      label: "Uptime SLA",
      value: "99.99%",
      detail: "Cam kết tính sẵn sàng hạ tầng vật lý và nguồn điện",
    },
    {
      label: "Power Redundancy",
      value: "2N / N+1",
      detail: "Hệ thống UPS kép và máy phát điện diesel dự phòng",
    },
    {
      label: "Multi-Carrier",
      value: "VNPT • Viettel • FPT",
      detail: "Định tuyến BGP tối ưu qua các nhà mạng lớn nhất",
    },
    {
      label: "Latency Vietnam",
      value: "< 10 ms",
      detail: "Độ trễ phản hồi tới người dùng toàn quốc cực thấp",
    },
  ],
  topologyNodes: [
    { id: "internet", label: "Public Internet", sublabel: "Multi-ISP Ingress / Egress", status: "active" },
    { id: "edge", label: "Edge Routing & Anti-DDoS", sublabel: "Layer 3/4 Traffic Scrubbing", status: "active" },
    { id: "firewall", label: "Cloud Firewall Layer", sublabel: "Stateful Security Inspection", status: "active" },
    { id: "cluster", label: "Compute Cluster Nodes", sublabel: "KVM Hypervisors (AMD EPYC)", status: "active" },
    { id: "storage", label: "Distributed NVMe Pool", sublabel: "PCIe Gen4 Enterprise All-Flash", status: "active" },
  ],
};

export const securityCapabilities: SecurityRow[] = [
  {
    feature: "Network Redundancy (Dự phòng mạng)",
    bigCloud: true,
    description: "Kết nối mạng đa cổng quang 10GbE/25GbE dự phòng chủ động, không gián đoạn khi một tuyến gặp sự cố.",
  },
  {
    feature: "Infrastructure Real-time Monitoring",
    bigCloud: true,
    description: "Giám sát tài nguyên phần cứng, nhiệt độ, IOPS và lưu lượng mạng liên tục 24/7/365 với cảnh báo tự động.",
  },
  {
    feature: "Cloud Firewall tích hợp",
    bigCloud: true,
    description: "Cấu hình phân quyền cổng truy cập (Inbound/Outbound) trực tiếp từ giao diện điều khiển mà không cần can thiệp OS.",
  },
  {
    feature: "Snapshot tức thời",
    bigCloud: true,
    description: "Chụp ảnh nhanh trạng thái hệ thống và ổ đĩa chỉ trong vài giây trước khi thực hiện nâng cấp code hoặc cơ sở dữ liệu.",
  },
  {
    feature: "Automated Daily Backup",
    bigCloud: true,
    description: "Tùy chọn sao lưu định kỳ độc lập sang cụm lưu trữ tách biệt, khôi phục toàn vẹn dữ liệu khi cần.",
  },
  {
    feature: "Anti-DDoS Protection",
    bigCloud: true,
    description: "Hệ thống phát hiện và giảm thiểu tấn công từ chối dịch vụ (DDoS) tự động tại tầng biên mạng.",
  },
  {
    feature: "Multiple Upstream Bandwidth",
    bigCloud: true,
    description: "Định tuyến động BGP qua các nhà mạng hàng đầu: Viettel, VNPT, FPT Telecom, CMC Telecom.",
  },
  {
    feature: "Uptime SLA Cam kết",
    bigCloud: "99.99%",
    description: "Cam kết mức độ sẵn sàng của hạ tầng điện toán đám mây theo tiêu chuẩn dịch vụ doanh nghiệp.",
  },
];

export const vpsComparison: ComparisonRow[] = [
  {
    feature: "Mở rộng tài nguyên (Scaling)",
    traditionalVps: "Hạn chế, thường phải tạo mới server và chuyển dữ liệu",
    bigCloud: "Linh hoạt, nâng cấp vCPU / RAM / Disk trực tiếp không mất IP",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Thời gian khởi tạo (Deployment)",
    traditionalVps: "Thủ công / tùy nhà cung cấp, mất từ 15 đến 60 phút",
    bigCloud: "Tự động hóa hoàn toàn, sẵn sàng sử dụng trong < 60 giây",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Công nghệ lưu trữ (Storage)",
    traditionalVps: "SSD SATA hoặc HDD truyền thống, IOPS giới hạn",
    bigCloud: "100% NVMe Enterprise Gen4 tốc độ cao, IOPS vượt trội",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Tính năng Snapshot tức thời",
    traditionalVps: "Tùy hệ thống hoặc phải tắt server khi chụp ảnh",
    bigCloud: "Tích hợp sẵn, chụp snapshot realtime không gián đoạn",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Giám sát tài nguyên (Monitoring)",
    traditionalVps: "Cơ bản hoặc phải tự cài agent bên ngoài",
    bigCloud: "Biểu đồ Telemetry thời gian thực tích hợp ngay tại Dashboard",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Quản lý Cloud Firewall",
    traditionalVps: "Phải tự cấu hình iptables / UFW trên từng máy chủ",
    bigCloud: "Quản lý tập trung từ Cloud Portal ở tầng mạng trước server",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Hạ tầng dự phòng (Redundancy)",
    traditionalVps: "Phụ thuộc vào 1 máy chủ vật lý đơn lẻ",
    bigCloud: "Hạ tầng Cloud Cluster ảo hóa KVM chuẩn Enterprise",
    isBigCloudAdvantage: true,
  },
  {
    feature: "Hỗ trợ kỹ thuật (Support)",
    traditionalVps: "Phản hồi qua ticket chậm trong giờ hành chính",
    bigCloud: "Kỹ sư túc trực 24/7/365, hỗ trợ xử lý sự cố nhanh chóng",
    isBigCloudAdvantage: true,
  },
];

export const trustPartners: PartnerLogo[] = [
  { name: "AMD EPYC", category: "High Performance CPU", logoText: "AMD EPYC™" },
  { name: "Intel Xeon", category: "Scalable Processors", logoText: "intel. XEON" },
  { name: "Dell EMC", category: "Enterprise Hardware", logoText: "DELL Technologies" },
  { name: "Juniper Networks", category: "Network Infrastructure", logoText: "Juniper." },
  { name: "Viettel IDC", category: "Tier 3 Data Center", logoText: "Viettel IDC" },
  { name: "Ubuntu", category: "Certified OS Partner", logoText: "ubuntu" },
];

export const trustLiveMetrics = [
  { value: "500+", label: "Cloud Instances", sublabel: "Đang vận hành demo" },
  { value: "99.99%", label: "Uptime SLA", sublabel: "Thời gian hoạt động liên tục" },
  { value: "24/7", label: "Kỹ sư trực hệ thống", sublabel: "Hỗ trợ không ngày nghỉ" },
  { value: "< 5 phút", label: "Thời gian phản hồi", sublabel: "Hỗ trợ kỹ thuật trung bình" },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    author: "Nguyễn Hoàng Minh",
    role: "CTO",
    company: "Nova Commerce",
    content:
      "BigCloud giúp team chúng tôi triển khai môi trường staging và production nhanh hơn đáng kể. Dashboard đơn giản, trực quan nhưng đầy đủ các thao tác cần thiết mà không rườm rà.",
    rating: 5,
    isDemo: true,
  },
  {
    id: "2",
    author: "Trần Quốc Huy",
    role: "Founder",
    company: "DevStack Studio",
    content:
      "Khả năng nâng cấp tài nguyên vCPU và RAM nhanh chóng giúp chúng tôi không phải đau đầu migrate dữ liệu mỗi khi chiến dịch marketing của khách hàng bùng nổ traffic.",
    rating: 5,
    isDemo: true,
  },
  {
    id: "3",
    author: "Lê Minh Anh",
    role: "IT Infrastructure Manager",
    company: "PixelHub Vietnam",
    content:
      "Điểm tôi đánh giá cao nhất ở BigCloud là hiệu năng ổ cứng NVMe thực sự ổn định và đội ngũ hỗ trợ phản hồi kỹ thuật rất nhanh, đúng chuyên môn.",
    rating: 5,
    isDemo: true,
  },
];

export const migrationCtaData = {
  title: "Đang sử dụng VPS ở nhà cung cấp khác?",
  subtitle: "Chuyển hệ thống sang BigCloud dễ dàng",
  description:
    "Đội ngũ kỹ thuật của BigCloud sẵn sàng hỗ trợ bạn chuyển đổi website, cơ sở dữ liệu và cấu hình máy chủ từ nhà cung cấp cũ sang BigCloud hoàn toàn miễn phí với downtime tối thiểu.",
  primaryCtaText: "Yêu cầu hỗ trợ Migration",
  secondaryCtaText: "Trao đổi với kỹ thuật",
  workflowSteps: [
    { label: "Current Server", sub: "VPS nhà cung cấp cũ" },
    { label: "Technical Audit", sub: "Kỹ sư phân tích dữ liệu" },
    { label: "Data Transfer", sub: "Chuyển dữ liệu an toàn" },
    { label: "BigCloud", sub: "Vận hành tốc độ cao" },
  ],
};

export const faqList: FaqItem[] = [
  {
    id: "faq-1",
    question: "Cloud Server là gì?",
    answer:
      "Cloud Server (Máy chủ đám mây) là giải pháp máy chủ ảo hoạt động trên nền tảng điện toán đám mây phân tán. Khác với máy chủ vật lý truyền thống, Cloud Server sử dụng tài nguyên được ảo hóa từ cụm nhiều máy chủ vật lý kết nối với nhau, đảm bảo hiệu năng cao, khả năng mở rộng linh hoạt và tính sẵn sàng vượt trội khi có sự cố phần cứng.",
  },
  {
    id: "faq-2",
    question: "Cloud Server khác VPS truyền thống như thế nào?",
    answer:
      "VPS truyền thống thường được chia sẻ trên một máy chủ vật lý duy nhất; nếu máy chủ đó gặp trục trặc về phần cứng, toàn bộ VPS trên đó sẽ bị ngưng trệ. Ngược lại, BigCloud hoạt động trên cụm hạ tầng Cloud phân tán với ổ cứng NVMe Enterprise, tự động dự phòng, hỗ trợ mở rộng tài nguyên (Scale vCPU/RAM) linh hoạt và quản lý tập trung qua Cloud Portal hiện đại.",
  },
  {
    id: "faq-3",
    question: "Tôi nên chọn cấu hình Cloud Server nào cho website của mình?",
    answer:
      "Đối với website WordPress, blog tin tức hoặc landing page khởi đầu, gói Starter (2 vCPU, 2 GB RAM) hoặc Standard (4 vCPU, 4 GB RAM) là lựa chọn tối ưu. Đối với các trang thương mại điện tử (WooCommerce, Magento) hoặc hệ thống backend API có lưu lượng truy cập cao, bạn nên cân nhắc gói Performance (6 vCPU, 8 GB RAM) hoặc Pro để đảm bảo tốc độ phản hồi nhanh nhất.",
  },
  {
    id: "faq-4",
    question: "Có thể nâng cấp vCPU và RAM sau khi đăng ký không?",
    answer:
      "Hoàn toàn được. BigCloud cho phép bạn nâng cấp cấu hình máy chủ (tăng số vCPU, dung lượng RAM và dung lượng ổ cứng NVMe) bất cứ lúc nào ngay trên bảng điều khiển mà không làm thay đổi địa chỉ IP tĩnh hay mất mát dữ liệu của hệ thống.",
  },
  {
    id: "faq-5",
    question: "BigCloud hỗ trợ những hệ điều hành và template ứng dụng nào?",
    answer:
      "BigCloud hỗ trợ đầy đủ các bản phân phối Linux phổ biến nhất (Ubuntu 24.04/22.04 LTS, Debian 12, AlmaLinux 9, Rocky Linux 9, CentOS Stream) và Windows Server (2022/2019). Ngoài ra, chúng tôi cung cấp các 1-Click Apps cài sẵn như Docker, WordPress (tối ưu Nginx + Redis), n8n, Coolify, Node.js, LEMP và LAMP stack.",
  },
  {
    id: "faq-6",
    question: "Mỗi Cloud Server có đi kèm địa chỉ IPv4 riêng không?",
    answer:
      "Có. Mọi gói Cloud Server tại BigCloud đều được cấp phát mặc định 01 địa chỉ IPv4 tĩnh chuyên dụng (Dedicated Public IPv4) cùng với dải địa chỉ IPv6 miễn phí. Bạn cũng có thể mua thêm địa chỉ IPv4 bổ sung nếu có nhu cầu chạy nhiều dịch vụ riêng biệt.",
  },
  {
    id: "faq-7",
    question: "Hệ thống có hỗ trợ tính năng Snapshot (ảnh chụp nhanh) không?",
    answer:
      "Có. Tính năng Snapshot cho phép bạn lưu lại trạng thái tức thời của toàn bộ máy chủ và ổ đĩa chỉ trong vài giây. Bạn có thể tạo Snapshot trước khi nâng cấp mã nguồn, cập nhật hệ điều hành hoặc sửa đổi cấu hình quan trọng để có thể khôi phục về trạng thái an toàn bất kỳ lúc nào.",
  },
  {
    id: "faq-8",
    question: "BigCloud có sao lưu (Backup) tự động không?",
    answer:
      "Có. BigCloud cung cấp giải pháp Automated Backup định kỳ tự động. Dữ liệu bản sao lưu được mã hóa và chuyển sang cụm lưu trữ lưu trữ tách biệt hoàn toàn với cụm máy chủ chính nhằm đảm bảo an toàn tối đa cho dữ liệu doanh nghiệp của bạn.",
  },
  {
    id: "faq-9",
    question: "Thời gian khởi tạo Cloud Server mất bao lâu?",
    answer:
      "Sau khi đơn hàng được xác nhận thanh toán thành công, hệ thống tự động hóa của BigCloud sẽ tiến hành cấp phát tài nguyên và cài đặt hệ điều hành trong vòng dưới 60 giây. Toàn bộ thông tin truy cập SSH / Remote Desktop sẽ hiển thị ngay tại dashboard và gửi về email của bạn.",
  },
  {
    id: "faq-10",
    question: "BigCloud có hỗ trợ chuyển dữ liệu (Migration) từ nơi khác về không?",
    answer:
      "Có. Đội ngũ kỹ sư của BigCloud hỗ trợ chuyển đổi toàn bộ website, cơ sở dữ liệu và cấu hình hệ thống từ nhà cung cấp khác về BigCloud hoàn toàn miễn phí. Chúng tôi sẽ lên kế hoạch chuyển đổi vào khung giờ thấp điểm để đảm bảo thời gian downtime là thấp nhất.",
  },
  {
    id: "faq-11",
    question: "Đội ngũ hỗ trợ kỹ thuật của BigCloud hoạt động như thế nào?",
    answer:
      "Đội ngũ kỹ sư hỗ trợ kỹ thuật của BigCloud túc trực 24/7/365 qua hệ thống Ticket, Live Chat và Hotline khẩn cấp. Mọi yêu cầu hỗ trợ liên quan đến hạ tầng mạng, phần cứng và tính sẵn sàng của máy chủ đều được phản hồi và xử lý trong thời gian trung bình dưới 5 phút.",
  },
];

export const finalCtaData = {
  heading: "Sẵn sàng khởi chạy Cloud Server?",
  description:
    "Chọn cấu hình phù hợp và đưa workload của bạn lên hạ tầng Cloud hiệu năng cao của BigCloud chỉ trong vài phút.",
  primaryCtaText: "Khởi tạo Cloud Server",
  primaryCtaHref: "#configurator",
  secondaryCtaText: "Liên hệ tư vấn",
  secondaryCtaHref: "#contact",
  microcopy: ["Không phí thiết lập", "Nâng cấp linh hoạt", "Hỗ trợ 24/7"],
};

export const footerData = {
  brand: "BigCloud",
  tagline: "Cloud Infrastructure for modern workloads.",
  columns: [
    {
      title: "PRODUCT",
      links: [
        { label: "Cloud Server", href: "#cloud-server" },
        { label: "Cloud VPS", href: "#pricing" },
        { label: "Bảng giá", href: "#pricing" },
        { label: "Cloud Configurator", href: "#configurator" },
        { label: "Dedicated Storage", href: "#features" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Website & eCommerce", href: "#use-cases" },
        { label: "Backend Application", href: "#use-cases" },
        { label: "Database Workload", href: "#use-cases" },
        { label: "Development & CI/CD", href: "#use-cases" },
        { label: "Enterprise Business", href: "#use-cases" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "#" },
        { label: "System Status", href: "#" },
        { label: "Technical Blog", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "API Reference", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "Về BigCloud", href: "#" },
        { label: "Liên hệ", href: "#contact" },
        { label: "Điều khoản dịch vụ", href: "#" },
        { label: "Chính sách bảo mật", href: "#" },
        { label: "Cam kết SLA", href: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { label: "Trung tâm hỗ trợ", href: "#" },
        { label: "Gửi Ticket", href: "#" },
        { label: "Hotline 24/7: 1900 xxxx", href: "tel:1900xxxx" },
        { label: "Email: support@bigcloud.vn", href: "mailto:support@bigcloud.vn" },
      ],
    },
  ],
  copyright: "© 2026 BigCloud (bigcloud.vn). All rights reserved.",
  demoDisclaimer:
    "Giao diện & Dữ liệu được thiết kế demo phục vụ trình chiếu phê duyệt thiết kế cho thương hiệu BigCloud.",
};
