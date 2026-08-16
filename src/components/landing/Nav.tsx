import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Hương vị", href: "#huong-vi" },
  { label: "Câu chuyện", href: "#cau-chuyen" },
  { label: "Trải nghiệm", href: "#trai-nghiem" },
  { label: "Điểm bán", href: "#diem-ban" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="min-w-0 text-xl font-black tracking-tighter">
          MATCHA<span className="text-accent">GOTCHA</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#diem-ban"
            className="btn-fill hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-colors duration-300 after:bg-primary hover:text-foreground sm:inline-flex"
          >
            Tìm điểm bán
          </a>
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-full border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mt-3 rounded-2xl border border-border bg-background p-5 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-mono text-xs tracking-widest uppercase text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
