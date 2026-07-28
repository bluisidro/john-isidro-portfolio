"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;
      setVisible(nearBottom);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`ease-bounce fixed right-6 bottom-6 z-40 inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#101319]/80 text-neutral-400 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:text-neutral-100 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ChevronDownIcon className="size-5 rotate-180" />
    </a>
  );
}
