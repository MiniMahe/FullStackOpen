import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  const {age,course} = props

  const year = () => new Date().getFullYear() - age

  return (
    <div>
      <h1>{course} and you are {age} years old</h1>
      <h2>You were born in {year()}</h2>
    </div>
  )
}

const Content = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Display = ({ counter }) => <div>{counter}</div>

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = (prop) => {
  const [ counter, setCounter ] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    allClicks.push('L')
    setAll(allClicks)
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const props = {
    course: 'Half Stack application development',
    age: 19,
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
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />   
      <Header age={props.age} course={props.course} />
      <Content name={props.parts[0].name} exercises={props.parts[0].name} />
      <Content name={props.parts[1].name} exercises={props.parts[1].name} />
      <Content name={props.parts[2].name} exercises={props.parts[2].name} />
    </div>
  )
  
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

//   setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)