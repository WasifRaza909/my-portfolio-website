import React from 'react'

const heroSection = () => {
  return (
    <section>
        <header>
            <div className="header--container container flex justify-between items-center py-[2rem]">

            <div className="header--left">
                <a href="#">
                    <h4 className='text-[1.875rem] white-text font-bold tracking-[1px]'>Wasif Raza</h4>
                </a>
            </div>
            <div className="header--center">
                <ul className='flex gap-[5rem] items-center yellow-text'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="header--right">
                <div className="header--right--links flex items-center gap-[1rem]">
                    <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                            <img src="./assets/icons/facebook.svg" alt="Facebook" />
                    </div>
                    <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                        <img src="./assets/icons/whatsapp.svg" alt="Whatsapp" />
                    </div>
                    <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                        <img src="./assets/icons/linkedin.svg" alt="Linkedin" />
                    </div>
                </div>
            </div>
            </div>
        </header>
    </section>
  )
}

export default heroSection
