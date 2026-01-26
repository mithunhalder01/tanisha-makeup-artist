import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Appointment = () => {
  return (
    <section id="appointment" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-light text-black">
            Book <span className="font-semibold">Appointment</span>
          </h2>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
                       focus:outline-none focus:border-black"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
                       focus:outline-none focus:border-black"
          />

          {/* SERVICE SELECT */}
          <div className="relative">
            <select
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10
                         text-sm bg-white appearance-none
                         focus:outline-none focus:border-black"
            >
              <option value="">Select Service</option>
              <option>Bridal Makeup</option>
              <option>Party Makeup</option>
              <option>Engagement Makeup</option>
              <option>Reception Makeup</option>
              <option>Photoshoot Makeup</option>
            </select>

            {/* RIGHT ICON */}
            <FaChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-gray-500 text-sm pointer-events-none"
            />
          </div>

          {/* DATE */}
          <input
            type="date"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm
                       focus:outline-none focus:border-black"
          />

          {/* MESSAGE */}
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none
                       focus:outline-none focus:border-black"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full text-sm
                       hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Appointment;
