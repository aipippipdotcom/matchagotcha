import { ArrowUpRight, Store, PartyPopper, Building2, Truck } from "lucide-react";

const items = [
  {
    icon: Store,
    title: "Quầy nếm thử",
    text: "Trải nghiệm Matcha Gotcha tại các siêu thị và cửa hàng Vinamilk trên toàn quốc.",
    cta: "Xem lịch",
  },
  {
    icon: PartyPopper,
    title: "Sự kiện & pop-up",
    text: "Góc gelato matcha cho lễ hội, khai trương và hoạt động thương hiệu.",
    cta: "Đặt pop-up",
  },
  {
    icon: Building2,
    title: "Doanh nghiệp",
    text: "Đặt số lượng lớn cho văn phòng, khách sạn và chuỗi F&B.",
    cta: "Nhận báo giá",
  },
  {
    icon: Truck,
    title: "Nhà phân phối",
    text: "Hợp tác phân phối lạnh, hỗ trợ trưng bày và vật phẩm thương hiệu.",
    cta: "Hợp tác",
  },
];

export function Experience() {
  return (
    <section id="trai-nghiem" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span
            data-reveal
            className="reveal font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Trải nghiệm
          </span>
          <h2
            data-reveal
            className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-7xl"
          >
            GẶP <span className="text-accent">MATCHA GOTCHA</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className="reveal group flex flex-col justify-between rounded-[1.75rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent"
              style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
            >
              <div>
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary transition-colors duration-500 group-hover:bg-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
              <a
                href="#dang-ky"
                className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-accent"
              >
                {item.cta}
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
