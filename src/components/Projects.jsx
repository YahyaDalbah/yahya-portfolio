import React, { useState } from "react";
import Project from "./Project";
import calc from "../images/calc.png";
import gpt3 from "../images/gpt3.png";
import quiz from "../images/quiz.png";
import pos from "../images/pos.png";

export default function Projects() {
  const [projects, setprojects] = useState([
    {
      img: calc,
      title: "Calculater",
      desc: "A simple calculator using ReactJS",
      hidden: true,
      url: "https://github.com/YahyaDalbah/calculator-with-react",
    },
    {
      img: gpt3,
      title: "GPT-3 webpage",
      desc: "Turning figma design into a responsive and fully functional website using ReactJS, perfectly placed media queries, modern and good-looking web page",
      hidden: true,
      url: "https://github.com/YahyaDalbah/modern-ui-ux-gpt-3-with-react",
    },
    {
      img: quiz,
      title: "Quiz app",
      desc: "a 5-questions quiz built with react, When you start the quiz, it provides you with 5 random questions. For each question you answer correctly, you earn a score of 1. Press 'Check Answers' to view your results, and press 'Play Again' to restart the quiz with another set of 5 random questions.",
      hidden: true,
      url: "https://github.com/YahyaDalbah/quiz-app-with-react",
    },
    {
      img: pos,
      title: "Point-of-sale system",
      desc: (
        <>
          A point-of-sale system designed to efficiently manage carts and
          products for businesses and markets. The system emphasizes delivering
          a user-friendly interface to enhance the sales experience.
          <br />
          Workers have the capability to add, delete, and update products,
          categories, and their respective measurement types. Additionally, the
          system enables the management of customer carts by allowing users to
          add or remove products. Workers can also add or update carts and
          facilitate the checkout process when customers pay for their orders.
          <br />
          P.S: This project lacks proper design and is not responsive, as it was
          meant to be a coding project only
        </>
      ),
      hidden: true,
      url: "https://github.com/YahyaDalbah/POS-system",
    },
  ]);
  function hide(index) {
    let newarr = projects.map((project, i) => {
      if (index == i) {
        return { ...project, hidden: !project.hidden };
      } else {
        return project;
      }
    });
    setprojects(newarr);
  }
  let displayedProjects = projects.map((project, i) => {
    return (
      <Project
        key={i}
        id={i}
        image={project.img}
        title={project.title}
        desc={project.desc}
        hidden={project.hidden}
        hide={hide}
        url={project.url}
      />
    );
  });
  return (
    <div id="projects">
      <h1 className="text-center mt-40 text-4xl font-bold text-gray-700 ">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-14">
        {displayedProjects}
      </div>
    </div>
  );
}
