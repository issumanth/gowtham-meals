import ganesh from "../assets/ganesh.avif";

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 h-10">

        {/* LEFT EMPTY (for center balance) */}
        <div className="w-1/4 hidden sm:block"></div>

        {/* CENTER */}
        <div className="flex items-center justify-center w-full sm:w-1/2 min-w-0">

          <img
            src={ganesh}
            alt="Ganesh"
            className="w-5 h-5 sm:w-6 sm:h-6 mr-1 shrink-0"
          />

          <h1 className="text-sm sm:text-base md:text-lg font-black tracking-wide truncate leading-none">
            గౌతమ్ మీల్స్
          </h1>

        </div>

        {/* RIGHT */}
        <div className="w-1/4 flex justify-end">
          <a
            href="tel:7386064606"
            className="flex items-center gap-1 text-[10px] sm:text-xs px-2 py-[2px] rounded hover:bg-white/20 transition whitespace-nowrap"
          >
            📞 <span className="hidden sm:inline">7386064606</span>
          </a>
        </div>

      </div>

    </header>
  );
}

export default Navbar;