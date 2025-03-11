import promote from "../../assets/images/promote.svg";
import GradientButton from "../GradientButton";

const Promotion = () => {
  return (
    <div className="w-full mt-[20px] md:mb-[170px] mb-10 md:px-[100px] px-5 flex md:flex-row flex-col items-center justify-between md:gap-[100px] gap-14">
      <img src={promote} alt="promote" className="w-[120%]" />
      <div className="w-full flex flex-col gap-[30px]">
        <span className="text-primary font-bold text-[42px] max-w-[600px] leading-[60px] md:text-left text-center">
          Increase Business on Social Media Reach
        </span>
        <p className="text-secondary text-[21px] max-w-[436px] leading-[42px] md:text-left text-center">
          Using our network of industry influencers, we help promote your content
        </p>
        <div className="w-full md:text-left text-center">

          <GradientButton text="Get Started" className="mt-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
