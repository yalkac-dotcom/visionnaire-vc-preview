import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center bg-[hsl(var(--brand-blue))] text-[hsl(var(--primary-foreground))] rounded-full shadow-[0_2px_12px_-2px_rgba(0,0,0,0.18)] transition-all duration-400 active:scale-[0.93] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={18} strokeWidth={2} />
    </button>
  );
}
