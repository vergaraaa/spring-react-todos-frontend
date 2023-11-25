import React from 'react'
import { useParams } from 'react-router-dom'

export const Welcome = () => {
  const { username } = useParams();

  return (
    <div className='welcome'>
      <h1>Welcome {username}</h1>
      <div>
        Welcome component
      </div>
    </div>
  )
}
