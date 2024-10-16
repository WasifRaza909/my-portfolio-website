import React from "react";

const PortfolioCard = () => {
  return (
    <div className="border-[0.187rem] yellow-border rounded-[0.75rem] ">
      <div className="portfolio-card-img-container rounded-t-[0.75rem] overflow-hidden">
        <img src="./assets/imgs/portfolio-card.png" alt="Portfolio Card" />
      </div>

      <div className="portfolio-card flex flex-col px-[1.125rem] pb-[1.5rem] pt-[1rem] items-center">
        <h4 className="font-medium text-[1.875rem] tracking-[1px] yellow-text">
          Frontend Dev
        </h4>
        <p className="white-text text-[1.125rem] tracking-[1px] font-medium text-center mt-[0.2rem]">
          Hello! I'm Wasif Raza. A frontend developer with 2+ years experience
          skilled in crafting visually.Hello! I'm Wasif Raza.
        </p>
        <div className="card-tags mt-[1.125rem]">
          <div className="card-tag rounded-[0.5rem] dark-text yellow-bg px-[1.125rem] py-[0.43rem] font-normal text-[1.125rem] uppercase">
            HTML
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
