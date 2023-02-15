const LineGradient = ({ width = "w-full" }) => {
  // have to do this as it doesn't work with border/horizontal rule colors
  // have to give the div a height and set a background color to it
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};

export default LineGradient;
