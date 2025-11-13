export default function Highlights() {
  return (
    <section id="highlights" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-10">Key Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111418] border border-gray-800 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-white">99.9% Reliability</h3>
          <p className="text-gray-400 text-sm">Simulated uptime under high-stress operational environments.</p>
        </div>

        <div className="bg-[#111418] border border-gray-800 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-white">Secure-by-Design</h3>
          <p className="text-gray-400 text-sm">Encrypted links and hardened communication architecture.</p>
        </div>

        <div className="bg-[#111418] border border-gray-800 rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-white">Modular Architecture</h3>
          <p className="text-gray-400 text-sm">Swap payloads instantly for ISR, mapping, or tactical missions.</p>
        </div>
      </div>
    </section>
  );
}
