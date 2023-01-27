import React, { useState } from 'react'
import Project from './Project'
import calc from '../images/calc.png'
import gpt3 from '../images/gpt3.png'
import quiz from '../images/quiz.png'
import tenzies from '../images/tenzies.png'

export default function Projects() {
    const [projects,setprojects] = useState([
        {
            img:calc,
            title:"Calculater",
            desc:"A simple calculator using ReactJS",
            hidden: true,
            url: "calculator-with-react"
        },
        {
            img:gpt3,
            title:"GPT-3 webpage",
            desc:"Modern UI webpage built using ReactJS •	perfectly placed media queries •	modern and good-looking web page",
            hidden: true,
            url: "modern-ui-ux-gpt-3-with-react"
        },
        {
            img:quiz,
            title:"Quiz app",
            desc:"simple quiz app using Trivia API from OPENTDB to get the questions and implementing it to the project, I learned: how to deal with an API",
            hidden: true,
            url: "quiz-app-with-react"
        },
        {
            img:tenzies,
            title:"Tenzies game",
            desc:"Edited an existing code to make a tenzies game, I learned: how to edit an existing code, adding new features to it and make it more",
            hidden: true,
            url: "tenzies-game-w-react"
        },
    ])
    function hide(index){
        let newarr = projects.map((project,i) => {
            if(index == i){
                return {...project, hidden : !project.hidden}
            }else{
                return project
            }
        })
        setprojects(newarr)
        
    }
    let displayedProjects = projects.map((project,i) => {
        return <Project key={i} id={i} image={project.img} title={project.title} desc={project.desc} hidden={project.hidden} hide={hide} url={project.url} />
    })
  return (
    <div>
        <h1 className='text-center mt-40 text-4xl font-bold text-gray-700 '>Here are some projects I made</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10'>
            {displayedProjects}
        </div>
    </div>
  )
}
