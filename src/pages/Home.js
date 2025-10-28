import './Home.css';
// import developerImage from '../assets/developer-image.svg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="content-grid">
        <div className="text-content">
          <h1 className="highlight">Hi, I'm <span className="highlight">Gunasheela </span></h1>
          <p className="tagline">React Developer | OTT & Smart TV Specialist | Mobile App Developer</p>
          <p className="summary">
            I build performant, accessible, and scalable apps for web and Smart TV platforms using React, Redux, and media streaming tech.
          </p>
          <button className="cta-button" onClick={() => navigate('/projects')}>View My Work</button>
        </div>
        
        <div className="background-image-container"></div>
      </div>
    </div>
  );
}

export default Home;