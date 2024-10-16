import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <div className="portfolio_section_wrapper sec-padded pt-[1.25rem] container items-center flex flex-col">
      <h1 className="sec-heading">Portfolio</h1>

      <div className="portfolio-tabs flex gap-[1.875rem] mb-[5rem]">
        <div className="portfolio-tab active"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
      </div>
      <div className="portfolio-cards flex flex-wrap max-w-[80.9rem] gap-[2.5rem] items-center justify-center">
        <div className="card max-w-[31.2%] flex_0_0_[31.2%]">

        <PortfolioCard />
        </div>
        <div className="card max-w-[31.2%] flex_0_0_[31.2%]">

        <PortfolioCard />
        </div>
        <div className="card max-w-[31.2%] flex_0_0_[31.2%]">

        <PortfolioCard />
        </div>
        <div className="card max-w-[31.2%] flex_0_0_[31.2%]">

        <PortfolioCard />
        </div>

      </div>

      <button className="btn-filled mt-[3.75rem]">Load More</button>

    </div>
  );
};

export default PortfolioSection;
