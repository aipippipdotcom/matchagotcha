import { ArrowUpRight } from "lucide-react";
import product from "@/assets/matcha-gotcha.png.asset.json";

const flavours = [
  {
    tag: "Ichibancha",
    name: "Matcha Gotcha",
    size: "90g",
    note: "Trà non vụ đầu, vị chát nhẹ và hậu ngọt kéo dài. Kem gelato mịn, ít đường.",
    tags: ["Matcha Nishio", "Gelato mịn", "Ít ngọt", "Không phẩm màu"],
  },
];

export function Flavours() {
  return (
    <section id="huong-vi" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <span
            data-reveal
            className="reveal font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Hương vị
          </span>
          <h2
            data-reveal
            className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-7xl"
          >
            CHỌN VỊ <span className="text-accent">CỦA BẠN</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {flavours.map((flavour) => (
            <article
              key={flavour.name}
              data-reveal
              id="san-pham"
              className="reveal group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(31,80,55,0.4)] md:p-12"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--sage), transparent 65%)" }}
              />
              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
                <img
                  src={product.url}
                  alt="Hộp kem gelato Matcha Gotcha 90g"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-44 shrink-0 transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-3 sm:w-56"
                />
                <div className="min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
                    {flavour.tag}
                  </span>
                  <h3 className="mt-2 text-4xl font-black tracking-tighter">{flavour.name}</h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {flavour.note}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {flavour.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#diem-ban"
                    className="btn-fill mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background after:bg-primary hover:text-foreground"
                  >
                    Mua ngay · {flavour.size}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div
            data-reveal
            className="reveal flex flex-col justify-between gap-8 rounded-[2rem] border border-dashed border-border p-8 md:p-12"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Sắp ra mắt
              </span>
              <h3 className="mt-3 text-4xl font-black tracking-tighter text-muted-foreground">
                HOUJICHA
                <br />
                SAKURA
                <br />
                KUROGOMA
              </h3>
              <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">
                Bộ sưu tập gelato Nhật Bản tiếp theo đang trên đường về. Đăng ký để là người đầu
                tiên nếm thử.
              </p>
            </div>
            <a
              href="#dang-ky"
              className="btn-fill inline-flex w-fit items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-bold after:bg-foreground hover:text-background"
            >
              Nhận thông báo
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
