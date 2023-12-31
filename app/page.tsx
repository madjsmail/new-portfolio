'use client'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import HomePortfolio from './component/Home';
import { About } from './component/About';
import Projects from './component/Projects';
import Experience from './component/Experience';
import Contact from './component/Contact';

export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });
  return (
    <div className="">
        <HomePortfolio/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  );
}



