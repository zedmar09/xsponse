import React from "react";
import { cn, translate } from "@/src/lib/utils";

const MenuLabel = ({ item, className, trans }: {
  item: any,
  className?: string,
  trans: any
}) => {
  const { title } = item;
  return (
    <div
      className={cn(
        "text-default-900 font-semibold uppercase mb-3 text-xs  mt-4",
        className
      )}
    >
      {translate(title, trans)}
    </div>
  );
};

export default MenuLabel;
