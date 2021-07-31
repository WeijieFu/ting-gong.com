import React, { useEffect, useRef, useState } from "react"
import GSAP from "gsap"
import "../../styles/works.css"
const WorkColumn = ({ year, projects, view }) => {
  const col = useRef()
  const [count, setCount] = useState(0)
  useEffect(() => {
    const project = col.current.querySelectorAll(".works__project")
    const years = col.current.querySelectorAll(".works__year")
    const titleWrapper = col.current.querySelectorAll(
      ".works__project__title__wrapper"
    )
    const locationWrapper = col.current.querySelectorAll(
      ".works__project__location__wrapper"
    )
    const title = col.current.querySelectorAll(".works__project__title")

    project.forEach((el, index) => {
      GSAP.set(el, {
        left: `calc(${(2021 - year) * 15}vw + 2rem)`,
        top: `calc(${index * 30}vh + 8rem)`,
      })
    })
    years.forEach((el, index) => {
      GSAP.set(el, {
        left: `calc(${(2021 - year) * 15}vw + 2rem)`,
        top: `5rem`,
      })
    })
    titleWrapper.forEach((el, index) => {
      const elWidth = el.getBoundingClientRect().width

      GSAP.set(el, {
        left: `calc(100vw - ${elWidth}px - 2rem)`,
        top: `calc(100vh - 6vh - 1rem)`,
      })
    })
    GSAP.set(title, { y: "-6vh" })

    locationWrapper.forEach((el, index) => {
      GSAP.set(el, {
        left: `2rem`,
        top: `calc(100vh - 3vh - 1rem)`,
      })
    })

    const timeoutID = setTimeout(() => {
      GSAP.fromTo(
        ".works__project",
        {
          opacity: 0,
        },
        {
          duration: 1.5,
          stagger: 0.02,
          opacity: 1,
        }
      )
    }, 500)
    return () => {
      clearTimeout(timeoutID)
    }
  }, [year])
  useEffect(() => {
    setCount(count + 1)
    const years = col.current.querySelectorAll(".works__year")
    const titleWrapper = document.querySelectorAll(
      ".works__project__title__wrapper"
    )
    const project = col.current.querySelectorAll(".works__project")
    const title = col.current.querySelectorAll(".works__project__title")

    if (view === "vertical") {
      /**
       * Project List
       */
      years.forEach((el, index) => {
        GSAP.to(el, {
          opacity: 0,
        })
      })
      titleWrapper.forEach((el, index) => {
        GSAP.set(el, {
          left: "2rem",
          textAlign: "start",
          top: `calc(${index * 8}vh + 6rem)`,
        })
      })
      GSAP.fromTo(
        title,
        { y: "6vh" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: 1,
        }
      )
      /**
       * Preview Images
       */
      GSAP.to(".works__project", {
        top: "calc(50vh - 2rem)",
        height: "50vh",
        width: "25vw",
        left: "calc(100vw - 25vw - 2rem)",
        duration: 1.2,
        ease: "power2.inOut",
      })
      GSAP.to(".works__project__image", {
        top: "calc(50vh - 2rem)",
        height: "50vh",
        width: "25vw",
        left: "calc(100vw - 25vw - 2rem)",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          const project = document.querySelectorAll(".works__project")
          project.forEach((el, index) => {
            if (index < project.length - 1) {
              GSAP.set(el, { height: 0 })
            }
          })
        },
      })
    }
    if (view === "horizontal" && count > 0) {
      years.forEach((el, index) => {
        GSAP.to(el, {
          opacity: 1,
        })
      })
      project.forEach((el, index) => {
        GSAP.to(el, {
          left: `calc(${(2021 - year) * 15}vw + 2rem)`,
          top: `calc(${index * 30}vh + 8rem)`,
          duration: 1.5,
          ease: "power2.inOut",
        })
      })
      GSAP.fromTo(
        title,
        { y: 0 },
        {
          opacity: 1,
          y: "-6vh",
          duration: 1,
          ease: "power4.out",
          onComplete: () => {
            titleWrapper.forEach((el, index) => {
              const elWidth = el.getBoundingClientRect().width

              GSAP.set(el, {
                left: `calc(100vw - ${elWidth}px - 2rem)`,
                top: `calc(100vh - 6vh - 1rem)`,
              })
            })
          },
        }
      )

      GSAP.to(".works__project", {
        height: "26vh",
        width: "12vw",
        duration: 1.2,
        ease: "power2.inOut",
      })
      GSAP.to(".works__project__image", {
        height: "26vh",
        width: "12vw",
        duration: 1.2,
        ease: "power2.inOut",
      })
    }
  }, [view, year])
  const handleMouseEnter = (e) => {
    const location = e.target.parentElement.parentElement.querySelector(
      ".works__project__location"
    )

    if (view === "horizontal") {
      const title = e.target.parentElement.parentElement.querySelector(
        ".works__project__title"
      )

      GSAP.fromTo(
        title,
        { y: "6vh" },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )
      GSAP.fromTo(
        location,
        { y: "3vh" },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )
    }
    if (view == "vertical") {
      const project =
        e.target.parentElement.parentElement.querySelector(".works__project")

      const title = e.target.parentElement
      GSAP.fromTo(title, { x: 0 }, { x: 20, duration: 0.5 })
      GSAP.fromTo(
        location,
        { y: "3vh" },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )
      GSAP.to(".works__project", {
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
      GSAP.to(project, {
        height: "50vh",
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.3,
      })
    }
  }
  const handleMouseLeave = (e) => {
    const location = e.target.parentElement.parentElement.querySelector(
      ".works__project__location"
    )

    if (view === "horizontal") {
      const title = e.target.parentElement.parentElement.querySelector(
        ".works__project__title"
      )

      GSAP.fromTo(
        title,
        { y: 0 },
        { opacity: 1, y: "-6vh", duration: 1, ease: "power4.out" }
      )
      GSAP.fromTo(
        location,
        { y: 0 },
        { opacity: 1, y: "-3vh", duration: 1, ease: "power4.out" }
      )
    }

    if (view == "vertical") {
      const title = e.target.parentElement
      GSAP.fromTo(title, { x: 20 }, { x: 0, duration: 0.5 })
      GSAP.fromTo(
        location,
        { y: 0 },
        { opacity: 1, y: "-3vh", duration: 1, ease: "power4.out" }
      )
    }
  }

  return (
    <div className="works__col" ref={col}>
      <div className="works__year">{year}</div>
      <div className="works__projects">
        {projects.map((project, index) => {
          return (
            <div key={project.title}>
              <div
                className="works__project"
                onMouseEnter={(e) => {
                  if (view === "horizontal") {
                    handleMouseEnter(e)
                  }
                }}
                onMouseLeave={(e) => {
                  if (view === "horizontal") {
                    handleMouseLeave(e)
                  }
                }}
              >
                <img
                  className="works__project__image"
                  src={project.src}
                  alt={project.title}
                />
              </div>
              <div className="works__project__location__wrapper">
                <div className="works__project__location">
                  {project.location}
                </div>
              </div>

              <div className="works__project__title__wrapper">
                <div
                  className="works__project__title"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {project.title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkColumn
