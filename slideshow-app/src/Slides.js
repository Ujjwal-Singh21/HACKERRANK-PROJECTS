import React, { useState } from 'react'

function Slides ({ slides }) {

  const [count, setCount] = useState(0)
  const allSlides = slides

  const restart = () => {
    setCount(0)
  }

  const next = () => {
    setCount(count + 1)
  }

  const prev = () => {
    setCount(count - 1)
  }

  // function to display one slide at a time
  //----------------------------------------
  const getContent = () => {

    let data = allSlides[count]

    return (
      <div className='card-text-center'>
        <h1> {data.slideNo} </h1>
        <h2> {data.title} </h2>
        <p> {data.text} </p>
      </div>
    )
  }

  //JSX 
  //---
  return (
    
    <div className='button-css'>

      <button onClick={restart} disabled={count === 0}> Restart </button>
      <button onClick={prev} disabled={count === 0}> Prev </button>
      <button onClick={next} disabled={(count === allSlides.length - 1)}> Next </button>

      {getContent()}
    </div>
  )
}

export default Slides
