import React from 'react'
import Scene from './Scene'

const heroSection = () => {
    return (
        <section className="border-b-[1px] border-[var(--yellow-color)]">
            <header className='fixed top-0 w-full'>
                <div className="header--container container flex justify-between items-center py-[2rem]">

                    <div className="header--left">
                        <a href="#">
                            <h4 className='text-[1.875rem] white-text font-bold tracking-[1px]'>Wasif Raza</h4>
                        </a>
                    </div>
                    <div className="header--center">
                        <ul className='flex gap-[5rem] items-center '>
                            <li className='yellow-text nav-link-list-item'>
                                <a href="#">Home</a>
                            </li>
                            <li className='yellow-text nav-link-list-item'>
                                <a href="#">Portfolio</a>
                            </li>
                            <li className='yellow-text nav-link-list-item'>
                                <a href="#">About</a>
                            </li>
                            <li className='yellow-text nav-link-list-item'>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header--right">
                        <div className="header--right--links flex items-center gap-[1rem]">
                            <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                                <img className="w-[1.5rem]" src="./assets/icons/facebook.svg" alt="Facebook" />
                            </div>
                            <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                                <img className="w-[1.5rem]" src="./assets/icons/whatsapp.svg" alt="Whatsapp" />
                            </div>
                            <div className="header--right--link p-[0.5rem] white-bg rounded-[0.25rem]">
                                <img className="w-[1.5rem]" src="./assets/icons/linkedin.svg" alt="Linkedin" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="hero--main">
                <div className="hero--main--container container flex items-center justify-between h-screen pt-[5rem]">
                    <div className="hero--main--flex--left  max-w-[45%]">
                        <h1 className='text-[5rem] white-text font-bold tracking-[3px]'>Wasif Raza</h1>
                        <p className='montserrat-family yellow-text text-[1.875rem] font-medium mb-[1.5rem]'>Frontend Developer</p>
                        <p className='font-regular text-[1.125rem] tracking-[1px] white-text leading-[1.7]'>Hello! I'm Wasif Raza. A frontend developer with 2+ years experience skilled in crafting visually appealing websites. Committed to excellence, I stay updated on emerging technologies for seamless integration, resulting in polished and responsive websites.</p>
                        <div className="buttons mt-[4.875rem] flex flex-row items-center gap-[2.8125rem]">

                            <button className="btn-filled">
                                Hire Me
                            </button>
                            <button className="btn-outlined">
                                Download CV
                            </button>
                        </div>
                    </div>
                    {/* <div className="hero--main--flex--right max-w-[45%] w-full "> */}
                        {/* <div className="hero--main--flex--right--container rounded-[4rem] yellow-bg w-full h-[30.25rem]"> */}
                                <Scene/>
                        {/* </div> */}

                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default heroSection
