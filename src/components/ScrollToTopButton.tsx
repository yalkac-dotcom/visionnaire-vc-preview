import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ScrollToTopButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 400);

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      setAtBottom(scrollY + winHeight >= docHeight - 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={atBottom ? t.a11y.backToTop : t.a11y.scrollPage}
      className={`fixed bottom-28 right-4 md:bottom-12 md:right-8 z-40 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-[0_4px_16px_-3px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-[0.93] hover:bg-accent hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.3)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {atBottom ? (
        <ChevronUp size={20} strokeWidth={2.5} />
      ) : (
        <ChevronDown size={20} strokeWidth={2.5} />
      )}
    </button>
  );
}
