import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../styles/About.css"

const About = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Minh!</h2>
        <div className="prompt">
          <p>An aspiring developer with interest in Web and Blockchain Development</p>
          <GitHubIcon onClick={() => window.open("https://github.com/Dev317", "_blank")}/>
        </div>
      </div>

      <div className="skills">
        <h1>Tech stacks</h1>
        <ol className="list">
          <li className="item">
            <h2>Webdev frameworks/libraries</h2>
            <span>Back-end: Flask, Springboot, Django, Express.js</span>
            <br />
            <span>Front-end: React.js, Svelte</span>
            <br />
            <span>DevOps: Terraform, Docker, Kubernetes, AWS services</span>

          </li>

          <li className="item">
            <h2>AI-related tools</h2>
            <span>Tensorflow 2.0, Scikit-learn, MySQL</span>
          </li>

          <li className="item">
            <h2>Blockchain stacks</h2>
            <span>Hardhat.js, TruffleSuite, Brownie, IPFS, ether.js</span>
          </li>

          <li className="item">
            <h2>Programming languages</h2>
            <span>Python, Java, Javascript, Solidity</span>
          </li>


        </ol>

      </div>
    </div>
  )
}

export default About