import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Navbar = () => {

  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      }

    });
    navTween.fromTo("nav", {backgroundColor: "transparent"},{
      backgroundColor: '#a1201a',
      backgroundFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut",
    });
  })

  return (
    <nav>
      <div>
      <a href="#hero" className ="flex items-center gap-2">
        <img src = "/images/Red.jpg" alt="logo" />
        <p>Precise</p>
      </a>
      <ul>
        {navLinks.map((link) => (
            <div>
          <li key={link.id}>
            <a href={`#${link.id}`} > {link.title}</a>
          </li>
            </div>
        ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar