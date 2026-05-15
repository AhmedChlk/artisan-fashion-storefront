"use client";

import { formatPrice } from "@/lib/utils/formatPrice";
import { cn } from "@/lib/utils/cn";
import type { DeliveryMethod } from "@/types";

interface DeliveryOptionProps {
  method: DeliveryMethod;
  selected: boolean;
  onSelect: () => void;
}

export function DeliveryOption({ method, selected, onSelect }: DeliveryOptionProps) {
  return (
    <label
      className={cn(
        "flex items-center justify-between p-6 cursor-pointer transition-colors border",
        selected
          ? "bg-surface-container border-l-2 border-l-primary border-y-outline-variant border-r-outline-variant"
          : "border-outline-variant hover:bg-surface-variant"
      )}
    >
      <div className="flex items-center gap-4">
        <input
          type="radio"
          name="shipping"
          checked={selected}
          onChange={onSelect}
          className="w-4 h-4 text-primary bg-transparent border-outline focus:ring-primary focus:ring-2"
        />
        <div className="flex flex-col">
          <span className="text-label-md uppercase text-on-surface">{method.name}</span>
          <span className="text-body-sm text-on-surface-variant">{method.estimatedDays}</span>
        </div>
      </div>
      <span className="font-mono text-label-md text-on-surface">
        {method.price === 0 ? "Offerte" : formatPrice(method.price)}
      </span>
    </label>
  );
}
