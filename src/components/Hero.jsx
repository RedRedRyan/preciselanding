import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { SplitText } from "gsap/all";
import {useMediaQuery} from "react-responsive";
import { useRef } from 'react';

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.05,
      delay: 1,
    });

    // Leaf animations
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to('.right-leaf', {y: 200}, 0)
    .to('.left-leaf', {y: -200}, 0);

    // Video animation timeline
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Create a timeline for video animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    })


  }, []);

  return (
    <> 
      <section id="hero" className="noisy">
          <h1 className="title">PRECISE</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="space-y-20 hidden md:block">
              <p>Civil Engineering limited</p>
              <p className="subtitle">
                Residential and <br />  commercial projects
              </p>
            </div>

            <div className="view-projects">
              <p className="subtitle">Registered in Kenya. With experience of over Ten years
                in engineering practice, considerable
                experience in the design, and construction supervision of wide range
                of projects</p>
              <a href="#projects">View projects</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
