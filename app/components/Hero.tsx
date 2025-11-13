"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-[#0b0d10]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight text-white">
            Precision Autonomous <br /> UAVs
          </h1>

          <h2 className="text-3xl font-semibold text-[#ff7b00]">
            Built for mission-critical operations.
          </h2>

          <p className="text-gray-400 max-w-md">
            VyomGarud develops advanced unmanned aerial systems engineered for
            reliability, secure telemetry, and adaptive autonomy in demanding
            defense and surveillance environments.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-[#ff7b00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
            >
              Request Demo
            </a>

            <a
              href="#capabilities"
              className="border border-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Our Capabilities
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden bg-[#111418] shadow-xl"
        >
          <Image
            src="/images/hero.jpg"
            alt="VyomGarud UAV"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
