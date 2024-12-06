import { TiLocationArrow } from "react-icons/ti";
import Button from "./common/Button";

const HeroHeadingContainer = () => {
  return (
    <div className="absolute left-0 top-0 z-40 size-full">
      <div className="mt-24 px-5 sm:px-10">
        <h1 className="special-font hero-heading text-blue-100">
          redefi<b>n</b>e
        </h1>

        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
          Enter the Metagame Layer <br /> Unleash the Play Economy
        </p>

        <Button
          id="watch-trailer"
          title="Watch trailer"
          leftIcon={<TiLocationArrow />}
          containerClass="bg-yellow-300 flex-center gap-1"
        />
      </div>
    </div>
  );
};

export default HeroHeadingContainer;
