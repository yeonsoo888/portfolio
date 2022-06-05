import { useEffect, useState, useRef } from 'react';
import './css/style.scss'
import Top from './components/main/top'
import Header from './components/common/header'
import About from './components/main/about';
import Skills from './components/main/skills';
import Project from './components/main/project';
import Carrer from './components/main/carrer';

export default function App() {
    const [scroll, setScroll] = useState("");
    const [scrollTarget, setScrollTarget] = useState([]);
    const mouseCircle = useRef(null);

    const [load,setLoad] = useState(false);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            mouseCircle.current.style.left = e.clientX + "px";
            mouseCircle.current.style.top = e.clientY + "px";
        })

        window.addEventListener('scroll', (e) => {
            const st = window.scrollY;
            if (st >= 1) {
                setScroll('scrolled');
            } else {
                setScroll('');
            }
        })

        
        window.dispatchEvent(new Event('scroll'));
    }, [])



    return (
        <>
            <div className='mouseCircle' ref={mouseCircle}></div>
            <Header setScrollTarget={setScrollTarget} scrollTarget={scrollTarget} scroll={scroll} />
            <Top />
            <About />
            <Skills />
            <Project setScrollTarget={setScrollTarget} setLoad={setLoad}/>
            <Carrer />
        </>
    );
}
