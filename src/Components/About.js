import React from 'react'

function About(props) {
  return (
    <div>
      <h1>{props.name}
       {props.abc}</h1>
       <img src={props.imgsrc}/>
    </div>
  )
}

export default About
