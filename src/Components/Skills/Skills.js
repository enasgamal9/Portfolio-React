import React from 'react';
import './Skills.css';
import ProgressBar from '../../SharedUI/ProgressBar/ProgressBar';

const Skills = () => {
  return (
    <div className="skillsStyle">
      <h3>Why Me?</h3>
      <h1>My Technical Skills</h1>
      <div className="skillsList">
        <div>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>
        <div>
          <ProgressBar percent={100} />
          <ProgressBar percent={98} />
        </div>
        <div>
          <p>Bootstrap</p>
          <p>JavaScript</p>
        </div>
        <div>
          <ProgressBar percent={100} />
          <ProgressBar percent={90} />
        </div>
        <div>
          <p>Vue.js</p>
          <p>React</p>
        </div>
        <div>
          <ProgressBar percent={80} />
          <ProgressBar percent={10} />
        </div>
      </div>
    </div>
  );
};

export default Skills;