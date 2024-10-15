import React from "react";

const PortfolioSection = () => {
  return (
    <div className="portfolio_section_wrapper sec-padded container items-center flex flex-col">
      <h1 className="sec-heading">Portfolio</h1>

      <div className="portfolio-tabs flex gap-[1.875rem]">
        <div className="portfolio-tab active"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
        <div className="portfolio-tab"><span className="font-medium yellow-text text-[1rem] tracking-[0.5px]">Lorem Ipsum</span></div>
      </div>
      
    </div>
  );
};

export default PortfolioSection;
