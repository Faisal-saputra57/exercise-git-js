const Footer = () => {
  return (
    <footer className="mt-10 bg-[#111111] px-6 py-16 text-white md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <img
            src="/images/profile3.png" // ganti dengan path foto kamu
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              Have something in mind? <br />
              <span className="text-white">let’s build it together.</span>
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105">
          Get in touch
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400 md:flex-row">
        <p>
          Build with <span className="text-pink-500">💖</span> by Brightscout &
          Ayush
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Linkedin
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Webflow
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
