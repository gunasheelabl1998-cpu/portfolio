import './ProjectCard.css';

function ProjectCard({ title, tech, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p><strong>Tech:</strong> {tech}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;