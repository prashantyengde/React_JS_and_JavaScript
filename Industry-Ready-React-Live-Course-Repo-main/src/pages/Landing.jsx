import React from 'react'
import { Link, useNavigate } from 'react-router'

const Landing = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/career')
    }
    return (
        <div>
            <h1>Landing Page</h1>
            <a href="/career">Click on this to navigate to Career Page</a> <br /> <br />
            <Link to='/career'>Click on this to navigate to Career Page</Link> <br /> <br />
            <button onClick={handleButton}>Login</button>
        </div>
    )
}

export default Landing
