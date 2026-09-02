export type Project = {
  slug: string;
  title: string;
  label: string;
  date: string;
  summary: string;
  challenge: string;
  approach: string[];
  media?: { type: 'image' | 'video'; src: string; alt: string };
  additionalMedia?: { type: 'image' | 'video'; src: string; alt: string }[];
};

export const projects: Project[] = [
  { slug: 'quadruped', title: 'Quadruped robot', label: 'Independent project', date: 'In progress', summary: 'A modular legged robotics platform for investigating mechanical design, actuator integration, controls, and gait testing.', challenge: 'Build a testable legged platform that can support iterative work across the mechanical and controls stack.', approach: ['Mechanical architecture and leg design', 'Actuator selection and integration', 'Control system development', 'Gait testing and iteration'], media: { type: 'image', src: '/projects/quadruped.png', alt: 'Quadruped robotics prototype' } },
  { slug: 'inverted-pendulum', title: 'Two-wheeled inverted pendulum', label: 'CMU General Robotics / Controls', date: 'Lab 4', summary: 'A LEGO two-wheeled robot that balances itself using feedback from onboard sensors.', challenge: 'Create an inverted pendulum capable of staying upright in a small area using LEGO sensors.', approach: ['Implemented a feedback controller around tilt error', 'Tuned proportional, integral, and derivative gains', 'Iterated on the mechanical configuration and control response'], media: { type: 'video', src: '/projects/inverted-pendulum.mp4', alt: 'Two-wheeled inverted pendulum balancing demonstration' }, additionalMedia: [{ type: 'image', src: '/projects/robot-gearing-class.png', alt: 'Robot gearing class image' }] },
  { slug: 'path-planning', title: 'Path planning', label: 'CMU General Robotics / Planning', date: 'Lab 5', summary: 'A planner for finding a route through a known map from a given start point to a finish point.', challenge: 'Determine an accurate, efficient path through a known course while accounting for final-position error and path length.', approach: ['Represented the environment as a navigable configuration space', 'Evaluated graph and grid-based planning methods', 'Used odometry and IMU-informed dead reckoning for execution'], media: { type: 'video', src: '/projects/path-planning.mp4', alt: 'Path-planning demonstration' }, additionalMedia: [{ type: 'image', src: '/projects/wavefront.png', alt: 'Wavefront planning visualization' }] },
  { slug: 'localization', title: 'Probabilistic localization', label: 'CMU General Robotics / Localization', date: 'Lab 6', summary: 'A probabilistic method for estimating a robot’s position along a circular path from imperfect environmental information.', challenge: 'Determine the robot’s most likely location when an exact position cannot be observed directly.', approach: ['Modeled position as a probability distribution', 'Updated estimates from environmental observations', 'Used uncertainty rather than a single assumed position'], media: { type: 'video', src: '/projects/localization.mp4', alt: 'Probabilistic localization demonstration' } },
  { slug: 'amazon-suitcase', title: 'Amazon suitcase prototype', label: 'Amazon project', date: 'Details in progress', summary: 'A suitcase prototype documented through demonstration video and design imagery.', challenge: 'Project documentation and technical context will be added alongside the provided media.', approach: ['Add project role and team context', 'Add requirements and constraints', 'Add design decisions and outcomes'], media: { type: 'video', src: '/projects/amazon-suitcase.mp4', alt: 'Amazon suitcase prototype demonstration' }, additionalMedia: [{ type: 'video', src: '/projects/amazon-movement-controls.mp4', alt: 'Suitcase movement controls demonstration' }, { type: 'image', src: '/projects/amazon-cad.jpg', alt: 'Amazon suitcase CAD view' }, { type: 'image', src: '/projects/amazon-exterior.jpeg', alt: 'Amazon suitcase exterior view' }, { type: 'image', src: '/projects/amazon-interior.png', alt: 'Amazon suitcase interior view' }] },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
