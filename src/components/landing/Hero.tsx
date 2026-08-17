import { ArrowRight } from "lucide-react";
import product from "@/assets/matcha-gotcha.png.asset.json";

const facts = ["Matcha Nishio", "Ichibancha", "Gelato thật", "Ít ngọt"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div
        className="pointer-events-none absolute -top-40 -left-40 size-[38rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sage), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 size-[30rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--matcha), transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <span
            data-reveal
            className="reveal inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase text-background"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Kem gelato matcha thượng hạng
          </span>

          <h1 className="mt-6 text-[15vw] leading-[0.98] font-black tracking-tighter sm:text-7xl lg:text-8xl">
            <span data-reveal className="clip-reveal block">
              MATCHA
            </span>
            <span
              data-reveal
              className="clip-reveal block text-accent"
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              GOTCHA
            </span>
          </h1>

          <p
            data-reveal
            className="reveal mt-6 max-w-md font-mono text-sm leading-relaxed text-muted-foreground"
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            Gelato matcha từ vụ Ichibancha đầu tiên tại Nishio, tỉnh Aichi. Vị trà non, hậu ngọt
            thanh — thưởng thức mà không cần tuân theo bất kỳ nghi lễ nào.
          </p>

          <div
            data-reveal
            className="reveal mt-8 flex flex-wrap gap-3"
            style={{ ["--reveal-delay" as string]: "300ms" }}
          >
            <a
              href="#huong-vi"
              className="btn-fill group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground after:bg-foreground hover:text-background"
            >
              Khám phá hương vị
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#cau-chuyen"
              className="btn-fill inline-flex items-center rounded-full border border-foreground px-7 py-3.5 text-sm font-bold after:bg-foreground hover:text-background"
            >
              Câu chuyện trà
            </a>
          </div>

          <ul
            data-reveal
            className="reveal mt-10 flex flex-wrap gap-x-6 gap-y-2"
            style={{ ["--reveal-delay" as string]: "380ms" }}
          >
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:-mr-12">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 aspect-square -translate-y-1/2 rounded-full opacity-70 blur-2xl"
            style={{ background: "radial-gradient(circle, var(--sage), transparent 60%)" }}
          />
          <img
            src={product.url}
            alt="Hộp kem gelato Matcha Gotcha của Vinamilk"
            width={1200}
            height={1200}
            fetchPriority="high"
            className="float-slow w-[96%] max-w-2xl drop-shadow-[0_40px_60px_rgba(31,80,55,0.25)] lg:w-[115%] lg:max-w-none"
          />
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <span className="scroll-hint block h-8 w-5 rounded-full border border-border" />
      </div>
    </section>
  );
}
