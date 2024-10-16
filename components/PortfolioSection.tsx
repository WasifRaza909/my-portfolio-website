import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioSection = () => {
  return (
    <div className="portfolio_section_wrapper sec-padded container items-center flex flex-col">
      <h1 className="sec-heading">Portfolio</h1>

      <div className="portfolio-tabs flex gap-[1.875rem] mb-[5rem]">
        <div className="portfolio-tab active"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
      </div>
      <div className="portfolio-cards grid grid-cols-3 max-w-[80.9rem] gap-[2.5rem]">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>

      <button className="btn-filled mt-[3.75rem]">Load More</button>

    </div>
  );
};

export default PortfolioSection;
