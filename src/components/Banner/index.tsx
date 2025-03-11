import banner from "../../assets/images/banner.svg";
import bannerL from "../../assets/images/bannerL.svg";
import bannerR from "../../assets/images/bannerR.svg";
import logo from "../../assets/images/logo.svg";
import GradientButton from "../GradientButton";

const Banner = () => {
  return (
    <div className="w-full md:py-[80px] p-5 md:px-[135px]">
      <div
        className="w-full h-[700px] flex flex-col items-start justify-center gap-12 bg-cover bg-center relative md:py-[100px] md:px-[130px] p-5"
        style={{ backgroundImage: `url(${banner})` }}>
        <img src={bannerL} className="absolute top-0 left-0 md:block hidden" alt="bannerL" />
        <img
          src={bannerR}
          className="absolute bottom-[-24px] right-[-107px] md:block hidden"
          alt="bannerR"
        />
        <div className="text-white font-semibold text-[40px] max-w-[780px]">
          Subscribe to get information, latest news and other interesting offers about
        </div>
        <img src={logo} alt="logo" className="md:w-[22%]" />
        <div className="flex md:flex-row flex-col items-center md:gap-5 gap-8">
          <input
            type="text"
            className="bg-white rounded-full w-[370px] h-[78px] text-black px-6 z-[10] outline-none text-lg"
            placeholder="Your email"
          />
          <GradientButton text="Subscribe" className="z-[10] md:w-[60%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
