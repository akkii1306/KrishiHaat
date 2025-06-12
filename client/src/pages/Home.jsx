import { Link } from "react-router-dom";
import { GiFarmTractor, GiPlantSeed, GiChemicalDrop, GiWaterTank, GiWheat, GiScythe } from "react-icons/gi";
import feildImg from "./feild.jpg";

const Home = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative text-white text-center py-20 px-5 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${feildImg})`,
            
          }}
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-[#347928] opacity-30" aria-hidden="true"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight">Welcome to Krishi Haat</h1>
          <p className="mt-4 text-lg sm:text-xl">Shop essential agricultural goods at fair prices.</p>
          <Link to="/products">
            <button className="mt-6 bg-[#FCCD2A] hover:bg-yellow-400 text-[#347928] font-semibold py-3 px-6 rounded transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300">
              Browse Products
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center py-16 px-5 bg-[#FFFBE6]">
        <h2 className="text-3xl font-semibold mb-10 text-[#347928]">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <GiFarmTractor size={40} />, label: "Farming Tools" },
            { icon: <GiPlantSeed size={40} />, label: "Organic Seeds" },
            { icon: <GiChemicalDrop size={40} />, label: "Pesticides" },
            { icon: <GiWaterTank size={40} />, label: "Irrigation Kits" },
            { icon: <GiWheat size={40} />, label: "Soil Health Kits" },
            { icon: <GiScythe size={40} />, label: "Harvest Gear" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#C0EBA6] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-gray-800"
            >
              <div className="text-[#347928] mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-gray-700 text-sm">High-quality agricultural solutions.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FFFBE6] py-16 px-5">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#347928]">What Our Farmers Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Ramesh Yadav",
              feedback: "Krishi Haat made it easy to find affordable and quality farming tools. Highly recommended!",
            },
            {
              name: "Sunita Devi",
              feedback: "I loved the organic seeds section! My crops grew better than ever.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
              <h4 className="font-bold text-[#347928]">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
