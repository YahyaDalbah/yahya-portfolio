import React from 'react'

export default function Project({image, title, desc,id, hidden, hide, url}) {
    
    let styles = {
        height: hidden ? "0" : "13rem",
        transition: "height 0.5s ease-out",
        visibility: hidden ? "hidden" : "visible",
    }
    let parentstyle = {
      height: hidden ? "170px" : "90%",
      transition: "height 0.5s ease-out",
    }
    console.log(hidden)
  return (
    <div className='flex flex-col items-center rounded-md m-10 xl:m-8 2xl:m-10 border overflow-hidden shadow-lg' style={parentstyle}>
        <img className='flex-1' src={image} alt="" onClick={()=>hide(id)} />
        <div style={styles} className="px-2">
            <h1 className='text-center font-bold pt-5 mb-5 md:text-xl'>{title}</h1>
            <p className='text-center text-gray-500 text-sm md:text-base max-w-xs xl:text-sm'>{desc}</p> 
            <a className='text-center block mt-3 link' href={`https://github.com/YahyaDalbah/${url}`} target="_blank">check it on github: </a>
        </div>
    </div>
  )
}
