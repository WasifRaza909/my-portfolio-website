import React from "react";

const ContactUs = () => {
  return (
    <div className="contact_section_wrapper sec-padded pt-[1.25rem] container items-center flex flex-col">
      <h1 className="sec-heading">Contact Us</h1>

      <div className="contact-us-flex">
        <div className="contact-us-flex-left">
          <h2>Hit me up!</h2>
          <p>
            Hello! I'm Wasif Raza. A frontend developer with 2+ years experience
            skilled in crafting visually appealing websites. Committed to
            excellence, I stay updated on emerging technologies for seamless
            integration, resulting in polished and responsive websites.
          </p>
          <div className="contact-us-social-links">
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
        <div className="contact-us-flex-right"></div>
      </div>
    </div>
  );
};

export default ContactUs;
