import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    image: '/project1.png',
    deployedLink: 'https://deployed1.com',
    githubLink: 'https://github.com/user/project1'
  }
];

const Portfolio = () => (
  <div className="grid md:grid-cols-2 gap-4">
    {projects.map((proj, i) => (
      <Project key={i} {...proj} />
    ))}
  </div>
);

export default Portfolio;
