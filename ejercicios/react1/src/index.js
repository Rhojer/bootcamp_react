import React from 'react'
import ReactDOM from 'react-dom'
const Header = ({course}) => <h1>{course}</h1>

const Content = ({part}) =>{
 
   return <p>{part.name} {part.exercises}</p>
}

const Total = (props) =>{
  console.log (props.total[0])
  let resultado = 0

  resultado = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
  
  return <p>Number of exercises {resultado}</p>
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

   return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]} />
      <Content part={course.parts[2]} />
       <Total total={course.parts} />
  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))