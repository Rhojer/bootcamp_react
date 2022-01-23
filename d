[33mcommit ea49fcd7c832541b7672e03a18cc9925b315bac4[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: DEScontrol <34425397+Rhojer@users.noreply.github.com>
Date:   Sun Oct 24 23:52:58 2021 -0300

    ejercicios en parte java objetos y arrays

[1mdiff --git a/ejercicios/react1/src/index.js b/ejercicios/react1/src/index.js[m
[1mindex 7d10586..6138254 100644[m
[1m--- a/ejercicios/react1/src/index.js[m
[1m+++ b/ejercicios/react1/src/index.js[m
[36m@@ -7,31 +7,40 @@[m [mconst Content = ({part}) =>{[m
    return <p>{part.name} {part.exercises}</p>[m
 }[m
 [m
[31m-const Total = ({total}) =>{[m
[31m-  return <p>Number of exercises {total}</p>[m
[32m+[m[32mconst Total = (props) =>{[m
[32m+[m[32m  console.log (props.total[0])[m
[32m+[m[32m  let resultado = 0[m
[32m+[m
[32m+[m[32m  resultado = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises[m
[32m+[m[41m  [m
[32m+[m[32m  return <p>Number of exercises {resultado}</p>[m
 }[m
 const App = () => {[m
[31m-  const course = 'Half Stack application development'[m
[31m-  const part1 = {[m
[31m-    name: 'Fundamentals of React',[m
[31m-    exercises: 10[m
[31m-  }[m
[31m-  const part2 = {[m
[31m-    name: 'Using props to pass data',[m
[31m-    exercises: 7[m
[32m+[m[32m  const course = {[m
[32m+[m[32m    name: 'Half Stack application development',[m
[32m+[m[32m    parts: [[m
[32m+[m[32m      {[m
[32m+[m[32m        name: 'Fundamentals of React',[m
[32m+[m[32m        exercises: 10[m
[32m+[m[32m      },[m
[32m+[m[32m      {[m
[32m+[m[32m        name: 'Using props to pass data',[m
[32m+[m[32m        exercises: 7[m
[32m+[m[32m      },[m
[32m+[m[32m      {[m
[32m+[m[32m        name: 'State of a component',[m
[32m+[m[32m        exercises: 14[m
[32m+[m[32m      }[m
[32m+[m[32m    ][m
   }[m
[31m-  const part3 = {[m
[31m-    name: 'State of a component',[m
[31m-    exercises: 14[m
[31m-  }[m
[31m-  const total = part1.exercises+ part2.exercises + part3.exercises[m
[31m-  return ([m
[32m+[m
[32m+[m[32m   return ([m
     <div>[m
[31m-      <Header course={course} />[m
[31m-      <Content part={part1} />[m
[31m-      <Content part={part2} />[m
[31m-      <Content part={part3} />[m
[31m-       <Total total={total} />[m
[32m+[m[32m      <Header course={course.name} />[m
[32m+[m[32m      <Content part={course.parts[0]} />[m
[32m+[m[32m      <Content part={course.parts[1]} />[m
[32m+[m[32m      <Content part={course.parts[2]} />[m
[32m+[m[32m       <Total total={course.parts} />[m
   [m
     </div>[m
   )[m
