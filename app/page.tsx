import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Quadruped robot',
    date: 'In progress',
    description: 'A modular legged robotics platform. The project covers mechanical design, actuator integration, controls, and gait testing.',
    href: '/projects/quadruped',
  },
  {
    title: 'Future project',
    date: 'To be added',
    description: 'Use this space for another engineering project. Add a short description, the year, and a link to its case study.',
    href: '#',
  },
];

export default function Home() {
  return <main className="page">
    <header className="shell site-header">
      <a className="site-name" href="/">Veyd Patil</a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
    </header>

    <section className="shell intro">
      <p className="label">Engineering portfolio</p>
      <h1>Projects</h1>
      <p>A record of engineering work, including process notes, technical decisions, and results.</p>
    </section>

    <section id="projects" className="shell projects" aria-label="Projects">
      {projects.map((project, index) => <article className="project-row" key={project.title}>
        <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
        <div><h2>{project.title}</h2><p>{project.description}</p></div>
        <div className="project-meta"><span>{project.date}</span>{project.href !== '#' && <a href={project.href} aria-label={`Read about ${project.title}`}><ArrowUpRight className="size-4" /></a>}</div>
      </article>)}
    </section>

    <footer id="contact" className="shell footer">
      <p>Veyd Patil</p>
      <a href="https://github.com/veydpatil" target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="inline size-3.5" /></a>
    </footer>
  </main>;
}
