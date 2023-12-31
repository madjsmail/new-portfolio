import React from 'react'

function Experience() {
    const experiences = [
        {
          company: 'Techmology',
          duration: 'Apr 2023 – ongoing',
          position: 'Software Engineer',
          location: 'Part-time, Algeria, remote',
          description: 'Developing responsive web applications using React and Next.js for front-end and Express/Nest.js for back-end. Working with prestigious clients to deliver tailored web solutions.',
           skills : ['React', 'Next.js', 'Express', 'Nest.js']
        },
        {
          company: 'CAMIO',
          duration: 'Apr 2023 – ongoing',
          position: 'Software Engineer',
          location: 'Algeria, remote',
          description: 'Full stack web development using Angular and Express.js. Collaborating closely with designers and QA to maintain and add new features to websites.',
          skills : ['angular', 'Express', 'javascript','typescript', 'git','azure','scrum']
        },
        {
          company: 'HOTELLO',
          duration: 'Jan 2023 – Apr 2023',
          position: 'Software Engineer',
          location: 'Canada, remote',
          description: 'Utilizing Angular to develop features and troubleshoot issues. Collaborating with team members to identify and resolve technical issues.',
          skills : ['angular', 'jest','unit testing', 'javascript','typescript', 'git','jira','kanban','bitbucket']
       
        },
        {
          company: 'FREELANCER',
          duration: '2018 – 2023',
          position: 'Web Developer',
          description: 'Building top-quality web solutions using HTML, CSS, and JavaScript. Developing custom websites and collaborating with back-end developers.',
          skills : ['html/css','vuejs', 'Express', 'javascript','typescript']
        
        },
        {
          company: 'SETRAM',
          duration: '2019 – 2020',
          position: 'Software Engineer Intern',
          location: 'Algeria, on-site',
          description: 'Contributing to a CMMS team and developing a document management system using PHP (Laravel). Assisting in ongoing website revisions and optimizing visual media.',
          skills : ['html/css', 'php', 'laravel','php','sql']
       
        },
      ];
      
    
  return (
    <section className='content-grid about-content-grid'>
        <h1>
            Experience
        </h1>
        {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience as any} />
      ))}

    </section>
  )
}

export default Experience
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

interface ExperienceCardProps {
    company: string;
    duration: string;
    position: string;
    location: string;
    description: string;
    skills: string[];
  }

const ExperienceCard = ({ company, duration, position, location, description, skills }:ExperienceCardProps) => {
    const [refHeader, inViewHeader] = useInView({
        triggerOnce: true,
        threshold: 1, 
      });
    const [refSubHeader, inViewSubHeader] = useInView({
        triggerOnce: true,
        threshold: 1, 
      });
    const [refDescription, inViewDescription] = useInView({
        triggerOnce: true,
        threshold: 1, 
      });
    return (
      <div className='experience-card'>
        <div className="experience-card__header" ref={refHeader}>
          <div
           className={`company overlay-on-scroll ${inViewHeader ? 'in-view' : ''}`}
          >{company}</div>
          <div
           className={`duration overlay-on-scroll ${inViewHeader ? 'in-view' : ''}`}
          >{duration}</div>
        </div>
        <div className="experience-card__sub-header">
          <div
          ref={refSubHeader}
          className={`position overlay-on-scroll ${inViewSubHeader ? 'in-view' : ''}`}>{position}</div>
          <div
          ref={refSubHeader}
          className={`location overlay-on-scroll ${inViewSubHeader ? 'in-view' : ''}`}>{location}</div>
        </div>
        <div className="experience-card__body" ref={refDescription}>
          <p  className={`overlay-on-scroll ${inViewDescription ? 'in-view' : ''}`}>{description}</p>
        </div>
        <div className="experience-card__footer">
          {skills.map((skill, index) => (
            <span className='chip' key={index}>{skill}</span>
          ))}
        </div>
      </div>
    );
  
}
ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  