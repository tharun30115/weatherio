import c1 from "../../assets/images/c1.svg";
import c2 from "../../assets/images/c2.svg";
import c3 from "../../assets/images/c3.svg";
import c4 from "../../assets/images/c4.svg";
import c5 from "../../assets/images/c5.svg";

const Companies = () => {
  const companies = [c1, c2, c3, c4, c5];
  return (
    <div className="w-full md:h-[140px] bg-light-box flex md:flex-nowrap flex-wrap items-center md:justify-between justify-center md:px-[230px] px-5 md:gap-0 gap-14 md:py-0 py-10">
      {companies.map((company, index) => (
        <img src={company} alt="company" key={index} />
      ))}
    </div>
  );
};

export default Companies;
