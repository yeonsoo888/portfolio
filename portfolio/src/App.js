import { useEffect, useState } from 'react';
import './css/style.scss'
import Top from './components/main/top'
import Header from './components/common/header'
import About from './components/main/about';
import Skills from './components/main/skills';
import Project from './components/main/project';
import Carrer from './components/main/carrer';
export default function App() {
    const path = process.env.PUBLIC_URL;
    const [scroll, setScroll] = useState("");
    const [scrollTarget, setScrollTarget] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const st = window.scrollY;
            if (st >= 1) {
                setScroll('scrolled');
            } else {
                setScroll('');
            }
        })

        const mainSec = document.querySelectorAll(".mainSec");
        window.addEventListener("resize", () => {
            const arrTarget = [];
            let headerheight = document.querySelector(".header").offsetHeight;

            for (let item of mainSec) {
                arrTarget.push(item.offsetTop - headerheight);
            }
            setScrollTarget(arrTarget);
        })
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
    }, [])



    return (
        <>
            <Header setScrollTarget={setScrollTarget} scrollTarget={scrollTarget} scroll={scroll} />
            <Top />
            <About />
            <Skills />
            <Project setScrollTarget={setScrollTarget}/>
            <Carrer />
        </>
    );
}
