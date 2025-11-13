export default function Highlights() {
  const items = [
    {
      title: "99.9% Reliability",
      desc: "Simulated uptime under high-stress operational environments.",
    },
    {
      title: "Secure-by-Design",
      desc: "Encrypted links and hardened communication architecture.",
    },
    {
      title: "Modular Architecture",
      desc: "Swap payloads instantly for ISR, mapping, or tactical missions.",
    },
  ];

  return (
    <section id="highlights" className="pt-8 pb-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-8">Key Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-full bg-[#111418] border border-gray-800 rounded-xl p-6 shadow-lg
                       transition duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-6" />
          </div>
        ))}
      </div>
    </section>
  );
}
