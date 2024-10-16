import React from "react";
import Scene from "./Scene";

const heroSection = () => {
  return (
    <section className="hero-section relative">
      <header className="fixed top-0 w-full">
        <div className="header--container container flex justify-between items-center py-[2rem]">
          <div className="header--left">
            <a href="#">
              <h4 className="text-[3rem] yellow-text font-bold tracking-[1px]">
                Wasif Raza
              </h4>
            </a>
          </div>
          <div className="header--center">
            <ul className="flex gap-[5rem] items-center ">
              <li className="white-text text-[1.25rem] nav-link-list-item">
                <a href="#">Home</a>
              </li>
              <li className="white-text text-[1.25rem] nav-link-list-item">
                <a href="#">Portfolio</a>
              </li>
              <li className="white-text text-[1.25rem] nav-link-list-item">
                <a href="#">About</a>
              </li>
              <li className="white-text text-[1.25rem] nav-link-list-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header--right">
            <div className="header--right--links flex items-center gap-[1rem]">
              <div className="header--right--link cursor-pointer p-[0.5rem] yellow-bg rounded-[0.25rem]">
                <img
                  className="w-[1.5rem]"
                  src="./assets/icons/facebook.svg"
                  alt="Facebook"
                />
              </div>
              <div className="header--right--link cursor-pointer p-[0.5rem] yellow-bg rounded-[0.25rem]">
                <img
                  className="w-[1.5rem]"
                  src="./assets/icons/whatsapp.svg"
                  alt="Whatsapp"
                />
              </div>
              <div className="header--right--link cursor-pointer p-[0.5rem] yellow-bg rounded-[0.25rem]">
                <img
                  className="w-[1.5rem]"
                  src="./assets/icons/linkedin.svg"
                  alt="Linkedin"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hero--main">
        <div className="hero--main--container container flex items-center justify-between h-screen">
          <div className="hero--main--flex--left  max-w-[45%]">
            <h1 className="text-[5rem] white-text font-bold tracking-[3px]">
              Wasif Raza
            </h1>
            <p className="montserrat-family yellow-text text-[1.875rem] font-medium mb-[1.5rem]">
              Frontend Developer
            </p>
            <p className="font-regular text-[1.125rem] tracking-[1px] white-text leading-[1.7]">
              Hello! I'm Wasif Raza. A frontend developer with 2+ years
              experience skilled in crafting visually appealing websites.
              Committed to excellence, I stay updated on emerging technologies
              for seamless integration, resulting in polished and responsive
              websites.
            </p>
            <div className="buttons mt-[3.75rem] flex flex-row items-center gap-[2.8125rem]">
              <button className="btn-filled">Hire Me</button>
              <button className="btn-outlined">Download CV</button>
            </div>
          </div>
          <div className="hero--main--flex--right w-full ">
            <div className="hero--main--flex--right--container rounded-[4rem]  w-full h-[25.8rem]">
              <Scene />
            </div>
          </div>

          <div className="swipe_below_text gap-[0.3125rem] flex flex-col items-center absolute text-[1.25rem] tracking-[2px] bottom-[2.125rem] left-1/2 -translate-x-1/2">
            <span className="white-text">SWIPE BELOW</span>
            <img
              className="w-[2rem] h-[1.875rem] swipe-below-ic"
              src="./assets/icons/double_arrow.svg"
              alt="Double Arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroSection;
