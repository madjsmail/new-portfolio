'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {allProjects} from './project'
import { useInView } from 'react-intersection-observer';

function Projects(props: any) {


  return (
    <section className="content-grid project-content-grid">
        <h3>Projects</h3>
        <p> here is some of my work</p>
        <div className="project__body">
        {allProjects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          links={project.links}
          skills={project.skills}
          description={project.description}
        />
      ))}

        </div>
    </section>
  )
}

Projects.propTypes = {}

export default Projects

interface CardProps {
    title: string;
    imageUrl?: string;
    links?: {label:string , url : string}[];
    skills?: string[];
    description: string;
  }
  
  function Card({ title, imageUrl, links, skills, description }: CardProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
      });
    
    const [isTruncated, setIsTruncated] = useState(true);

    const truncatedDescription = isTruncated
      ? description.slice(0, 100) + '...' // Adjust the character limit as needed
      : description;
  
    const toggleTruncation = () => {
      setIsTruncated(!isTruncated);
    };
    return (
      <div
      ref={ref} className={`card ${inView ? 'in-view' : ''}`}
      >
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="card__body">
          <div className="card__body__header">
            <h4>{title}</h4>
            <div className="links">
              {links?.map((link, index) => (
                <span key={index} className="chip">
                  {link.label}
                </span>
              ))}
            </div>
          </div>
          <div className="card__body__skills overlay-on-scroll">
  
              <p className="">{
              skills.join(" - ")
              }</p>
          
          </div>
          <div className="card__body__description">
                <p>{truncatedDescription}</p>
                {description.length > 100 && (
                    <button onClick={toggleTruncation}>
                    {isTruncated ? 'Read More' : 'Read Less'}
                    </button>
                )}
                
          </div>
        </div>
      </div>
    );
  }





