import React from "react";
import AccordionComponent from "./AccordionComponent";

const FaqSection = () => {
  return (
    <section className="faq_section_wrapper sec-padded container items-center flex flex-col">
      <h1 className="sec-heading">Frequently Asked Questions</h1>
      <div className="accordions-container w-full flex flex-row flex-wrap  justify-between">
        <div className="accordion-left  max-w-[46%] gap-y-[2.5rem] flex flex-col">
          <div className="accordtion">
            <AccordionComponent />
          </div>
          <div className="accordtion ">
            <AccordionComponent />
          </div>
          <div className="accordtion ">
            <AccordionComponent />
          </div>
          <div className="accordtion ">
            <AccordionComponent />
          </div>
        </div>
        <div className="accordion-right max-w-[46%] gap-y-[2.5rem]  flex flex-col">
          <div className="accordtion">
            <AccordionComponent />
          </div>
          <div className="accordtion">
            <AccordionComponent />
          </div>
          <div className="accordtion">
            <AccordionComponent />
          </div>
          <div className="accordtion">
            <AccordionComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
