import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = { title: 'Quadruped Robot | Veyd Patil', description: 'A modular legged robotics platform by Veyd Patil.' };

export default function QuadrupedProject() {
  return <main className="page">
    <header className="shell site-header"><a className="site-name" href="/">Veyd Patil</a><a href="/#projects" className="back-link"><ArrowLeft className="size-4" /> All projects</a></header>
    <article className="shell case-study">
      <header className="case-header"><p className="label">Project 01 / In progress</p><h1>Quadruped robot</h1><p>A modular quadruped platform used to investigate mechanical design, actuator integration, controls, and gait testing.</p></header>
      <img src="/projects/quadruped.png" alt="Quadruped robotics prototype" className="case-image" />
      <div className="case-content">
        <section><h2>Overview</h2><p>This case study will document the design process and testing results as the robot develops. The page is structured for build photos, CAD screenshots, video, and measured outcomes.</p></section>
        <section><h2>Current scope</h2><ul><li>Mechanical architecture and leg design</li><li>Actuator selection and integration</li><li>Control system development</li><li>Gait testing and iteration</li></ul></section>
        <section><h2>Details to add</h2><ul><li>Project objective and constraints</li><li>Bill of materials and fabrication notes</li><li>Test setup, data, and results</li><li>Lessons from each design revision</li></ul></section>
      </div>
    </article>
  </main>;
}
