import logo from "../../assets/images/logo.svg";
import herobg from "../../assets/images/hero.svg";
import GradientButton from "../GradientButton";

const Header = () => {
  const navItems = ["Features", "Pricing", "About", "Contact Us"];
  return (
    <div
      className="w-full md:h-screen md:py-[40px] pt-5 pb-16 md:px-[135px] px-5 flex flex-col bg-bottom bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})` }}>
      <div className="w-full flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="md:flex hidden items-center gap-[52px]">
          {navItems.map((item, index) => (
            <a href="#" key={index} className="">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-[rgba(255,255,255,0.1)] rounded-full w-[140px] h-[55px] cursor-pointer border border-btn-border text-white font-medium">
          Free Trial
        </button>
      </div>
      <div className="flex items-center justify-center gap-8 mt-[100px]">
        <div className="w-[60px] h-[1px] bg-hero-text"></div>
        <span className="font-medium text-[36px] text-hero-text text-center">Level Up Your Business with</span>
        <div className="w-[60px] h-[1px] bg-hero-text"></div>
      </div>
      <span className="text-[90px] font-semibold text-white text-center mt-[30px]">
        Digital <span className="custom-line">Marketing</span>
      </span>
      <p className="text-center text-[22px] text-hero-text mt-[30px] max-w-[686px] mx-auto">
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
        one-to-one customer
      </p>
      <GradientButton text="Get Started" className="mt-[70px] mx-auto" />
    </div>
  );
};

export default Header;
