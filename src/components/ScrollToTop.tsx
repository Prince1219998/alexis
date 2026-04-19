import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ScrollButton = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setVisible(scrollTop > 200);

      // vérifier si on est en bas
      if (scrollTop + windowHeight >= fullHeight - 50) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isBottom) {
      // remonter
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // descendre
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-xl border border-gold/40 bg-primary text-primary-foreground hover:bg-gold hover:text-primary transition-all duration-300"
    >
      {isBottom ? (
        <ChevronUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>
  );
};

export default ScrollButton;