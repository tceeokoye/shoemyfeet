const stats = [
  { value: "6,500+", label: "Pairs Distributed" },
  { value: "18+", label: "Schools & Communities" },
  { value: "137+", label: "Young People Trained" },
  { value: "3", label: "Nigerian States" },
];

export default function ImpactNumbers() {
  return (
    <section id="impact-numbers" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#142E56]">
            Our progress
          </p>
          <h2 className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">
            Impact at a glance
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white px-4 py-6 text-center shadow-md sm:py-8"
            >
              <dt className="font-body text-xs font-medium uppercase tracking-wide text-[#696558] sm:text-sm">
                {stat.label}
              </dt>
              <dd className="mt-3 font-heading text-3xl font-semibold text-[#142E56] sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
