import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-white mb-6">About VyomGarud</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-gray-400 leading-relaxed max-w-3xl text-lg">
          VyomGarud designs and manufactures next-generation autonomous UAV...
        </p>
      </Reveal>
    </section>
  );
}
