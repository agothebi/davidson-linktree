import { ChefHat } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent/20 border-t-accent" />
        <p className="flex items-center gap-2 animate-pulse text-xl font-heading font-bold text-muted">
          <ChefHat className="w-6 h-6 text-accent" />
          <span>Kooking&hellip;</span>
        </p>
      </div>
    </div>
  );
}
