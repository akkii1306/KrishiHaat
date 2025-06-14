import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#C0EBA6] text-[#347928] px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        
        {/* Left - Brand Info */}
        <div className="mb-2 sm:mb-0">
          <h2 className="text-lg font-bold">Krishi Haat</h2>
          <p className="text-sm">Empowering Farmers, Enriching Fields.</p>
          <p className="text-xs mt-1">© {new Date().getFullYear()} Krishi Haat</p>
        </div>

        {/* Right - GitHub Icon */}
        <div>
          <a
            href="https://github.com/akkii1306/KrishiHaat"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-[#FCCD2A] transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
