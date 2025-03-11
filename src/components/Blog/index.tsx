import { useState } from "react";
import b1 from "../../assets/images/b1.svg";
import b2 from "../../assets/images/b2.svg";
import b3 from "../../assets/images/b3.svg";
import eye from "../../assets/images/eye.svg";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("Content Writing");

  const articles = [
    {
      title: "10 Reasons to invest in SEO copywriting services",
      category: "Content Writing",
      date: "AUGUST 17, 2021",
      description: "",
      image: b1,
    },
    {
      title: "How to get hired at a top Digital Marketing",
      category: "Content Writing",
      date: "AUGUST 17, 2021",
      description: "Agency life. We’ve all seen the photos posted on social media – the cool...",
      image: b2,
    },
    {
      title: "Copywriting guidelines during the coronavirus",
      category: "Content Writing",
      date: "AUGUST 17, 2021",
      description: "Since the coronavirus hit earlier this year, it’s hard to go anywhere...",
      image: b3,
    },
  ];

  const filteredArticles = articles.filter((article) => article.category === activeTab);

  return (
    <div className="w-full flex flex-col items-start justify-between md:py-[80px] py-14 md:px-[135px] px-5">
      <div className="w-full flex md:flex-row flex-col md:items-end items-center justify-between">
        <span className="text-primary font-bold text-[42px] md:max-w-[400px] max-w-full md:text-left text-center">
          Read More Articles From Our Blog
        </span>
        <div className="flex items-center gap-10 md:mt-0 mt-10">
          <span
            className={`text-[21px] cursor-pointer border-b-2 ${activeTab === "Content Writing"
              ? "border-link text-primary "
              : "border-transparent text-secondary"
              } pb-2`}
            onClick={() => setActiveTab("Content Writing")}>
            Content Writing
          </span>
          <span
            className={`text-[21px] cursor-pointer border-b-2 ${activeTab === "Content Marketing"
              ? "border-link text-primary "
              : "border-transparent text-secondary"
              } pb-2`}
            onClick={() => setActiveTab("Content Marketing")}>
            Content Marketing
          </span>
        </div>
      </div>
      <div className="flex w-full md:flex-row flex-col items-start gap-10 mt-10">
        {filteredArticles.length > 0 && (
          <div className="w-full">
            <div className="w-full flex flex-col gap-3">
              <img
                src={filteredArticles[0].image}
                alt={filteredArticles[0].title}
                className="w-full"
              />
              <div className="flex flex-col gap-2">
                <span className="text-blog-desc text-lg">{filteredArticles[0].date}</span>
                <span className="text-primary text-[25px] font-medium">
                  {filteredArticles[0].title}
                </span>
                {filteredArticles[0].description && (
                  <p className="text-secondary text-lg">{filteredArticles[0].description}</p>
                )}
              </div>
              <button className="mt-6 w-[206px] h-[68px] rounded-full border border-link text-link font-semibold text-[20px] cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        )}

        <div className="w-full flex md:flex-row flex-col md:items-center items-start gap-10">
          {filteredArticles.slice(1).map((article, index) => (
            <div key={index} className="w-full flex flex-col gap-3">
              <img src={article.image} alt={article.title} className="w-full" />
              <div className="flex flex-col gap-2">
                <span className="text-blog-desc text-lg">{article.date}</span>
                <span className="text-primary text-[25px] font-medium">{article.title}</span>
                {article.description && (
                  <p className="text-secondary text-lg">{article.description}</p>
                )}
              </div>
              <button className="mt-6 w-[68px] h-[68px] rounded-full border border-link text-link font-semibold text-[20px] cursor-pointer flex items-center justify-center">
                <img src={eye} alt="eye" className="w-[28px] h-[28px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
