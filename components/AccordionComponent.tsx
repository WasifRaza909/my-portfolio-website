"use client";

import React, { useState } from "react";
import { ReactSVG } from "react-svg";
const AccordionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion rounded-[0.5rem] transition-all  overflow-hidden border-2 ${open ? "transparent-bg yellow-border" : "yellow-bg border-transparent"}`}>
      <div
        className="heading-block flex items-center justify-between cursor-pointer px-[1.125rem] py-[1.06rem]"
        onClick={() => setOpen(!open)}
      >
        <p className={`font-semibold text-[1.25rem] transition-all  mr-[0.25rem] ${open ? "yellow-text" : "dark-text"}`}>
          AccordionComponent Heading
        </p>
        <span
          className={`${open ? "rotate-180" : ""} transition-all ${open ? 'arrow-icon-yellow' : 'arrow-icon' }`}
        >
          <ReactSVG src="./assets/icons/down-arrow.svg" />
        </span>
      </div>
      <div
        className={`description-block transition-all duration-300  ease px-[1.125rem] ${
          open ? "max-h-[2000px] pb-[1.06rem]" : "max-h-0 pb-0"
        }`}
      >
        <p className={`font-medium text-[1.125rem] transition-all  ${open ? "yellow-text" : "dark-text"} leading-snug`}>
          AccordionComponent description AccordionComponent description
          AccordionComponent description AccordionComponent description
        </p>
      </div>
    </div>
  );
};

export default AccordionComponent;
