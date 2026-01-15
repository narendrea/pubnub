import { Icon } from "@iconify/react";

export function Included() {
  return (
    <span className="inline-flex items-center gap-1 text-green-700 text-xs">
      <Icon icon="mdi:check-circle" className="h-4 w-4" />
      Included
    </span>
  );
}

export function ExtraCost() {
  return (
    <span className="inline-flex items-center gap-1 text-red-700 text-xs">
      <Icon icon="mdi:currency-usd" className="h-4 w-4" />
      Extra Cost
    </span>
  );
}
