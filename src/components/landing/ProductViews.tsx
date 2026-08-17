import { useState } from "react";
import front from "@/assets/matcha-gotcha.png.asset.json";
import angle from "@/assets/product-angle.png.asset.json";
import lid from "@/assets/product-lid.png.asset.json";
import back from "@/assets/product-back.png.asset.json";
import carton from "@/assets/product-carton.png.asset.json";

const views = [
  {
    id: "front",
    label: "Mặt trước",
    src: front.url,
    alt: "Hộp kem gelato Matcha Gotcha 90ml nhìn từ mặt trước",
    note: "Thân hộp in trọn câu chuyện matcha Ichibancha, logo Matcha Gotcha khổ lớn.",
  },
  {
    id: "angle",
    label: "Góc nghiêng",
    src: angle.url,
    alt: "Hộp kem gelato Matcha Gotcha nhìn góc nghiêng 3/4",
    note: "Dáng hộp giấy tròn, nắp gài chắc chắn — giữ kem ổn định ở -18°C.",
  },
  {
    id: "lid",
    label: "Mặt nắp",
    src: lid.url,
    alt: "Nắp hộp kem Matcha Gotcha với hoạ tiết xoáy trà và lá matcha",
    note: "Vòng xoáy chasen cùng nghi thức Sadō được khắc quanh nắp hộp.",
  },
  {
    id: "back",
    label: "Mặt sau",
    src: back.url,
    alt: "Mặt sau hộp kem Matcha Gotcha với bảng thành phần dinh dưỡng",
    note: "164 kcal · 3,9g đạm · 8,2g béo · 18g đường trong mỗi 100g.",
  },
  {
    id: "carton",
    label: "Thùng 12 ly",
    src: carton.url,
    alt: "Thùng carton Vinamilk Gelato 12 ly x 90ml",
    note: "Quy cách thương mại: 1,08 L — 12 ly x 90 ml mỗi thùng.",
  },
];

export function ProductViews() {
  const [active, setActive] = useState(views[0]!);

  return (
    <section id="chi-tiet" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-[42rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sage), transparent 65%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <span
            data-reveal
            className="reveal font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Cận cảnh sản phẩm
          </span>
          <h2
            data-reveal
            className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-7xl"
          >
            NHÌN TRỌN <span className="text-accent">MỌI GÓC</span>
          </h2>
          <p
            data-reveal
            className="reveal mx-auto mt-5 max-w-xl font-mono text-xs leading-relaxed text-muted-foreground"
          >
            Từ nắp hộp khắc nghi thức trà đạo tới bảng dinh dưỡng và quy cách thùng 12 ly — xem rõ
            từng chi tiết trước khi chọn.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div
            data-reveal
            className="reveal relative flex min-h-[26rem] items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 md:min-h-[38rem] md:p-12"
          >
            <img
              key={active.id}
              src={active.src}
              alt={active.alt}
              width={1200}
              height={1200}
              loading="lazy"
              className="reveal-img w-full max-w-2xl object-contain drop-shadow-[0_40px_60px_rgba(31,80,55,0.2)]"
            />
            <span className="absolute left-6 top-6 rounded-full bg-foreground px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase text-background md:left-10 md:top-10">
              {active.label}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <div data-reveal className="reveal flex flex-wrap gap-2">
              {views.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActive(view)}
                  aria-pressed={active.id === view.id}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    active.id === view.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>

            <p
              data-reveal
              className="reveal font-mono text-sm leading-relaxed text-muted-foreground"
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              {active.note}
            </p>

            <div
              data-reveal
              className="reveal grid grid-cols-5 gap-3"
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              {views.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActive(view)}
                  aria-label={`Xem ${view.label}`}
                  className={`aspect-square overflow-hidden rounded-2xl border bg-card p-1.5 transition-all duration-300 hover:-translate-y-1 ${
                    active.id === view.id ? "border-foreground" : "border-border opacity-70"
                  }`}
                >
                  <img
                    src={view.src}
                    alt={view.alt}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="size-full scale-[1.45] object-contain"
                  />
                </button>
              ))}
            </div>

            <dl
              data-reveal
              className="reveal grid grid-cols-2 gap-4 rounded-3xl border border-dashed border-border p-6"
              style={{ ["--reveal-delay" as string]: "220ms" }}
            >
              {[
                ["Thể tích", "90 ml"],
                ["Khối lượng", "76 g"],
                ["Matcha", "Nishio 2%"],
                ["Bảo quản", "Dưới -18°C"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-1 text-xl font-black tracking-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
