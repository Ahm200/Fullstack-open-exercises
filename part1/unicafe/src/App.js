import React from 'react';

import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const percentage = all > 0 ? (good / all) * 100 : 0;

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="percentage" value={percentage + " %"} />
      </tbody>
    </table>
  )
}
const App = () => {
  // save clicks of each button to its own stat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div >
  )
}

export default App


