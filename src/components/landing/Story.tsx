import plantation from "@/assets/life-3.jpg";
import texture from "@/assets/life-2.jpg";

const harvests = [
  {
    step: "01",
    name: "Ichibancha",
    text: "Vụ mùa đầu tiên vào tháng Năm — búp trà non nhất, ngọt hậu và thơm sâu. Đây là vụ dùng cho Matcha Gotcha.",
  },
  {
    step: "02",
    name: "Nibancha",
    text: "Vụ thứ hai, lá dày hơn, vị trà đậm và chát rõ — thường dùng cho trà uống hằng ngày.",
  },
  {
    step: "03",
    name: "Sanbancha",
    text: "Vụ cuối, vị đắng và đơn điệu hơn, phù hợp cho mục đích chế biến công nghiệp.",
  },
];

export function Story() {
  return (
    <section id="cau-chuyen" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div data-reveal className="reveal grid grid-cols-2 gap-4">
            <img
              src={plantation}
              alt="Đồi trà Nishio phủ sương buổi sáng"
              width={800}
              height={800}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-[1.75rem] object-cover"
            />
            <img
              src={texture}
              alt="Kết cấu kem gelato matcha và chasen tre"
              width={800}
              height={800}
              loading="lazy"
              className="mt-10 aspect-[3/4] w-full rounded-[1.75rem] object-cover"
            />
          </div>

          <div>
            <span
              data-reveal
              className="reveal font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
            >
              Nishio · Aichi · Nhật Bản
            </span>
            <h2
              data-reveal
              className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-6xl"
            >
              BA VỤ TRÀ,
              <br />
              <span className="text-accent">MỘT LỰA CHỌN</span>
            </h2>
            <p
              data-reveal
              className="reveal mt-5 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground"
            >
              Chất lượng matcha phụ thuộc vào thời điểm thu hoạch. Chúng tôi chỉ chọn vụ đầu tiên —
              nơi trà giữ trọn vị non và hương cỏ ngọt.
            </p>

            <ol className="mt-10 space-y-px overflow-hidden rounded-[1.5rem] border border-border">
              {harvests.map((harvest, index) => (
                <li
                  key={harvest.step}
                  data-reveal
                  className="reveal group flex gap-5 border-b border-border bg-card p-6 transition-colors duration-500 last:border-b-0 hover:bg-secondary"
                  style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
                >
                  <span className="font-mono text-xs text-accent">{harvest.step}</span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-black tracking-tight">{harvest.name}</h3>
                    <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
                      {harvest.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
