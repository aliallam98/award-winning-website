// eslint-disable-next-line react/prop-types
const HeroBottomRightHeading = ({isWhite}) => {
  if (isWhite)
    return (
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-50 text-blue-100">
        G<b>A</b>MING
      </h1>
    );
  return (
    <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
      G<b>A</b>MING
    </h1>
  );
};

export default HeroBottomRightHeading;
