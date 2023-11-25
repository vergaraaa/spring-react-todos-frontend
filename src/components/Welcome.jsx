import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Welcome = () => {
  const { username } = useParams();

  return (
    <div className='welcome'>
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos" >Go here</Link>
      </div>
    </div>
  )
}
