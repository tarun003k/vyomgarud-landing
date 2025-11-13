"use client";

import { motion } from "framer-motion";

export default function Capabilities() {
  
  const items = [
    {
      title: "AI-Driven Autonomous Navigation",
      desc: "Real-time obstacle avoidance, adaptive flight paths, and precision targeting powered by onboard AI.",
    },
    {
      title: "Encrypted Defense-Grade Telemetry",
      desc: "End-to-end encrypted communication with hardened RF protocols ensuring secure operational links.",
    },
    {
      title: "Modular Tactical Payloads",
      desc: "Supports EO/IR cameras, thermal imaging, mapping sensors, and mission-specific ISR payload modules.",
    },
    {
      title: "Extended Endurance Systems",
      desc: "Optimized aerodynamics and advanced power systems enabling long-range, long-duration missions.",
    },
  ];

  return (
    <section id="capabilities" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-10">Capabilities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111418] border border-gray-800 rounded-xl p-6 shadow-lg
                       transition duration-300 hover:-translate-y-1 hover:scale-[1.03]"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
