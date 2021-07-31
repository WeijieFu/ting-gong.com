import React, { useState } from "react"
import WorkColumn from "../components/Works/WorkColumn"
import "../styles/works.css"
const Works = () => {
  const [view, setView] = useState("horizontal")
  const handleViewToggle = () => {
    setView(view === "horizontal" ? "vertical" : "horizontal")
  }
  return (
    <div className="works">
      <div className="works__wrapper">
        <div
          className={
            view === "horizontal"
              ? "works__toggle"
              : "works__toggle works__toggle--vertical"
          }
          onClick={handleViewToggle}
        >
          <svg
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41541 6.50708L19.9868 6.50708"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9869 11.5071L19.9869 6.50708L14.9869 1.50708"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="works__row">
          <WorkColumn
            year="2021"
            projects={[
              {
                title: "awow",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_01.png",
                location: "Amsterdam, NL",
              },
            ]}
            view={view}
          />
          <WorkColumn
            year="2020"
            projects={[
              {
                title: "Ready-Not-Ready-To-Wear No1",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_02.png",
                location: "Amsterdam, NL",
              },
              {
                title: "Ready-Not-Ready-To-Wear No2",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_03.png",
                location: "Amsterdam, NL",
              },
            ]}
            view={view}
          />
          <WorkColumn
            year="2019"
            projects={[
              {
                title: "GAKA",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_04.png",
                location: "Amsterdam, NL",
              },
            ]}
            view={view}
          />
          <WorkColumn
            year="2018"
            projects={[
              {
                title: "Woman in the Dune",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_05.png",
                location: "Amsterdam, NL",
              },
            ]}
            view={view}
          />
          <WorkColumn
            year="2017"
            projects={[
              {
                title: "Trans Moment",
                description:
                  "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora sed quam nesciunt esse dignissimos ducimus accusantium ipsam rerum doloremque?",
                src: "/images/home_06.png",
                location: "Amsterdam, NL",
              },
            ]}
            view={view}
          />
        </div>
      </div>
    </div>
  )
}

export default Works
