export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-800 mt-24 py-20 bg-[#0b0d10]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE FORM */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            Connect with our engineering team for demos, partnerships, or technical integrations.
          </p>

          <form className="space-y-4 max-w-md">
            <input className="w-full bg-[#111418] border border-gray-700 rounded-md p-3 text-white" placeholder="Your Name" />
            <input className="w-full bg-[#111418] border border-gray-700 rounded-md p-3 text-white" placeholder="Email" />
            <textarea className="w-full bg-[#111418] border border-gray-700 rounded-md p-3 text-white" rows={4} placeholder="Message"></textarea>
            <button className="bg-[#ff7b00] text-black px-5 py-3 rounded-md font-medium hover:bg-orange-500">Send Message</button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">VyomGarud UAV Systems</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Autonomous UAV Platforms</li>
            <li>Defense & ISR Solutions</li>
            <li>AI Navigation Systems</li>
            <li>Secure Telemetry Architecture</li>
          </ul>

          <p className="text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} VyomGarud. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
