import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap bg-[#C0EBA6] text-[#347928] px-8 py-4">
      <div className="font-bold">
        <p>© {new Date().getFullYear()} Krishi Haat</p>
      </div>
      <div>
        <a
          href="https://github.com/your-repo-url"
          target="_blank"
          rel="noreferrer"
          className="text-[#347928] text-2xl hover:text-[#FCCD2A] transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
