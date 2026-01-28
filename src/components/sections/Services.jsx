import { motion } from "framer-motion";

// 4:3 portrait images
import bridalImg from "/images/makeup1.webp";
import partyImg from "/images/makeup2.webp";
import engagementImg from "/images/makeup3.webp";
import trialImg from "/images/makeup4.jpg";

const services = [
  {
    title: "Bridal Makeup",
    description:
      "A complete bridal makeup look designed to enhance your natural beauty and last throughout your special day.",
    price: "Starting from ₹ 15999/-",
    image: bridalImg,
  },
  {
    title: "Party Makeup",
    description:
      "Soft, elegant or glam makeup looks perfect for parties, events and celebrations.",
    price: "Starting from ₹ 2499/-",
    image: partyImg,
  },
  {
    title: "Engagement / Reception",
    description:
      "Customized makeup styles tailored to your outfit, lighting and event theme.",
    price: "Starting from ₹ 10999/-",
    image: engagementImg,
  },
  {
    title: "Trial Makeup",
    description:
      "A trial session to finalize your bridal look and ensure complete confidence before the big day.",
    price: "Available on request",
    image: trialImg,

  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
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
            Makeup <span className="font-semibold">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Professional makeup services crafted to make you feel confident,
            elegant and camera-ready for every occasion.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="p-10 rounded-3xl border border-gray-200 hover:border-gray-300 transition"
            >
              {/* IMAGE ON TOP */}
              <div className="mb-8 aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT BELOW (UNCHANGED DESIGN) */}
              <div>
                <h3 className="text-xl font-medium mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <span className="text-sm text-gray-500">
                  {service.price}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
