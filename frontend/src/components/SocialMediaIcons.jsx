const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center md:justify-start my-10 gap-7">
      <a
        className="flex justify-center items-center h-9 w-9 "
        href="https://www.linkedin.com/in/csluu/"
        // target will make it so that it opens in a new tab
        // need to add rel to help support older browsers with the new tab function
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          className="h-7 w-7 opacity-50 hover:opacity-100 hover:h-9 hover:w-9 hover:ease-in-out duration-150 shadow-md shadow-black "
          src="../assets/linkedin.png"
        />
      </a>
      <a
        className="flex justify-center items-center h-9 w-9 "
        href="https://github.com/Csluu"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          className="h-7 w-7 opacity-50 hover:opacity-100 hover:h-9 hover:w-9 hover:ease-in-out rounded-full duration-150 shadow-md shadow-black"
          src="../assets/github.png"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
