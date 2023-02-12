import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    // if selected it will give it a text of yellow if not it'll be white
    // if hovered the text will be yellow in half a second
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-important-text-white rounded-full px-3 py-1 bg-blue shadow-2xl"
          : "rounded-full px-3 py-1 text-main-tab-text"
      } hover:text-important-text-white transition duration-500 hover:bg-section-text-grey`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  // state for mobile screens only; will check if the menu is clicked
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    // z-40 = z index so that this is always showing , w = width, fixed top-0 py-6 = fixed position at the top with a padding top and bottom of 6
    <header className="flex justify-between items-center z-40 w-full py-12 max-w-[50%] m-auto drop-shadow-xl">
      <div className="flex justify-center w-24 bg-side-bar-bg rounded-full py-4 drop-shadow-lg">
        Dark
      </div>
      {/* flex = adjustable, mx-auto = margin in x direction is automatically, w-5/6 = width is 83%, justify-between is the space between elements / components  */}
      <nav className="flex mx-auto bg-side-bar-bg rounded-full py-4 ">
        {/* DESKTOP NAV */}
        {/* so between each item/element/component theres a gap of 64px */}
        <div className="flex justify-center content-center gap-6 font-opensans text-base font-semibold px-4 drop-shadow-lg">
          <Link
            page="All"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </nav>
      <div className="flex justify-center w-24 bg-side-bar-bg rounded-full py-4 drop-shadow-lg">
        Contact
      </div>
    </header>
  );
};

export default Navbar;
