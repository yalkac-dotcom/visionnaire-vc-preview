export function HeroScrollIndicator() {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="group"
        type="button"
      >
        <div className="w-[28px] h-[44px] rounded-full border-2 border-primary flex items-start justify-center pt-[9px] transition-all duration-300 group-hover:border-[hsl(var(--accent))] group-active:scale-[0.95]">
          <div className="w-[3.5px] h-[10px] rounded-full bg-primary animate-scroll-dot" />
        </div>
      </button>
    </div>
  );
}
