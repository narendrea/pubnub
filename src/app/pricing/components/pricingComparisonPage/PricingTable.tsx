import { Included, ExtraCost } from "./PricingIcons";

export default function PricingTable() {
  return (
    <div className="mt-8 sm:mt-10 rounded-xl border border-gray-200 ">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <Th className="text-left">Billing Metric</Th>
              <Th className="text-center text-red-600">pubnub</Th>
              <Th className="text-center">Other Platforms</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <Row
              metric="Monthly Active Users (MAU)"
              pubnub={<span className="text-gray-700">The only thing you pay for</span>}
              other={<span className="text-gray-700">One of many potential charges</span>}
            />
            <Row
              metric="Peak Concurrent Connections"
              pubnub={<Included />}
              other={<ExtraCost />}
            />
            <Row
              metric="Message & API Call Volume"
              pubnub={<Included />}
              other={<ExtraCost />}
            />
            <Row
              metric="Active Channel / Connection Time"
              pubnub={<Included />}
              other={<ExtraCost />}
            />
            <Row
              metric="Storage & Bandwidth"
              pubnub={<Included />}
              other={<ExtraCost />}
            />
            <Row
              metric="Advanced Feature Add-ons"
              pubnub={<Included />}
              other={<ExtraCost />}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`px-4 py-4 text-xs border-none font-semibold uppercase tracking-wide text-gray-700 ${className}`}
    >
      {children}
    </th>
  );
}

function Row({ metric, pubnub, other }: { metric: string; pubnub: React.ReactNode; other: React.ReactNode }) {
  return (
    <tr className="bg-white">
      <td className="whitespace-normal align-middle px-4 py-3 text-sm font-medium text-gray-900">
        {metric}
      </td>
      <td className="px-4 py-4 text-sm text-center">{pubnub}</td>
      <td className="px-4 py-4 text-sm text-center">{other}</td>
    </tr>
  );
}
