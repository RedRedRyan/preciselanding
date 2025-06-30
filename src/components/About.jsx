import React from 'react'
import {useGSAP} from "@gsap/react";
import  gsap  from 'gsap';
import { SplitText } from "gsap/all";
import CountUp from "../blueprint/CountUp.jsx";
import RotatingText from "../blueprint/RotatingText.jsx";
import CircularGallery from "../blueprint/CircularGallery.jsx";

const About = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create('#about h2',{
            type: 'words'
        })
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        })
            scrollTimeline
                .from(titleSplit.words, {
                    opacity: 0,
                    duration: 1,
                    yPercent: 100,
                    ease: 'expo.out',
                    stagger: 0.02,
                })
                .from('.top-grid div, .bottom-grid div', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power1.inOut',
                    stagger: 0.04,
                },'-=0.5')

    })
  return (
    <div id="about">
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className ='badge'>Precise
                        <RotatingText
                        texts={['Structures', 'Construction', 'Buildings', 'Engineering']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-black text-white text-lg sm:text-xl md:text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2500}
                    />
                    </p>
                    <h2>
                        Embracing Technology Solutions <span className='text-white'></span>
                        for any Building Project
                    </h2>
                </div>
                
                <div className='sub-content'>
                    <p>
                        Provide comprehensive

                        design and engineering

                        solutions and ensuring

                        excellence to efficiently

                        deliver high quality service

                        and value to our clients
                    </p> 
                    <div>
                    <p className='md:text-3xl text-xl font-bold'>
                        <span>4.5</span>/5
                    </p>
                    <p className='text-sm text-white-100'>
                        <CountUp
                            from={0}
                            to={253}
                            separator=","
                            direction="up"
                            duration={2}
                            className="count-up-text"
                        /> customers
                    </p> 
                </div> 
                </div>
            </div>
        </div>
        <div className='top-grid'>
            <div className='md:col-span-3'>
            <div className='clear'/>
            <img src = '/images/gazebo.jpg' alt='grid-img-1'/>
            </div>

            <div className='md:col-span-6'>
            <div className='clear'/>
            <img src = '/images/cottage.jpg' alt='grid-img-2'/>
            </div>

            <div className='md:col-span-3'>
            <div className='clear'/>
            <img src = '/images/orangeexcavator.jpg' alt='grid-img-5'/>
            </div>

        </div>



        <div className='bottom-grid'>
            <div className='md:col-span-8'>
            <div className='noisy'/>
            <img src = '/images/orangemen.jpg' alt='grid-img-3'/>
            </div>

            <div className='md:col-span-4'>
            <div className='clear'/>
            <img src = '/images/bungalow.jpg' alt='grid-img-4'/>
            </div>

        </div>
        <div className='gallery'>

            <div className='clear'>
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
                </div>
            </div>
        </div>
        </div>
  )
}

export default About