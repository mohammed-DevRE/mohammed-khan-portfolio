import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  Cloud,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Network,
  Server,
  TerminalSquare,
  TimerReset,
  Workflow
} from "lucide-react";
import "./styles.css";

const roles = [
  {
    period: "Jul 2022 - Present",
    title: "DevOps Engineer",
    company: "SAP Ariba",
    place: "Remote",
    summary:
      "L2/L3 production support and SRE operations for SAP Ariba, Fieldglass, BTP, HANA, and NextGen platforms across global data centers.",
    bullets: [
      "Designed and maintained Jenkins, Cloud Build, GitHub, and Rundeck pipelines across dev, QA, staging, and production.",
      "Provisioned AWS and GCP infrastructure with Terraform and CloudFormation for secure, fault-tolerant environments.",
      "Operated Kubernetes workloads on GKE and EKS with rolling deployments, autoscaling, health checks, and resource optimization.",
      "Led major incident and critical response calls, RCA preparation, preventive action planning, and ServiceNow ITSM workflows.",
      "Built monitoring and observability with Dynatrace, Splunk, Moogsoft, Site24x7, Cloud Monitoring, Prometheus, and Grafana."
    ],
    stack: ["AWS", "GCP", "Kubernetes", "Terraform", "Jenkins", "Rundeck", "Splunk", "Dynatrace", "Grafana"]
  },
  {
    period: "Oct 2021 - Jun 2022",
    title: "SRE / DevOps Engineer",
    company: "Verizon",
    place: "Piscataway, NJ",
    summary:
      "Built cloud infrastructure, Kubernetes deployments, automated release pipelines, and observability for production workloads.",
    bullets: [
      "Managed Kubernetes deployments with Helm charts, scaling controls, CI/CD workflows, and automated builds.",
      "Implemented AWS solutions across VPC, IAM, EC2, S3, Lambda, RDS, ALB, Auto Scaling, ECS, and Docker.",
      "Automated infrastructure with Terraform, CloudFormation, and Google Cloud Deployment Manager.",
      "Integrated Jenkins, GitLab Runner, SonarQube, Docker build nodes, Prometheus, Grafana, Splunk, and Stackdriver."
    ],
    stack: ["AWS", "Kubernetes", "Helm", "Docker", "Terraform", "GitLab", "Jenkins", "Prometheus"]
  },
  {
    period: "Jul 2020 - Sep 2021",
    title: "Cloud / DevOps Engineer",
    company: "GoDaddy",
    place: "Tempe, AZ",
    summary:
      "Supported multi-cloud infrastructure, GKE clusters, Jenkins delivery pipelines, container platforms, and IaC automation.",
    bullets: [
      "Managed GCP infrastructure with Compute Engine, Cloud Load Balancing, Cloud Storage, Cloud SQL, and Stackdriver.",
      "Designed GKE clusters with Helm, kubectl, ingress controllers, and RBAC for secure scalable deployments.",
      "Built AWS infrastructure with CloudFormation and Terraform across VPC, EC2, RDS, DynamoDB, IAM, Route 53, and CloudWatch.",
      "Supported Azure VMs, App Services, Storage, SQL, Redis, Azure AD, ARM templates, Bicep, and PowerShell."
    ],
    stack: ["GCP", "GKE", "AWS", "Azure", "Jenkins", "OpenShift", "Terraform", "Python"]
  },
  {
    period: "Apr 2019 - Jun 2020",
    title: "DevOps Engineer / Build and Release Engineer",
    company: "UCSF",
    place: "San Francisco, CA",
    summary:
      "Owned build and release workflows, Azure automation, Jenkins jobs, API infrastructure, and data pipelines.",
    bullets: [
      "Automated CI/CD pipelines using Jenkins, Docker, AWS CloudFormation, Maven, ANT, and build pipeline plugins.",
      "Designed Azure environments and Datadog dashboards with Terraform and CloudFormation.",
      "Implemented ETL pipelines with Azure Data Factory, T-SQL, Spark SQL, U-SQL, and Azure Data Storage.",
      "Deployed applications to WebLogic Application Server across production and staging."
    ],
    stack: ["Azure", "Jenkins", "Terraform", "Datadog", "Maven", "WebLogic", "SQL"]
  },
  {
    period: "Jul 2014 - Jul 2018",
    title: "Linux Engineer / Build and Release Engineer",
    company: "Excela Solutions & Google",
    place: "Hyderabad, India",
    summary:
      "Built a Linux systems foundation across administration, provisioning, scripting, server builds, and release support.",
    bullets: [
      "Administered UNIX, Red Hat Linux, CentOS, Debian, and Solaris systems for production support.",
      "Created users, groups, permissions, Kickstart/PXE builds, LVM operations, backups, upgrades, and shell automation.",
      "Troubleshot kernel, storage, DNS, SAN, access, and performance issues across multi-user environments."
    ],
    stack: ["Linux", "RHEL", "CentOS", "Shell", "Kickstart", "PXE", "LVM", "DNS"]
  }
];

