import arrowRight from "../../assets/images/arrowRight.svg";
import s1 from "../../assets/images/s1.svg";
import s2 from "../../assets/images/s2.svg";
import s3 from "../../assets/images/s3.svg";
import s4 from "../../assets/images/s4.svg";

const Introduction = () => {
    const services = [
        {
            title: "Content Strategy",
            description: "All our content marketing service packages include a custom content strategy",
            image: s1
        },
        {
            title: "Content Development",
            description: "We create some content calendar for your company’s must-share content",
            image: s2
        },
        {
            title: "Content Creation",
            description: "Experienced in copywriting and marketing team begins creating content",
            image: s3
        },
        {
            title: "Content Optimization",
            description: "Your content marketing management services also include SEO",
            image: s4
        },
    ]
    return (
        <div className="w-full md:px-[135px] px-5 md:py-[100px] py-10 flex md:flex-row flex-col md:gap-0 gap-14 items-start justify-center">
            <div className="w-full flex flex-col gap-[30px]">
                <span className="text-primary font-bold text-[42px] max-w-[488px] leading-[60px] md:text-left text-center">We’re Strategic Digital
                    Marketing Agency</span>
                <p className="text-secondary text-[21px] max-w-[424px] leading-[42px] md:text-left text-center">
                    We’ve created a full-stack structure for our working workflow processe, were from the funny the century initial all made, have spare to negatives
                </p>
                <div className="flex items-center md:justify-start justify-center gap-2 cursor-pointer md:w-fit w-full md:text-left text-center">
                    <a href="#" className="text-link text-[22px] font-medium underline">See More</a>
                    <img src={arrowRight} alt="arrowRight" />
                </div>
            </div>
            <div className="w-full flex flex-col gap-[80px]">
                <div className="w-full flex md:flex-row flex-col items-start justify-between md:gap-0 gap-8">
                    {services.slice(0, 2).map((service, index) => (
                        <div key={index} className="w-full flex flex-col items-start gap-[20px]">
                            <img src={service.image} alt={service.title} className="w-[50px]" />
                            <span className="text-primary font-medium text-[24px] text-left">{service.title}</span>
                            <p className="text-secondary text-lg md:max-w-[240px] max-w-full leading-[35px] text-left">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex md:flex-row flex-col items-start justify-between md:gap-0 gap-8">
                    {services.slice(2, 4).map((service, index) => (
                        <div key={index} className="w-full flex flex-col gap-[20px] items-start">
                            <img src={service.image} alt={service.title} className="w-[50px]" />
                            <span className="text-primary font-medium text-[24px] text-left">{service.title}</span>
                            <p className="text-secondary text-lg md:max-w-[228px] max-w-full leading-[35px] text-left">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Introduction