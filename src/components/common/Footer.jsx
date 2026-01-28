import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND INFO */}
        <div>
          <h3 className="text-lg font-semibold" style={{ color: '#EFBF04' }}>
            Tanisha <span className="font-light">MakeupArtist</span>
          </h3>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Professional makeup services for weddings, parties and special
            occasions. Calm experience, flawless results.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/tanisha.halder.603714"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tanisha_makeupartistry_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/tanisha-a6b18a38a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-medium mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#portfolio" className="hover:text-black">Portfolio</a></li>
            <li><a href="#services" className="hover:text-black">Services</a></li>
            <li><a href="#reviews" className="hover:text-black">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-medium mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>📍 New Delhi, India</li>
            <li>
              📞 <a href="https://wa.me/917827888273" className="hover:text-black">
                WhatsApp Chat
              </a>
            </li>
            <li>📸 Instagram: @tanisha_makeupartistry_</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Tanisha MakeupAtist. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
