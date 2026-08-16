import { useEffect } from "react";

/**
 * Adds data-visible="true" to every [data-reveal] element once it scrolls
 * into view. Powers the fade-up / clip-up entrances across the landing page.
 *
 * Clipped targets (clip-reveal) report an empty intersection rect, so the
 * observer watches an unclipped ancestor and flags the target instead.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    const targets = new Map<Element, HTMLElement[]>();
    for (const node of nodes) {
      const watched = node.classList.contains("clip-reveal") ? (node.parentElement ?? node) : node;
      const list = targets.get(watched) ?? [];
      list.push(node);
      targets.set(watched, list);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          for (const node of targets.get(entry.target) ?? []) {
            node.dataset["visible"] = "true";
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((_nodes, watched) => observer.observe(watched));
    return () => observer.disconnect();
  }, []);
}
