import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-20 px-5"
        style={{ backgroundImage: "url('/farm-bg.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Krishi Haat</h1>
        <p className="mt-4 text-lg">Shop essential agricultural goods at fair prices.</p>
        <Link to="/products">
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold py-3 px-6 rounded">
            Browse Products
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="text-center py-16 px-5 bg-white">
        <h2 className="text-3xl font-semibold mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Farming Tools",
            "Organic Seeds",
            "Pesticides",
            "Irrigation Kits",
            "Soil Health Kits",
            "Harvest Gear",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f9f9f9] p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">High-quality agricultural solutions.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
