import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GiFarmTractor,
  GiPlantSeed,
  GiChemicalDrop,
  GiWaterTank,
  GiWheat,
  GiScythe,
} from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import feildImg from "./feild.jpg";
import { useTranslation } from 'react-i18next';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { t } = useTranslation();

  const services = [
    { icon: <GiFarmTractor size={40} />, labelKey: 'services.farmingTools' },
    { icon: <GiPlantSeed size={40} />, labelKey: 'services.organicSeeds' },
    { icon: <GiChemicalDrop size={40} />, labelKey: 'services.pesticides' },
    { icon: <GiWaterTank size={40} />, labelKey: 'services.irrigationKits' },
    { icon: <GiWheat size={40} />, labelKey: 'services.soilHealth' },
    { icon: <GiScythe size={40} />, labelKey: 'services.harvestGear' },
  ];

  const testimonials = [
    {
      name: "Ramesh Yadav",
      feedback:
        "Krishi Haat made it easy to find affordable and quality farming tools. Highly recommended!",
    },
    {
      name: "Sunita Devi",
      feedback: "I loved the organic seeds section! My crops grew better than ever.",
    },
  ];

  return (
    <div className="page-content w-full font-sans bg-[#FFFBE6] text-gray-800">
      {/* Hero Section */}
      <section
        className="text-white text-center py-20 px-5 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${feildImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight font-['Playfair_Display']  text-gray-800"
            data-aos="fade-up"
          >
            {t('home.welcome')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700" data-aos="fade-up" data-aos-delay="200">
            {t('home.subtitle')}
          </p>
          <Link to="/products">
            <button
              className="mt-6 bg-[#FCCD2A] hover:bg-yellow-400 text-[#347928] font-semibold py-3 px-6 rounded transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 inline-flex items-center gap-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {t('home.browse')} <FiArrowRight />
            </button>
          </Link>
        </div>
      </section>

      {/* About Section
      <section className="bg-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#347928] mb-4">About Krishi Haat</h2>
          <p className="text-gray-700 text-lg">
            We aim to empower Indian farmers by providing easy access to affordable, high-quality
            agricultural products and tools. Our goal is to support rural livelihoods and boost
            productivity sustainably.
          </p>
        </div>
      </section> */}

     

     

      {/* Services Section */}
      <section className="text-center py-14 px-5 bg-[#FFFBE6]">
        <h2 className="text-3xl font-semibold mb-10 text-[#347928]">{t('home.whatWeOffer')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#C0EBA6] p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="bg-[#347928]/10 rounded-full p-3 mb-3">
                <div className="text-[#347928]">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t(item.labelKey)}</h3>
              <p className="text-gray-700 text-sm text-center">
                {t('home.servicesIntro')}
              </p>
            </div>
          ))}
        </div>
      </section>
       {/* How It Works Section */}
      <section className="bg-[#FFFBE6] py-14 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#347928]">{t('home.howItWorks')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[t('home.browse'), t('products.addToCart'), t('cart.placeOrder'), 'Get Timely Delivery'].map(
            (step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded shadow-md hover:scale-105 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="text-4xl font-bold text-[#FCCD2A] mb-2">{i + 1}</div>
                <p className="text-lg font-semibold text-[#347928]">{step}</p>
              </div>
            )
          )}
        </div>
      </section>
 {/* FAQ Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#347928] mb-8">FAQs</h2>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#347928] mb-1">🚚 How long does delivery take?</h3>
            <p className="text-gray-700">
              Orders are delivered within 4–7 business days, depending on your location.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-bold text-[#347928] mb-1">💳 What payment methods are accepted?</h3>
            <p className="text-gray-700">We accept UPI, Bank Transfer, and Cash on Delivery (COD).</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold text-[#347928] mb-1">📞 How can I contact support?</h3>
            <p className="text-gray-700">
              You can reach out via the contact form on our website or call our toll-free helpline.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-[#FFFBE6] py-16 px-5">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#347928]">What Our Farmers Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <img
                src={`https://api.dicebear.com/6.x/thumbs/svg?seed=user${i + 1}`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mb-3"
              />
              <p className="text-gray-700 mb-4 italic relative pl-6">
                <span className="text-3xl text-[#FCCD2A] absolute left-0 top-0">“</span>
                {testimonial.feedback}
              </p>
              <h4 className="font-bold text-[#347928]">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
