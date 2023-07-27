import React from 'react'
import "../css/Navbar.css"
import navlogo from "../assets/svg/superprof.svg"
import question from "../assets/svg/question.svg"
const Navbar = () => {
    return (
        <header className="navbar">
            <nav>
                <a href="/"><img src={navlogo} alt="Nav Logo" className="navlogo-svg" /></a>
                <div className="right-nav-items">
                    <a href="/"><img src={question} alt="question" /></a>
                    <a href="/">Give Private Class</a>
                    <a href="/">Log In</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;