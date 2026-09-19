import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "icon" | "nav";
  showLabel?: boolean;
}

export function ThemeToggle({
  className,
  variant = "nav",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
          isDark
            ? "bg-muted/70 text-label border-white/10 hover:bg-muted"
            : "bg-black/5 text-label border-black/10 hover:bg-black/10",
          className
        )}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <Sun className="size-3.5 text-amber-400" />
        ) : (
          <Moon className="size-3.5 text-blue" />
        )}
        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex size-9 sm:size-10 items-center justify-center rounded-full transition-transform duration-150 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue",
        variant === "nav"
          ? "text-inherit hover:bg-black/5 dark:hover:bg-white/10"
          : "bg-muted/60 text-label hover:bg-muted border border-hairline",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode (currently ${theme})`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="size-4 sm:size-4.5 text-amber-300 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="size-4 sm:size-4.5 text-label transition-transform duration-200 rotate-0 scale-100" />
      )}
      {showLabel && (
        <span className="ml-2 text-xs font-medium">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
