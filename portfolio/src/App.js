import './css/style.scss'
import Top from './components/main/top'
import Header from './components/common/header'
import About from './components/main/about';
import Skills from './components/main/skills';
import { useEffect } from 'react';
import Project from './components/main/project';
export default function App() {
  const path = process.env.PUBLIC_URL;

  return (
      <>
        <Header />
        <Top />
        <About />
        <Skills />
        <Project />
      </>    
  );
}
