import logoDark from "../../assets/images/logoDark.svg";
import facebook from "../../assets/images/facebook.svg";
import ig from "../../assets/images/ig.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  const footerRows = [
    { title: "Menu", items: ["Home", "Features", "Pricing", "Contact Us"] },
    { title: "Services", items: ["Content Strategy", "Content Development", "Content Creation", "Content Optimization"] },
    { title: "Company", items: ["Site Map", "Terms of Use", "Privacy Notice", "Cookies"] },
  ];
  return (
    <div className="w-full flex md:pt-[80px] md:pb-[40px] py-12 md:px-[135px] px-5 flex-col gap-20 items-center justify-center">
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-8 items-start justify-between">
        <div className="flex flex-col gap-6 md:items-start items-center md:w-fit w-full">
          <img src={logoDark} alt="logo" className="w-[80%]" />
          <p className="text-lg text-secondary max-w-[300px] mt-3">
            Marketing is a company that focus on developing company’s strategy for increase digital
            marketing
          </p>
          <div className="flex items-center gap-4">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={ig} alt="instagram" />
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-start md:justify-start justify-center md:gap-36 gap-10 md:mt-0 mt-6">
          {footerRows.map((row, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <span className="font-bold text-[28px] text-primary md:text-left text-center">{row.title}</span>
              <div className="flex flex-col gap-3 md:items-start items-center">
                {row.items.map((item, index) => (
                  <a href="#" className="text-secondary" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col md:gap-10 gap-3">
        <div className="w-full h-[1px] bg-footer-line"></div>
        <div className="w-full text-center text-secondary">
          Copyright Markethink. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
