"use client";
/**
 * Gold dot + trailing ring cursor. Mount once in the root layout.
 * - Over any element with data-cursor="Label" the ring grows into a solid
 *   86px disc showing the label (e.g. "VIEW").
 * - Over links/buttons it grows to 62px. Press scales it to 0.85.
 * - Only runs on fine pointers (mouse/trackpad); touch devices keep normal cursor.
 */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./scale-gallery.css";

export default function LabelCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const html = document.documentElement;
    html.classList.add("has-cursor");

    const dx = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.55, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.55, ease: "power3" });

    const move = (e: PointerEvent) => {
      html.classList.add("cursor-moved");
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !ring.current || !label.current) return;
      const target = t.closest<HTMLElement>("[data-cursor]");
      const link = t.closest("a, button, input, select, textarea, label");
      const r = ring.current;
      if (target) {
        r.classList.add("is-label");
        r.classList.remove("is-link");
        label.current.textContent = target.dataset.cursor || "";
      } else {
        r.classList.remove("is-label");
        r.classList.toggle("is-link", !!link);
      }
    };

    const leave = () => gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.3 });
    const enter = () => gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.3 });
    const down = () => ring.current?.classList.add("is-down");
    const up = () => ring.current?.classList.remove("is-down");

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      html.classList.remove("has-cursor", "cursor-moved");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden />
      <div className="cursor-ring" ref={ring} aria-hidden>
        <span ref={label} />
      </div>
    </>
  );
}
