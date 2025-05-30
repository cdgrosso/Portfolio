type ProjectProps = {
  title: string;
  image: string;
  deployedLink: string;
  githubLink: string;
};

const Project = ({ title, image, deployedLink, githubLink }: ProjectProps) => (
  <div className="border p-4">
    <h3>{title}</h3>
    <img src={image} alt={title} className="w-full mb-2" />
    <a href={deployedLink} target="_blank" className="mr-2">Live</a>
    <a href={githubLink} target="_blank">GitHub</a>
  </div>
);

export default Project;
