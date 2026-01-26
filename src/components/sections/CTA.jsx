import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl border border-gray-200 p-12 md:p-16 text-center"
        >
          {/* HEADLINE */}
          <h2 className="text-3xl md:text-4xl font-light leading-snug">
            Ready to look <span className="font-semibold">your absolute best</span>
            <br className="hidden md:block" /> on your special day?
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Book your makeup session today and enjoy a calm, professional
            experience with a look that truly feels like you.
          </p>

          {/* CTA BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/917827888273"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-10 py-4 rounded-full bg-black text-white text-sm tracking-wide"
          >
            Book on WhatsApp
          </motion.a>

          {/* TRUST LINE */}
          <p className="mt-6 text-xs text-gray-400">
            No spam • Quick response • Friendly consultation
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
