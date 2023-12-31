'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';


function HomePortfolio() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
      });
    return (
    <section className="content-grid home-content-grid">
    <div className="home">
   
        <h1
         className={`home__title overlay-on-scroll ${inView ? 'in-view' : ''}`}
         ref={ref}>
          Hi, I'am Madjid</h1>
      
      <p 
       className={`home__description overlay-on-scroll ${inView ? 'in-view' : ''}`}>
     
        I am a passionate Software Engineer and Web Developer 👨🏻‍💻. With
        expertise in full-stack development
      </p>
      <a href="" className="home__btn btn">
        Contact me
      </a>
    </div>
  </section>
  )
}

export default HomePortfolio