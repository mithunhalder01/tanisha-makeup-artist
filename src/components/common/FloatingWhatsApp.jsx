import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi Tanisha ✨ I would like to book an appointment for makeup services. Please share availability & details. Thank you!"
  );

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* TOOLTIP */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
        transition={{ duration: 0.25 }}
        className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
      >
        Book on WhatsApp
      </motion.div>

      {/* BUTTON */}
      <motion.a
        href={`https://wa.me/917827888273?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full p-4 shadow-xl
                   hover:bg-green-600 transition"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={26} />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
