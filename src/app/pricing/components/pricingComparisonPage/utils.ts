export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function formatUSD(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatInt(n: number) {
  return n.toLocaleString("en-US");
}

/* Simple tiered estimate matching original logic */
export function estimatePrice(mau: number) {
  const brackets: { upto: number; rate: number }[] = [
    { upto: 1000, rate: 0.17 },
    { upto: 5000, rate: 0.14 },
    { upto: 10000, rate: 0.12 },
    { upto: 25000, rate: 0.10 },
    { upto: 50000, rate: 0.08 },
  ];

  let remaining = clamp(mau, 1000, 50000);
  let prev = 0;
  let total = 0;

  for (const b of brackets) {
    const span = Math.max(0, Math.min(remaining, b.upto) - prev);
    total += span * b.rate;
    prev = b.upto;
  }

  return Math.max(170, Math.round(total * 100) / 100);
}
