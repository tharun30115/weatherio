import arrowRight from "../../assets/images/arrowRight.svg";
import greenGem from "../../assets/images/greenGem.svg";

const Offer = () => {
    const topics = [
        { title: "Update content on your Website", icon: greenGem },
        { title: "Improve User Experience", icon: null },
        { title: "Request Free Website Review", icon: null },
        { title: "Improve your SEO Rankings", icon: null },
    ];
    return (
        <div className="w-full md:h-[600px] bg-light-box flex flex-col items-center justify-between md:py-[60px] py-14 md:gap-0 gap-8">
            <div className="w-full flex flex-col gap-5 items-center justify-center">
                <span className="text-primary font-bold md:text-[42px] text-[36px]">
                    How Can We Help You?
                </span>
                <p className="text-secondary text-[21px]">Let's do great work together</p>
            </div>
            <div className="w-full md:px-[150px] px-5 md:gap-0 gap-6 flex md:flex-row flex-col items-center justify-center relative">
                {topics.map((topic, index) => (
                    <div key={index} className={`flex md:flex-row flex-col md:gap-0 gap-6 items-center ${index === topics.length - 1 ? "w-fit" : "w-full"}`}>
                        <div
                            id="bullet"
                            className={`border w-[65px] h-[65px] relative border-logo bg-white rounded-full flex items-center justify-center z-10`}
                        >
                            {topic.icon && <img src={topic.icon} alt="icon" className="w-[40px]" />}
                            <div className="absolute md:block hidden bottom-[-80px] text-center text-primary font-medium text-[19px] min-w-[200px]">{topic.title}</div>
                        </div>
                        <div className="md:hidden block bottom-[-80px] text-center text-primary font-medium text-[19px] min-w-[200px]">{topic.title}</div>


                        {index < topics.length - 1 && (
                            <div className="flex-grow md:flex hidden h-[2px] border-t-2 border-dashed border-gray-400 mx-4"></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 cursor-pointer w-fit mt-[30px] mx-auto">
                <a href="#" className="text-link text-[22px] font-medium underline">
                    See More
                </a>
                <img src={arrowRight} alt="arrowRight" />
            </div>
        </div>
    );
};

export default Offer;
