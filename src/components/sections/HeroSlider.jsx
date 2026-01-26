// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Sample slider images from Unsplash
// const slides = [
//   "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
//   "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
// ];

// // State Cards Data
// const stats = [
//   { title: "Happy Clients", value: "120+" },
//   { title: "Projects Done", value: "80+" },
//   { title: "Years Experience", value: "5+" },
// ];

// const HeroSlider = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 4 sec
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">

//         {/* LEFT: Slider */}
//         <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
//           {slides.map((img, index) => (
//             <motion.img
//               key={index}
//               src={img}
//               alt="Makeup Slider"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: index === current ? 1 : 0 }}
//               transition={{ duration: 0.8 }}
//               className="absolute w-full h-full object-cover rounded-3xl"
//             />
//           ))}

//           {/* Side small rounded image indicators */}
//           <div className="absolute top-1/2 right-4 flex flex-col gap-3 transform -translate-y-1/2">
//             {slides.map((_, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setCurrent(idx)}
//                 className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
//                   idx === current ? "bg-black" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Text + State Cards */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-5xl font-light"
//           >
//             Professional <span className="font-semibold">Makeup Artist</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-gray-500 max-w-lg leading-relaxed"
//           >
//             Bringing your dream bridal or party look to life with elegance,
//             precision, and a touch of luxury. Every detail matters.
//           </motion.p>

//           {/* STATE CARDS */}
//           <div className="mt-6 flex flex-wrap gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
//                 className="bg-gray-50 p-5 rounded-2xl shadow-md flex flex-col items-center w-32"
//               >
//                 <span className="text-2xl font-semibold">{stat.value}</span>
//                 <span className="text-sm text-gray-500">{stat.title}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSlider;
