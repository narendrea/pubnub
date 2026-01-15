import React, { useEffect, useState } from "react";

export default function NumberBox({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [text, setText] = useState(String(value));

  useEffect(() => setText(String(value)), [value]);

  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="MAU"
        value={text}
        onChange={(e) => setText(e.target.value.replace(/[^\d]/g, ""))}
        onBlur={() => {
          const n = parseInt(text || "0", 10);
          onChange(Number.isFinite(n) ? n : value);
        }}
        className="w-24 rounded-md border border-gray-300 py-2 px-3 text-sm text-right shadow-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
      />
    </div>
  );
}
