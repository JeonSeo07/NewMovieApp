import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  return (
    // Link to={"주소경로(href와 같다)"} 이는 css에서 a태그이다.
    <div className='nav'>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  )
}

export default Navigation