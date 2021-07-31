import React, { useEffect } from "react"
import GSAP from "gsap"
import "../styles/navigation.css"

const Navigation = () => {
  useEffect(() => {
    GSAP.from(".navigation__item", {
      duration: 1.5,
      y: -10,
      opacity: 0,
      ease: "power4.out",
      // stagger: 0.1,
    })
  }, [])
  return (
    <nav className="navigation">
      <div className="navigation__item navigation__current">Selected Works</div>
      <div className="navigation__item navigation__title">Ting Gong</div>
      <div className="navigation__item navigation__about">About</div>
    </nav>
  )
}

export default Navigation
