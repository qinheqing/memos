import { HelpCircleIcon } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SettingRowProps {
  label: string;
  description?: string;
  tooltip?: string;
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({ label, description, tooltip, children, className, vertical = false }) => {
  return (
    <div
      className={cn(
        "w-full flex gap-4 py-1",
        vertical ? "flex-col items-start" : "flex-row justify-between items-center",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-1.5", vertical ? "w-full mb-1" : "flex-1 min-w-0 pr-4")}>
        <div className="flex items-center gap-2">
          <span className={cn("text-sm text-foreground", vertical ? "font-medium" : "font-normal")}>{label}</span>
          {tooltip && (
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <HelpCircleIcon className="w-3.5 h-3.5 text-muted-foreground/70 hover:text-muted-foreground transition-colors cursor-help shrink-0" />
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs text-xs">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {description && <p className="text-xs text-muted-foreground leading-normal">{description}</p>}
      </div>
      <div className={cn("flex items-center", vertical ? "w-full" : "shrink-0")}>{children}</div>
    </div>
  );
};

export default SettingRow;
