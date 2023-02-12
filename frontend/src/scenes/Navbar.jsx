import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isDesktop = null,
  isMenuToggled = null,
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-white rounded-lg "
          : "rounded-lg text-main-tab-text"
      } ${
        !isDesktop && isMenuToggled
          ? "w-3/4 flex justify-center py-4 m-4 "
          : "flex px-4 py-1.5"
      } hover:text-important-text-white transition duration-700 hover:bg-hover-text`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? "bg-black"
    : "backdrop-blur-2xl bg-opaque-black ";

  return (
    <nav
      className={`${navbarBackground} flex items-center justify-center z-40 w-full h-20 fixed top-0 drop-shadow-lg`}
    >
      <div className="flex justify-start items-center font-quicksand w-full font-semibold px-10">
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex w-full gap-6 justify-center">
            <Link
              page="Home"
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
            <Link
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div className="w-full flex justify-end">
            <button
              className="rounded-full bg-dark-grey p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          </div>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed top-0 right-0 h-screen bg-black w-[300px] shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end py-7 px-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col place-items-center gap-4 text-2xl ">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={false}
                isMenuToggled={true}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={false}
                isMenuToggled={true}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={false}
                isMenuToggled={true}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={false}
                isMenuToggled={true}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isDesktop={false}
                isMenuToggled={true}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
