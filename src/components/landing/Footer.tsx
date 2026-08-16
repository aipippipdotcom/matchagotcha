import { useState } from "react";
import { ArrowRight } from "lucide-react";

const columns = [
  { title: "Sản phẩm", links: ["Matcha Gotcha 90g", "Sắp ra mắt", "Thành phần", "Dinh dưỡng"] },
  { title: "Thương hiệu", links: ["Về Vinamilk", "Câu chuyện trà", "Tin tức", "Tuyển dụng"] },
  { title: "Hỗ trợ", links: ["Điểm bán", "Phân phối", "Liên hệ", "Câu hỏi thường gặp"] },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="diem-ban" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div id="dang-ky" className="grid gap-10 border-b border-background/10 pb-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black tracking-tighter md:text-6xl">
              NHẬN TIN
              <br />
              <span className="text-primary">VỊ MỚI TRƯỚC TIÊN</span>
            </h2>
            <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-background/60">
              Đăng ký để biết điểm bán gần bạn, sự kiện nếm thử và các vị gelato sắp ra mắt.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-3 self-end sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email@cuaban.com"
              className="min-w-0 flex-1 rounded-full border border-background/20 bg-transparent px-6 py-3.5 font-mono text-sm placeholder:text-background/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="btn-fill inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground after:bg-background"
            >
              {sent ? "Đã đăng ký" : "Đăng ký"}
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-2xl font-black tracking-tighter">
              MATCHA<span className="text-primary">GOTCHA</span>
            </span>
            <p className="mt-3 font-mono text-xs leading-relaxed text-background/60">
              Kem gelato matcha — Vinamilk, est. 1976.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="font-mono text-xs text-background/60 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-background/10 pt-8 font-mono text-[11px] text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Vinamilk. Nội dung demo phục vụ marketing.</span>
          <span className="tracking-[0.3em] uppercase">Nishio · Aichi · Japan</span>
        </div>
      </div>
    </footer>
  );
}
