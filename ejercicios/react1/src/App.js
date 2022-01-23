import {useState} from 'react'
import './App.css';

function App() { const [counter, setCounter] = useState(0);
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <ListarCursos course={courses} />
      {/* {courses.map((course)=>{
        return (
          <div key={course.id}>
        <h1>{course.name}</h1>
        {course.parts.map((part)=>{
          return (<div key={part.id}>
          <p>{part.name}: {part.exercises} </p>
          </div>
          )
        })}
       </div>
        
        )
      })} */}
    </div>
  );
};
const ListarCursos = ({ course }) => {
  
  return course.map((course) => {
    let total = 0;
    return (
      <div key={course.id}>
        <h1>{course.name}</h1>
        {course.parts.map((part) => {
          total = total + part.exercises;
          return (
            <div key={part.id}>
              <p>
                {part.name}: {part.exercises}
              </p>
            </div>
          );
        })}
        <p>
          <strong>total of exercises:  {total}</strong>
        </p>
      </div>
    );
  });
}

export default App;
