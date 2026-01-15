type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "danger" | "outline";
};

export default function Button({
  label,
  onClick,
  className = "",
  variant = "primary",
}: Props) {
  const base =
    "inline-flex justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition focus-visible:ring-2";

  const styles = {
    primary: "border text-base border-gray-300 bg-white hover:bg-gray-50",
    danger: "bg-red-600 text-base text-white hover:bg-red-700",
    outline: "border text-base border-gray-300 bg-white hover:bg-gray-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
