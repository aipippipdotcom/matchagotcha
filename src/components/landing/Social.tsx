import { Heart } from "lucide-react";
import life1 from "@/assets/life-1.jpg";
import life2 from "@/assets/life-2.jpg";
import life3 from "@/assets/life-3.jpg";
import life4 from "@/assets/life-4.jpg";

const posts = [
  { src: life1, likes: "2.4k", alt: "Khách thưởng thức gelato matcha tại quán cà phê" },
  { src: life2, likes: "1.8k", alt: "Cận cảnh kết cấu kem matcha" },
  { src: life3, likes: "3.1k", alt: "Đồi trà Nishio" },
  { src: life4, likes: "1.5k", alt: "Nhóm bạn chia sẻ kem trên sân thượng" },
];

export function Social() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <span
            data-reveal
            className="reveal font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Theo dấu vị trà
          </span>
          <h2
            data-reveal
            className="clip-reveal mt-3 text-5xl font-black tracking-tighter md:text-7xl"
          >
            @MATCHAGOTCHA
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {posts.map((post, index) => (
            <a
              key={post.alt}
              href="#dang-ky"
              data-reveal
              className="reveal group relative aspect-square overflow-hidden rounded-[1.5rem]"
              style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
            >
              <img
                src={post.src}
                alt={post.alt}
                width={800}
                height={800}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-foreground/60 font-mono text-sm text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Heart className="size-4 fill-current" />
                {post.likes}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
