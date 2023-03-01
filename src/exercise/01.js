// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function counterReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        count: state.count + action.step
      }
    }

    default: throw Error("what")
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(counterReducer, { count: initialCount })
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({ type: "increment", step })
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
