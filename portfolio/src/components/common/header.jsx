import { useState , useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header({setScrollTarget,scrollTarget,scroll}) {
    const moveTo = (idx) => {
        window.scrollTo({
            top: scrollTarget[idx],
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <header className={`${scroll} header`}>
            <div className="header__inner inner">
                <h1 className="logo">
                    <Link to="/">YS Portfolio</Link>
                </h1>
                <nav className="header__nav">
                    <ul>
                        <li><button onClick={() => {moveTo(0)}}>About me</button></li>
                        <li><button onClick={() => {moveTo(1)}}>Skills</button></li>
                        <li><button onClick={() => {moveTo(2)}}>Projects</button></li>
                        <li><button onClick={() => {moveTo(3)}}>History</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
    
}