const skills = [
  ["Cloud", ["AWS", "GCP", "Azure", "EC2", "S3", "RDS", "Cloud SQL", "BigQuery", "Pub/Sub"]],
  ["Containers", ["Kubernetes", "GKE", "EKS", "Docker", "Helm", "OpenShift", "ECS"]],
  ["Infrastructure as Code", ["Terraform", "CloudFormation", "Ansible", "AWS CDK", "ARM", "Bicep"]],
  ["CI/CD", ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Cloud Build", "Rundeck", "Maven"]],
  ["Observability", ["Splunk", "Dynatrace", "Prometheus", "Grafana", "CloudWatch", "Moogsoft", "Site24x7"]],
  ["Systems", ["Linux", "RHEL", "CentOS", "Solaris", "LVM", "Ceph basics", "tcpdump"]]
];

const projects = [
  {
    icon: Network,
    title: "Multi-cloud Reliability Platform",
    copy:
      "Terraform and CloudFormation infrastructure patterns for AWS and GCP with Kubernetes deployment standards, monitoring, and secure access controls.",
    tags: ["AWS", "GCP", "Terraform", "Kubernetes"]
  },
  {
    icon: Workflow,
    title: "Release Automation System",
    copy:
      "CI/CD workflows across Jenkins, Cloud Build, GitHub, GitLab, and Rundeck to reduce manual release work and improve controlled production delivery.",
    tags: ["Jenkins", "Cloud Build", "GitLab", "Rundeck"]
  },
  {
    icon: TimerReset,
    title: "Incident Response Runbooks",
    copy:
      "Operational runbooks and monitoring workflows for MI/CIRS response, RCA readiness, anomaly detection, and ServiceNow-driven follow-up.",
    tags: ["SRE", "ServiceNow", "RCA", "Automation"]
  }
];

const quickFacts = [
  ["10+ years", "DevOps, SRE, cloud and Linux engineering"],
  ["3 clouds", "AWS, GCP, and Azure production exposure"],
  ["24/7 ops", "Major incident response and production support"],
  ["IaC first", "Terraform, CloudFormation, Ansible, CDK"]
];

function App() {
  const [openRole, setOpenRole] = useState(0);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mohammed Khan home">
          <span>Mohammed Khan</span>
          <small>SRE • DevOps • Cloud Engineer</small>
        </a>
        <nav>
          {["About", "Experience", "Projects", "Skills", "Resume", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Let's Connect <ArrowRight size={16} />
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <h1>Building reliable cloud platforms with automation and observability</h1>
          <p>
            I’m Mohammed Khan, a DevOps and SRE engineer with 10+ years of experience across cloud
            infrastructure, Linux systems, CI/CD, Kubernetes, Terraform, monitoring, and incident response.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="https://github.com/mohammed-DevRE/mohammed-khan-portfolio#readme">
              <Download size={18} /> View Resume
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Terminal-style reliability dashboard">
          <div className="terminal">
            <div className="dots"><span></span><span></span><span></span></div>
            <code>
              <b>mohammed@cloud</b>:~$ kubectl get pods<br />
              api-platform&nbsp;&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;Running&nbsp;&nbsp;2d<br />
              sre-runbooks&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;Running&nbsp;&nbsp;5d<br />
              observability&nbsp;&nbsp;1/1&nbsp;&nbsp;Running&nbsp;&nbsp;9d<br /><br />
              <b>mohammed@cloud</b>:~$ reliability status<br />
              systems: stable | alerts: actionable | deploys: controlled
            </code>
          </div>
          <div className="signal-card aws"><Cloud size={22} /> AWS / GCP / Azure</div>
          <div className="signal-card k8s"><Layers3 size={22} /> Kubernetes</div>
          <div className="signal-card obs"><TerminalSquare size={22} /> Observability</div>
        </div>
      </section>

      <section className="metrics" aria-label="Impact metrics">
        {quickFacts.map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="about" className="split-section">
        <div>
          <p className="section-label">About</p>
          <h2>SRE-minded engineer with a strong Linux and cloud foundation</h2>
        </div>
        <div className="rich-copy">
          <p>
            My work sits at the intersection of production reliability, infrastructure automation,
            platform operations, and developer delivery. I’ve supported SAP Ariba, Fieldglass, BTP,
            HANA, NextGen, telecom, healthcare, and web-scale infrastructure environments.
          </p>
          <div className="fact-row">
            <span><MapPin size={20} /> Englewood, NJ</span>
            <span><Cloud size={20} /> Open to SRE, DevOps, Cloud roles</span>
            <span><BadgeCheck size={20} /> AWS Solutions Architect Associate</span>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="section-intro">
          <p className="section-label">Experience</p>
          <h2>Professional journey</h2>
          <p>A production-focused path across SRE operations, cloud platforms, automation, and Linux systems.</p>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article className={`role ${openRole === index ? "open" : ""}`} key={role.title}>
              <button onClick={() => setOpenRole(openRole === index ? -1 : index)}>
                <span className="period">{role.period}</span>
                <span>
                  <strong>{role.title}</strong>
                  <small>{role.company} • {role.place}</small>
                </span>
                <ChevronDown size={20} />
              </button>
              <div className="role-detail">
                <p>{role.summary}</p>
                <ul>
                  {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tags">
                  {role.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-intro">
          <p className="section-label">Projects</p>
          <h2>Selected reliability work</h2>
          <p>Case-study style summaries shaped from the platform, automation, and incident-response work in your resume.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-top"><Icon size={28} /><ExternalLink size={18} /></div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="section-intro">
          <p className="section-label">Skills</p>
          <h2>Tools and technologies</h2>
          <p>A practical toolkit for building, operating, and improving modern platforms.</p>
        </div>
        <div className="skill-grid">
          {skills.map(([group, items]) => (
            <article className="skill-group" key={group}>
              <h3>{group}</h3>
              {items.map((item) => <span key={item}>{item}</span>)}
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="resume-band">
        <div>
          <p className="section-label">Resume</p>
          <h2>Download my resume</h2>
          <p>Public resume summary with SRE, DevOps, cloud, Linux, automation, and observability experience.</p>
        </div>
        <div className="resume-card">
          <BookOpen size={32} />
          <div>
            <strong>Mohammed Khan — Resume</strong>
            <span>GitHub public profile version</span>
          </div>
          <a className="button secondary" href="https://github.com/mohammed-DevRE/mohammed-khan-portfolio#readme">
            <Download size={18} /> View
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let’s build something reliable together</h2>
          <p>I’m open to SRE, DevOps, Cloud, Kubernetes, Linux, Terraform, and platform engineering opportunities.</p>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/k-mohammed-646892217" target="_blank" rel="noreferrer"><Mail size={22} /> Contact on LinkedIn</a>
          <a href="https://github.com/mohammed-DevRE/mohammed-khan-portfolio" target="_blank" rel="noreferrer"><Server size={22} /> GitHub Portfolio</a>
          <a href="https://www.linkedin.com/in/k-mohammed-646892217" target="_blank" rel="noreferrer"><ExternalLink size={22} /> LinkedIn</a>
          <a href="#projects"><Code2Fallback /> Project summaries</a>
        </div>
      </section>

      <footer>
        <strong>Mohammed Khan</strong>
        <span>Building reliable cloud platforms with automation and observability.</span>
        <a href="#home">Back to top</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

function Code2Fallback() {
  return <Code2Icon />;
}

function Code2Icon() {
  return <TerminalSquare size={22} />;
}
