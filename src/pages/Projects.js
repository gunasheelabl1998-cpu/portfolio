import ProjectCard from '../components/ProjectCard';

function Projects() {

    return (
        <div className="projects-section">
            <h2>Featured Projects</h2>
            <div className="project-grid">
                <ProjectCard
                    title="Web and Smart TV OTT App"
                    tech="React, Redux, CastLabs, Shaka Player"
                    description="Cross-platform app for webOS, Tizen, VIDAA with DRM streaming and remote navigation."
                />
                <ProjectCard
                    title="Mobile App"
                    tech="React Native, Redux-Saga, Tailwind CSS"
                    description="Cross-platform app for iOS and Android with offline support and push notifications."
                />
            </div>
        </div>
    );
}

export default Projects;