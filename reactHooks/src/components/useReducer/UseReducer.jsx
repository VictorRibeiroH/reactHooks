import React, {useReducer} from 'react'



const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            };

        case 'decrement':
            return {
                counter: state.counter -1
            };
        default:
            return state;
    }
}

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <div>
        <p>{state.counter}</p>
        <button onClick={() => dispatch({type: 'increment'})}>Aumentar</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Diminuir</button>
    </div>
  )
}

export default UseReducer