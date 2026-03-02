import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-all duration-200",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            error ? "border-coral" : "border-border",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-coral">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
