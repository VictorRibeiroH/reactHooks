import React, { useState, useRef, useEffect } from 'react'

const UseRef = () => {

  const [name, setName] = useState('');

//   const renders = useRef(0);

//   useEffect(() => {
//     renders.current = renders.current + 1;
//   })

const inputRef = useRef();

const focusInput = () => {
    inputRef.current.focus();
}

  return (
    <div>
        <input 
        ref={inputRef}
        value={name} 
        onChange={(e) => setName(e.target.value)} />
        <p>Meu nome é {name}</p>
        {/* <p>Renders: {renders.current}</p> */}
        <button onClick={focusInput}>Focus input</button>
    </div>
  )
}

export default UseRef