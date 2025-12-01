interface HeaderProps {
  heading?: string;
}

const Header = ({ heading = "PORTFOLIO" }: HeaderProps) => {
  return (
    <div className="flex items-center h-16 w-full">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="uppercase tracking-[0.2em] text-blue-600 text-lg md:text-xl">
            {heading}
          </h1>
        </div>
        <nav className="flex gap-6 md:gap-8">
          <a
            href="#projects"
            className="text-blue-600 text-sm md:text-base hover:-translate-y-1 font-semibold hover:text-blue-500 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-blue-600 text-sm md:text-base hover:-translate-y-1 font-semibold hover:text-blue-500 transition duration-200"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
