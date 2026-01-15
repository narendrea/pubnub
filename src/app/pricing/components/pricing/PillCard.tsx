type Props = {
  title: string;
  price: string;
  note?: string;
};

export default function PillCard({ title, price, note }: Props) {
  return (
    <div className="rounded-3xl border border-gray-200 shadow-sm bg-[#fff] px-5 py-6">
      <p className="text-base font-semibold text-gray-700">{title}</p>
      <p className=" text-3xl mt-4 font-extrabold">{price}</p>
      {note && <p className="mt-1 text-base text-gray-800">{note}</p>}
    </div>
  );
}
