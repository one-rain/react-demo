import { useState } from "react"

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, all, average, postive } = props
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
          <tr><Statistic feedback="good" value={good} /></tr>
          <tr><Statistic feedback="neutral" value={neutral} /></tr>
          <tr><Statistic feedback="bad" value={bad} /></tr>
          <tr><Statistic feedback="all" value={all} /></tr>
          <tr><Statistic feedback="average" value={isNaN(average) ? 0 : average} /></tr>
          <tr><Statistic feedback="positive" value={isNaN(postive) ? 0 : postive + " %"} /></tr>
        </tbody>
      </table>
    )
  }
}

const App7 = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => {
    setGood(good + 1)
  }

  const addToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addToBad = () =>{
    setBad(bad + 1)
  }

  const all = good+neutral+bad
  const average = ((good - bad)/all)*100
  const postive = (good/all)*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => addToGood()} />
      <Button text="neutral" handleClick={() => addToNeutral()} />
      <Button text="bad" handleClick={() => addToBad()} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} postive={postive} />
    </div>
  )
}

export default App7