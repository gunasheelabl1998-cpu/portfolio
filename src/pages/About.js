import './About.css';

function About() {
    return (
        <div className="about-section">
            <h2>About Me</h2>
            <div className="about-intro">
                <p className="highlight-text">
                    Passionate React Developer specializing in creating seamless digital experiences across platforms
                </p>
            </div>

            <div className="about-grid">
                <div className="about-card">
                    <h3>Experience</h3>
                    <ul>
                        <li>4+ years of experience in Web, Smart Tv and Mobile development</li>
                        <li>Led development of cross-platform streaming applications</li>
                        <li>Expertise in React, React Native, Redux, and JavaScript ecosystem</li>
                        <li>Strong background in responsive design and UI/UX</li>
                        <li>Worked in Agile methodology with cross-functional teams</li>
                        <li>Created reusable component libraries for scalable front-end architecture</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h3>Technical Skills</h3>
                    <div className="skills-grid">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">Redux</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">React Native</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">HTML5/CSS3</span>
                        <span className="skill-tag">Git</span>
                    </div>
                </div>

                <div className="about-card">
                    <h3>Specialities</h3>
                    <ul>
                        <li>Media streaming optimization</li>
                        <li>Tv Guide implementation</li>
                        <li>Smart TV remote navigation</li>
                        <li>Accessibility implementation</li>
                        <li>Performance optimization</li>
                        <li>Communication Skills</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h3>Achievements</h3>
                    <ul>
                        <li>Successfully delivered OTT apps</li>
                        <li>Reduced app load time by 40%</li>
                        <li>Achieved 85%+ unit test coverage</li>
                        <li>Implemented CI/CD pipelines</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default About;