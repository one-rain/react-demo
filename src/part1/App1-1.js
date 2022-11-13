
const Header = ({course}) => <h1>{course}</h1>

const Part = ({name, exercises}) => (
    <p>
      {name}: {exercises}
    </p>
)

const Content = ({parts}) => {
  const [part1, part2, part3] = parts
  //console.log("parts1: " + part1.name)
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return (
      <p>
        Number of exercises {total}
      </p>
  )
}

function App() {
  //const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercises1 = 10
  //const part2 = 'Using props to pass data'
  //const exercises2 = 7
  //const part3 = 'State of a component'
  //const exercises3 = 14

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }
  //console.log("name: " + course.name);
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
