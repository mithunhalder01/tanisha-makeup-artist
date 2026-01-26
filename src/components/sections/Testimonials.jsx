import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Neha Singh",
    role: "Bridal Makeup",
    rating: 5,
    text:
      "I felt like the most beautiful version of myself on my wedding day. Makeup was flawless, lightweight, and lasted all day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ritika Jain",
    role: "Reception Makeup",
    rating: 5,
    text:
      "Perfect balance of glam and elegance. My photos came out stunning without looking overdone.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Kajal Mehta",
    role: "Party Glam",
    rating: 5,
    text:
      "Super smooth experience and amazing makeup quality. Everyone kept complimenting my look.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Sneha Roy",
    role: "Bridal Trial",
    rating: 4,
    text:
      "She patiently understood my skin and preferences. The final look felt very natural and confident.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Engagement Makeup",
    rating: 5,
    text:
      "Extremely professional and calm. The makeup stayed fresh for hours and looked beautiful in photos.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const visibleCards = isMobile ? 1 : 3;
  const total = testimonials.length;

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light">
            Client <span className="font-semibold">Reviews</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Real brides & clients sharing their experience
          </p>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(-${(100 / visibleCards) * index}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[33.3333%] px-3"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + total) % total)
          }
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur bg-white/70 border border-gray-200 items-center justify-center hover:scale-105 transition"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % total)
          }
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur bg-white/70 border border-gray-200 items-center justify-center hover:scale-105 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                index === i
                  ? "bg-gray-800"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 h-[280px] flex flex-col justify-between">

      {/* Stars */}
      <div className="text-yellow-400 text-lg">
        {"★".repeat(item.rating)}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
        “{item.text}”
      </p>

      {/* Client */}
      <div className="flex items-center gap-3 mt-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-gray-500">{item.role}</p>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
