import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light">
            Get in <span className="font-semibold">Touch</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Ready to book your makeup appointment? Reach out to me
          </p>
        </motion.div>

        {/* CONTACT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Phone</h4>
              <p className="text-gray-600">
                <a href="tel:917827888273" className="hover:text-black">
                  +91 917827888273
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">WhatsApp</h4>
              <p className="text-gray-600">
                <a href="https://wa.me/917827888273" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  Chat with me
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:tanishahalder20@gmail.com" className="hover:text-black">
                  tanishahalder20@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* BOOKING BUTTON */}
          <div className="flex flex-col justify-center">
            <a
              href="https://wa.me/917827888273"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-full text-center font-medium hover:bg-gray-800 transition w-full"
            >
              Book Now
            </a>
            <p className="text-gray-500 text-sm text-center mt-4">
              Available for bookings. Respond within 2 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
