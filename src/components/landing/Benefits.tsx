const stats = [
  { value: "88", title: "Ngày Shincha", note: "Búp trà non hái đúng ngày thứ 88 sau Lập Xuân" },
  { value: "1st", title: "Vụ Ichibancha", note: "Vụ mùa đầu tiên, tinh túy nhất trong năm" },
  { value: "90g", title: "Gelato thật", note: "Kết cấu mịn đặc trưng, không phẩm màu" },
  { value: "0%", title: "Hương liệu giả", note: "Vị trà đến từ bột matcha nguyên bản" },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <span className="pointer-events-none absolute inset-x-0 top-6 select-none text-center text-[22vw] leading-none font-black tracking-tighter text-background/[0.04]">
        MATCHA
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span
            data-reveal
            className="reveal font-mono text-xs tracking-[0.3em] uppercase text-primary"
          >
            Bên trong hộp kem
          </span>
          <h2
            data-reveal
            className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-7xl"
          >
            THÀNH PHẦN <span className="text-primary">& GIÁ TRỊ</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              data-reveal
              className="reveal group bg-foreground p-8 transition-colors duration-500 hover:bg-background/5"
              style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
            >
              <span className="block text-5xl font-black tracking-tighter text-primary transition-transform duration-500 group-hover:-translate-y-1">
                {stat.value}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{stat.title}</h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-background/60">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
