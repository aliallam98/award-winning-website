import Button from "../common/Button.jsx";
import ImageClipBox from "../common/ImageClipBox.jsx";

const ContactSection = () => {
  return (
    <section className="p-16">
      <div className="relative bg-black py-20  rounded-md">
        <div className="mt-20 lg:mt-0 relative flex flex-col justify-center items-center  gap-10 size-full ">
          <h5 className="max-lg:order-2 font-general text-blue-75">To Zentry</h5>
          <h2 className=" text-6xl text-blue-75 text-center font-zentry">
            let&apos;s build the <br /> new era of <br /> gaming together
          </h2>
          <Button title={"contact us"} containerClass={"max-lg:order-3"}/>
        </div>

        <ImageClipBox
          src={"/img/swordman.webp"}
          alt={"contact image"}
          clipClass={
            "sword-man-clip-path w-64 absolute max-lg:left-1/2 max-lg:-translate-x-1/2 -top-[30%]  lg:top-1/2 lg:-translate-y-1/2 lg:right-10 xl:right-20"
          }
        />
        <ImageClipBox
          src={"/img/contact-1.webp"}
          alt={"contact image"}
          clipClass={"contact-clip-path-1 w-60  hidden lg:block  absolute top-5 left-20"}
        />
        <ImageClipBox
          src={"/img/contact-2.webp"}
          alt={"contact image"}
          clipClass={"contact-clip-path-2 w-60 hidden lg:block  absolute left-64 bottom-0"}
        />
      </div>
    </section>
  );
};

export default ContactSection;
