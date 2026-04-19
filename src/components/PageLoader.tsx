import { useEffect, useState } from "react";

interface PageLoaderProps {
  onFinish: () => void;
}

const PageLoader = ({ onFinish }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 250);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner simple mais soigné */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
          <div className="absolute inset-0 rounded-full border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>

        {/* Barre de progression fine */}
        <div className="w-40 h-1 bg-gold/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Pourcentage */}
        <span className="text-sm font-mono font-medium text-foreground/80">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default PageLoader;