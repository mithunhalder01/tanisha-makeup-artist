import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import profileImg from "../../assets/images/Profile.jpg";


const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/tanisha_makeupartistry_/",
    color: "text-pink-500",
    hover: "hover:bg-pink-100",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/tanisha.halder.603714",
    color: "text-blue-600",
    hover: "hover:bg-blue-100",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tanisha-a6b18a38a/",
    color: "text-sky-600",
    hover: "hover:bg-sky-100",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            About <span className="font-semibold">Me</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Bridal & Luxury Makeup Artist
          </p>
        </motion.div>

        {/* SPLIT LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + SOCIALS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* IMAGE */}
            <img
              src={profileImg}
              alt="Tanisha Halder"
              className="rounded-3xl shadow-2xl object-cover w-full h-[460px]"
            />

            {/* DESKTOP SOCIALS */}
            <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 flex-col gap-4">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className={`w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg backdrop-blur ${item.hover} transition`}
                >
                  <span className={`${item.color} text-lg`}>
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* MOBILE SOCIALS */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-lg">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow"
                >
                  <span className={`${item.color}`}>
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I’m Tanisha
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              I’m a professional makeup artist with{" "}
              <span className="font-semibold">3+ years of experience</span>{" "}
              specializing in bridal, party, and luxury event makeup.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My approach is minimal, elegant, and skin-focused — ensuring your
              makeup feels comfortable, timeless, and camera-ready.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mb-10 text-center">
              <div>
                <h4 className="text-3xl font-semibold">3+</h4>
                <p className="text-gray-500 text-sm">Years</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold">200+</h4>
                <p className="text-gray-500 text-sm">Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-semibold">99%</h4>
                <p className="text-gray-500 text-sm">Satisfaction</p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Bridal Makeup",
                  "HD Makeup",
                  "Airbrush",
                  "Skin Prep",
                  "Party Looks",
                  "Hairstyling Support",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-white shadow-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICATION */}
            <div className="mb-8">
              <h4 className="font-semibold mb-2">Certification</h4>
              <p className="text-gray-600">
                Certified Professional Makeup Artist (Bridal & HD)
              </p>
            </div>

            {/* QUOTE */}
            <blockquote className="relative bg-white shadow-md rounded-2xl p-6 italic text-gray-600">
              <span className="absolute -top-4 left-6 text-6xl text-gray-200">
                “
              </span>
              Makeup should elevate your confidence — not cover who you are.
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
