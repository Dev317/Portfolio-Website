import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#5f43b2">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#5f43b2", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Singapore Management University</h3>
          <p className="vertical-timeline-element-subtitle">Bachelor of Science, Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2021 - Aug 2021"
          iconStyle={{ background: "#f59f01", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Marketing Investment Intern - Wiziin.Inc</h3>
          <h5 className="vertical-timeline-element-subtitle">Ho Chi Minh City, Vietnam</h5>

          <ul>
            <li>Conducting market research on regional and global startups investment platforms</li>
            <li>Translating and producing industry/startups-related written content on Vietnam Venture Capital Community Facebook and LinkedIn group</li>
            <li>Sourcing, analyzing pitch decks and filling startups/SMEs-related content for Wiziin Beta platform</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2022 - December 2022"
          iconStyle={{ background: "#f59f01", color: "#fff"}}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full-stack Developer - SMU Research Lab</h3>
          <h5 className="vertical-timeline-element-subtitle">Singapore</h5>

          <ul>
            <li> Maintaining AP-Coach Programming services using Docker and multiple AWS services (EC2, ECS, CodeCommit, CodePipeline, S3, Route53, RDS, Redis)</li>
            <li> Full-stack web-app development with Flask back-end and HTML/CSS/JS & jQuery for front-end</li>
            <li> Enhancing code similarity check by implementing AST tree</li>
            <li> Enhancing code feedback mechanism (code hinting for programming beginners using OpenAI)</li>
            <li> Reducing programming exercise creation time for instructors using Codex</li>
            <li>Developed new feature that can auto-generate coding exercises and test cases</li>
            <li>Improved coding questions feedback by integrating GPT-3 Python-code</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2022 - December 2022"
          iconStyle={{ background: "#f59f01", color: "#fff"}}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full-stack Engineer - Homebase (YC W21)</h3>
          <h5 className="vertical-timeline-element-subtitle">Remote</h5>

          <ul>
            <li>Implementing Facebook spamming tool to increase sales leads using Flask, Redis, jQuery, Heroku</li>
            <li>Automating Sales and HR metric collection to reduce reporting time for BI analyst with Google App Scripts, Hubspot API and Ashby API</li>
            <li>Prototyping a fractionalised property sale platform to increase client's trust using Ethereum blockchain, Hardhat and Next.js</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience