import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center cursor-pointer transition-transform duration-500 ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
    >
      {isDark ? (
        <Sun className="size-5 text-yellow-500 rotate-0 transition-all" />
      ) : (
        <Moon className="size-5 text-blue-500 rotate-0 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
