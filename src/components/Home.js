import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p><Link to='/user'>user</Link></p>
      <p><Link to='/admin'>admin</Link></p>
    </div>
  )
}

export default Home
