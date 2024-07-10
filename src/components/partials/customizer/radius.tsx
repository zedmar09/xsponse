import React from "react";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/xsponse/ui/button";
import { useThemeStore } from "@/src/store";
import { cn } from "@/src/lib/utils";

const RadiusInit = () => {
  const { radius, setRadius } = useThemeStore();

  return (
    <div>
      <div className="mb-3  relative inline-block px-3 py-[3px] rounded bg-primary/10 text-primary  text-xs font-medium">
        Rounded
      </div>
      <div className="grid grid-cols-5 gap-2">
        {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
          return (
            <Button
              variant="outline"
              key={value}
              onClick={() => setRadius(parseFloat(value))}
              className={cn(
                radius === parseFloat(value) &&
                  "border-2 border-primary bg-primary text-primary-foreground",
              )}
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default RadiusInit;
