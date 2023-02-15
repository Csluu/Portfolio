import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // We are adding a pseudo-element, the ring around the dot. We use relative so it's cords are the same as the parent element and using left and top to adjust its position.
  // We are also making the dot yellow. Also, we use before so that dot takes priority in the z-index.
  //   const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
  //   before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const selectedStyles = "bg-gradient-rainblue w-4 h-4";

  return (
    <div className="flex flex-col items-center justify-between gap-6 fixed top-[50%] right-[14px] p-6">
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full bg-">
        <AnchorLink
          href="#home"
          //
          className={`${
            selectedPage === "home" ? selectedStyles : "bg-dark-grey w-3 h-3"
          } hover:scale-125 hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("home")}
        />
      </div>
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full">
        <AnchorLink
          href="#about"
          className={`${
            selectedPage === "about" ? selectedStyles : "bg-dark-grey w-3 h-3"
          } hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("about")}
        />
      </div>
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full">
        <AnchorLink
          href="#skills"
          className={`${
            selectedPage === "skills" ? selectedStyles : "bg-dark-grey w-3 h-3"
          } hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("skills")}
        />
      </div>
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full">
        <AnchorLink
          href="#projects"
          className={`${
            selectedPage === "projects"
              ? selectedStyles
              : "bg-dark-grey w-3 h-3"
          } hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("projects")}
        />
      </div>
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full">
        <AnchorLink
          href="#resume"
          className={`${
            selectedPage === "resume" ? selectedStyles : "bg-dark-grey w-3 h-3"
          } hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("resume")}
        />
      </div>
      <div className="flex justify-center place-items-center w-4 h-4 rounded-full">
        <AnchorLink
          href="#contact"
          className={`${
            selectedPage === "contact" ? selectedStyles : "bg-dark-grey w-3 h-3"
          } hover:h-4 hover:w-4 hover:ease-in-out hover:bg-gradient-rainblue hover:saturate-200 hover:brightness-110 hover:shadow-cyan-900 duration-150 rounded-full shadow shadow-black `}
          onClick={() => setSelectedPage("contact")}
        />
      </div>
    </div>
  );
};

export default DotGroup;
