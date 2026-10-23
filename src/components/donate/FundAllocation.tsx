const allocations = [
  { label: "Shoe Procurement", pct: 55, detail: "Direct purchase of quality shoes for children" },
  { label: "Transportation", pct: 15, detail: "Logistics and delivery to communities" },
  { label: "Community Outreach", pct: 12, detail: "Events, coordination, and community engagement" },
  { label: "Volunteer Support", pct: 8, detail: "Training, coordination, and volunteer resources" },
  { label: "Education Materials", pct: 5, detail: "Complementary school supplies and materials" },
  { label: "Administrative", pct: 5, detail: "Operations, reporting, and governance" },
];

export default function FundAllocation() {
  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Where your money goes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Full Transparency
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Where Your Money{" "}
            <span className="text-[#1A3A6B]">Goes</span>
          </h2>
          <p className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in radical transparency. Every naira is accounted for and directed towards maximizing impact for Nigerian children.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
            <div className="space-y-6">
              {allocations.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body font-semibold text-[#111827] text-sm">{item.label}</span>
                  <span className="font-heading font-bold text-[#142E56] text-lg">{item.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1A3A6B]"
                    style={{ width: `${item.pct}%` }}
                    role="progressbar"
                    aria-label={`${item.label} allocation`}
                    aria-valuenow={item.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="text-xs text-gray-500 font-body mt-2 leading-relaxed">{item.detail}</p>
              </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                <strong className="text-[#142E56]">95 cents</strong> of every ₦1 donated goes directly to program expenses — shoes, outreach, transportation, and education.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Program Expenses", value: "95%" },
                { label: "Administrative", value: "5%" },
                { label: "Shoes Distributed", value: "6,500+" },
                { label: "Communities Reached", value: "38+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="font-heading font-bold text-[#111827] text-xl">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-body mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <a href="/contact" className="btn-primary text-sm w-full justify-center py-3.5">
              Download Annual Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
