import './App.css'
import Total from './Total'
import Header from './Header'
import Content from './Content'

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
     <Header header={course.name}></Header>
    <Content part={course.parts}></Content>
    
    <Total part= {course.parts}></Total> 
    </div>
  )
}

export default App

