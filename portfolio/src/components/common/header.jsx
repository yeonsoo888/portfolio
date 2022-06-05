import { useState , useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header({scrollTarget,scroll}) {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const moveTo = (idx) => {
        setIsMenuOpen(false);
        window.scrollTo({
            top: scrollTarget[idx],
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <header className={
            `${scroll} header ${isMenuOpen ? "menuOpen" : ""}` 
        }>
            <div className="header__inner inner">
                <h1 className="logo" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    })
                }}>
                    <a>YS Portfolio</a>
                </h1>
                <nav className="header__nav">
                    <ul>
                        <li><button onClick={() => {moveTo(0)}}>About me</button></li>
                        <li><button onClick={() => {moveTo(1)}}>Skills</button></li>
                        <li><button onClick={() => {moveTo(2)}}>Projects</button></li>
                        <li><button onClick={() => {moveTo(3)}}>History</button></li>
                    </ul>
                </nav>
                <div className="hamburger_wrap" onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}>
                    <div className="hamburger__inner">
                        <div id="nav-icon3" className={`${isMenuOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
    
}
