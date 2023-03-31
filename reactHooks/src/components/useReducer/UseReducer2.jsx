import React, { useReducer, useState } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "add-task":
            return {
                ...state,
                tasks: [ ...state.tasks, {name: action.payload, isCompleted: false}],
                tasksCount: state.taskCount + 1,
            };
        case "toggle-task":
            return {
                ...state,
                tasks: state.tasks.map((item, index) =>
                index === action.payload
                 ? { ...item, isCompleted: !item.isCompleted }
                 : item
                )
            };
        default:
            return state;
    }
}

const UseReducer2 = () => {
    const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0});

    const [inputValue, setInputValue] = useState("");


  return (
    <div>
        <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
            dispatch({type: 'add-task', payload: inputValue})
            setInputValue("");
        }}>
            adicionar
        </button>

        {state.tasks.map((task, index) => (
            <p onClick={() => dispatch({type: 'toggle-task', payload: index})}
                style={{textDecoration: task.isCompleted ? 'line-through' : 'none'}}
            >
                {task.name}
            </p>
        ))}
    </div>
  )
}

export default UseReducer2