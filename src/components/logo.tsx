import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-white font-bold text-lg">🦷</span>
      </div>
      <span className="text-xl font-bold text-foreground">AI Dentist</span>
    </div>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-6 w-6 rounded bg-blue-600 flex items-center justify-center",
        className
      )}>
      <span className="text-white text-sm">🦷</span>
    </div>
  );
};
