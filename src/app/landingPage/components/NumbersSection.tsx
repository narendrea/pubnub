import React from "react";

type StatItem = {
  highlight: string;
  title: string;
  description: string;
};

const stats: StatItem[] = [
  { highlight: "#1", title: "World's Largest Event-Driven Network", description: "Globally-distributed edge messaging for IoT, Mobile, Server, Web." },
  { highlight: "<30ms", title: "Latency with global delivery", description: "Low latency with unlimited concurrency worldwide." },
  { highlight: "2K+", title: "Customers", description: "800M devices, 3T API transactions every month." },
  { highlight: "99.999%", title: "Best in class SLA & compliance", description: "SOC2, HIPPA, GDPR, CCPA, ISO 27001 certified." },
  { highlight: ">60", title: "Patent Claims Granted", description: "Decades of innovation in real‑time infrastructure." },
];

const renderHighlight = (highlight: string) => {
  const symbols = ["#", "<", "+", "%", ">"];
  const symbolIndex = highlight.split("").findIndex(char => symbols.includes(char));

  if (symbolIndex !== -1) {
    const symbol = highlight[symbolIndex];
    const rest = highlight.slice(0, symbolIndex) + highlight.slice(symbolIndex + 1);
    return (
      <>
        <span className="text-red-500">{symbol}</span>
        <span className="text-white">{rest}</span>
      </>
    );
  }

  return <span className="text-white">{highlight}</span>;
};

const NumbersSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#001143] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-8 py-16 md:flex-row">
        <div className="md:w-1/2">
          <div className="md:sticky md:top-24">
            <h2 className="text-4xl sm:text-6xl font-bold">
              PubNub
              <br />
              <span className="text-4xl sm:text-6xl font-bold">by the Numbers</span>
            </h2>
          </div>
        </div>

        <div className="md:w-1/2  space-y-6 pr-1">
          {stats.map((item, idx) => (
            <article
              key={idx}
              className="rounded-xl border border-[#234c8a] bg-[#051743] px-8 py-6 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className=" text-3xl sm:text-6xl font-extrabold">{renderHighlight(item.highlight)}</div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NumbersSection;
