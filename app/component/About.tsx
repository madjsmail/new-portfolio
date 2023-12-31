import { useInView } from "react-intersection-observer";

type Props = {}

export function About({}: Props) {
  const skills = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Angular',
    'NodeJS',
    'Express',
    'Postgres',
    'MongoDB',
    'Azure',
    'Heroku',
    'GIT'
  ];
  const otherSkills  = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'React',
    'Next',
    'Vue',
    'Nuxt',
    'NodeJS',
    'Express',
    'NestJs',
    'Postgres',
    'MongoDB',
    'GitHub',
    'Jira',
  ];

  const softSkills = ['Problem-solving', 'Adaptability', 'Collaboration', 'Communication'];

  return (
    <section className="content-grid about-content-grid">
      <h2 className="about__title">About</h2>
      <div className="about__content">
        <div className="about__left">
          <AboutText
            text={`I\'m Smail Abd El Madjid, a software engineer and web developer based in Algeria. My journey began with a foundation in Computer Science,
            and I've further honed my skills to create innovative solutions for
            various projects.`}
          />

          <AboutText
            text={`        I specialize in full-stack web development, utilizing technologies
            such as React, Next.js, Express, and Nest.js. Whether it's crafting
            responsive front-end interfaces or architecting scalable back-end
            solutions, I thrive on creating impactful web applications.`}
          />
          <AboutText
            text={`            Currently, I'm passionate about my work at Techmology, where I
            engage in part-time full-stack web development. Collaborating with
            prestigious clients, I contribute to the development of tailored web
            solutions and ensure high-quality code practices.`}
          />
          <AboutText
            text={`            Beyond coding, I find joy in exploring the intersection of
            technology and art. Inspired by my background, I enjoy creative
            pursuits, just like my passion for web development. `}
          />
          <AboutText
            text={`Let's connect
            and explore how we can bring innovation to life! Feel free to reach out if you have exciting opportunities to share!  🚀`}
          />
        </div>
        <div className="about__right">
          <SkillCard title={"what i use for work"} skills={skills} />
          <SkillCard title="Other Skills" skills={otherSkills} />
          <SkillCard title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills } : SkillCardProps) => {
  return (
    <div className="skill__card">
      <div className="skill__card--title">
        {title}
      </div>
      <div className="skill__card--body">
        {skills.map((skill, index) => (
          <span key={index} className="chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};




 const AboutText = ({text}:any) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust as needed
      });
  return (
    <div>
      <p
        ref={ref}
        className={`about__left--intro overlay-on-scroll ${
          inView ? "in-view" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
}


