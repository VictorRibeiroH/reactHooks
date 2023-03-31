import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => console.log(json))
  }, [resourceType])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  }


  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  )
}

export default UseEffect