import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  Cloud,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  TimerReset,
  Users,
  Workflow
} from "lucide-react";
import {
  SiAnsible,
  SiApachemaven,
  SiBamboo,
  SiCentos,
  SiDatabricks,
  SiDatadog,
  SiDocker,
  SiDynatrace,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglebigquery,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiPostman,
  SiPrometheus,
  SiPython,
  SiRedhat,
  SiRedhatopenshift,
  SiRundeck,
  SiSplunk,
  SiTerraform
} from "react-icons/si";
import { TbBrandAws, TbBrandAzure } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import "./styles.css";

const realIcons = {
  AWS: TbBrandAws,
  "Google Cloud": SiGooglecloud,
  GCP: SiGooglecloud,
  "Microsoft Azure": TbBrandAzure,
  Azure: TbBrandAzure,
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  Helm: SiHelm,
  OpenShift: SiRedhatopenshift,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  Jenkins: SiJenkins,
  GitLab: SiGitlab,
  "GitLab CI/CD": SiGitlab,
  GitHub: SiGithub,
  "GitHub Actions": SiGithubactions,
  Rundeck: SiRundeck,
  Maven: SiApachemaven,
  Bamboo: SiBamboo,
  Postman: SiPostman,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Splunk: SiSplunk,
  Dynatrace: SiDynatrace,
  Linux: SiLinux,
  RHEL: SiRedhat,
  CentOS: SiCentos,
  Python: SiPython,
  BigQuery: SiGooglebigquery,
  Databricks: SiDatabricks,
  MongoDB: SiMongodb,
  Datadog: SiDatadog
};

const brandColors = {
  AWS: "#ff9900",
  "Google Cloud": "#4285f4",
  GCP: "#4285f4",
  "Microsoft Azure": "#0078d4",
  Azure: "#0078d4",
  Kubernetes: "#326ce5",
  Docker: "#2496ed",
  Terraform: "#7b42bc",
  Jenkins: "#d33833",
  GitLab: "#fc6d26",
  "GitLab CI/CD": "#fc6d26",
  GitHub: "#181717",
  "GitHub Actions": "#2088ff",
  Prometheus: "#e6522c",
  Grafana: "#f46800",
  Ansible: "#101010",
  Linux: "#111827",
  Splunk: "#000000",
  Dynatrace: "#1496ff",
  Rundeck: "#f73f39",
  Helm: "#0f1689",
  Python: "#3776ab",
  RHEL: "#ee0000",
  OpenShift: "#ee0000"
};

const logoMarks = {
  GKE: ["gke", "#4285f4"],
  EKS: ["eks", "#ff9900"],
  ECS: ["ecs", "#ff9900"],
  CloudFormation: ["cf", "#ff4f8b"],
  "AWS CDK": ["cdk", "#ff9900"],
  ARM: ["arm", "#0078d4"],
  Bicep: ["bc", "#519aba"],
  "Deployment Manager": ["dm", "#4285f4"],
  "Cloud Build": ["cb", "#4285f4"],
  Moogsoft: ["mg", "#16a6a1"],
  SonarQube: ["sq", "#4e9bcd"],
  Solaris: ["sol", "#f80000"],
  Shell: ["sh", "#89e051"],
  WebLogic: ["wl", "#f80000"],
  SQL: ["sql", "#00758f"]
};

function TechLogo({ name }) {
  const RealIcon = realIcons[name];
  const logoColor = brandColors[name] || "#2878d0";

  if (RealIcon) {
    return (
      <i className="tech-logo tech-logo--brand" aria-hidden="true" style={{ color: logoColor }}>
        <RealIcon />
      </i>
    );
  }

  const [label, color] = logoMarks[name] || [name.slice(0, 2), "#2878d0"];
  return (
    <i className="tech-logo" aria-hidden="true" style={{ "--logo-color": color, color }}>
      {label}
    </i>
  );
}

function ToolChip({ name }) {
  return (
    <span className="tool-chip">
      {realIcons[name] || logoMarks[name] ? <TechLogo name={name} /> : null}
      {name}
    </span>
  );
}

const roles = [
  {
    period: "Jul 2022 – Present",
    title: "DevOps Engineer / SRE",
    company: "SAP Ariba",
    place: "Remote",
    summary:
      "L2/L3 production support and SRE operations across enterprise cloud platforms, release engineering, incident response, automation, and observability.",
    bullets: [
      "Designed and maintained Jenkins, Cloud Build, GitHub, and Rundeck delivery pipelines across development, QA, staging, and production.",
      "Provisioned AWS and GCP infrastructure with Terraform and CloudFormation for secure, fault-tolerant environments.",
      "Operated Kubernetes workloads with rolling deployments, autoscaling, readiness/liveness checks, and resource optimization.",
      "Led major incident bridges, RCA preparation, preventive-action planning, and ServiceNow change workflows.",
      "Built observability workflows with Dynatrace, Splunk, Prometheus, Grafana, Cloud Monitoring, and operational runbooks."
    ],
    stack: ["AWS", "GCP", "Kubernetes", "Terraform", "Jenkins", "Rundeck", "Splunk", "Dynatrace", "Grafana"]
  },
  {
    period: "Oct 2021 – Jun 2022",
    title: "Cloud / DevOps Engineer",
    company: "Verizon",
    place: "Piscataway, NJ",
    summary:
      "Built cloud infrastructure, Kubernetes delivery workflows, infrastructure automation, and monitoring for production workloads.",
    bullets: [
      "Managed Kubernetes deployments with Helm charts, scaling controls, CI/CD workflows, and automated builds.",
      "Implemented AWS services across VPC, IAM, EC2, S3, Lambda, RDS, ALB, Auto Scaling, ECS, and Docker.",
      "Automated infrastructure with Terraform, CloudFormation, and Google Cloud Deployment Manager.",
      "Integrated Jenkins, GitLab Runner, SonarQube, Prometheus, Grafana, Splunk, and Cloud Monitoring."
    ],
    stack: ["AWS", "Kubernetes", "Helm", "Docker", "Terraform", "GitLab", "Jenkins", "Prometheus"]
  },
  {
    period: "Jul 2020 – Sep 2021",
    title: "Cloud / DevOps Engineer",
    company: "GoDaddy",
    place: "Tempe, AZ",
    summary:
      "Supported multi-cloud infrastructure, GKE clusters, Jenkins delivery pipelines, container platforms, and IaC automation.",
    bullets: [
      "Managed GCP infrastructure with Compute Engine, load balancing, Cloud Storage, Cloud SQL, and Cloud Monitoring.",
      "Designed GKE clusters with Helm, kubectl, ingress controllers, and RBAC for secure scalable deployments.",
      "Built AWS infrastructure with CloudFormation and Terraform across VPC, EC2, RDS, DynamoDB, IAM, Route 53, and CloudWatch.",
      "Supported Azure VMs, App Services, Storage, SQL, Azure AD, ARM templates, Bicep, and PowerShell."
    ],
    stack: ["GCP", "GKE", "AWS", "Azure", "Jenkins", "OpenShift", "Terraform", "Python"]
  },
  {
    period: "Apr 2019 – Jun 2020",
    title: "DevOps / Build & Release Engineer",
    company: "UCSF",
    place: "San Francisco, CA",
    summary:
      "Owned build and release workflows, Azure automation, Jenkins jobs, API infrastructure, and data platform support.",
    bullets: [
      "Automated CI/CD pipelines using Jenkins, Docker, AWS CloudFormation, Maven, ANT, and build pipeline plugins.",
      "Designed Azure environments and Datadog dashboards with Terraform and CloudFormation.",
      "Implemented ETL and data workflows with Azure data services, SQL, and Spark-based tooling.",
      "Deployed applications to WebLogic across production and staging environments."
    ],
    stack: ["Azure", "Jenkins", "Terraform", "Datadog", "Maven", "WebLogic", "SQL"]
  },
  {
    period: "Jul 2014 – Jul 2018",
    title: "Linux / Build & Release Engineer",
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
  ["Cloud Platforms", ["AWS", "GCP", "Azure", "EC2", "S3", "RDS", "Cloud SQL", "BigQuery", "VPC", "IAM"]],
  ["Containers & Orchestration", ["Kubernetes", "GKE", "EKS", "Docker", "Helm", "OpenShift", "ECS", "Ingress", "RBAC"]],
  ["Infrastructure as Code", ["Terraform", "CloudFormation", "Ansible", "AWS CDK", "ARM", "Bicep", "Deployment Manager"]],
  ["CI/CD & DevOps", ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Cloud Build", "Rundeck", "Maven", "Bamboo", "Postman"]],
  ["Monitoring & Logging", ["Splunk", "Dynatrace", "Prometheus", "Grafana", "Moogsoft", "Datadog", "SLOs/SLIs", "RCA"]],
  ["Linux & Platform Ops", ["Linux", "RHEL", "CentOS", "Solaris", "LVM", "tcpdump", "DNS", "VLANs", "Shell"]],
  ["Security & Governance", ["Least-privilege IAM", "RBAC", "Delinea PAM", "Bastion hosts", "Key rotation", "SonarQube", "ServiceNow"]],
  ["Data & AI-adjacent", ["BigQuery", "Databricks", "Spark SQL", "Cloud SQL", "MongoDB", "Azure AI Search", "GraphRAG"]]
];

const projects = [
  {
    icon: Network,
    title: "Multi-cloud Reliability Platform",
    copy:
      "Reusable Terraform and CloudFormation patterns for AWS and GCP with Kubernetes standards, monitoring, and secure access controls.",
    problem: "Cloud environments needed repeatable provisioning, consistent access controls, and reliable delivery paths.",
    approach: "Standardized IaC, IAM, Kubernetes deployment patterns, tagging, monitoring, and operational runbooks.",
    outcome: "Improved release consistency, reduced manual infrastructure drift, and supported scalable production operations.",
    tags: ["AWS", "GCP", "Terraform", "Kubernetes"]
  },
  {
    icon: Workflow,
    title: "Release Automation System",
    copy:
      "Controlled CI/CD workflows across Jenkins, Cloud Build, GitHub, GitLab, and Rundeck to reduce manual release work.",
    problem: "Manual handoffs and inconsistent release gates increased deployment risk and slowed production changes.",
    approach: "Automated build, test, promotion, approvals, deployment, verification, rollback, and post-deployment checks.",
    outcome: "Reduced repetitive release work and created clearer, safer production deployment controls.",
    tags: ["Jenkins", "Cloud Build", "GitLab", "Rundeck"]
  },
  {
    icon: TimerReset,
    title: "Incident Response & Observability",
    copy:
      "Operational runbooks, dashboards, alerting, RCA workflows, and remediation automation for production incident response.",
    problem: "Major incidents required faster context, clear ownership, actionable signals, and consistent follow-through.",
    approach: "Connected monitoring signals with runbooks, ServiceNow workflows, RCA templates, and automated remediation steps.",
    outcome: "Improved incident coordination, reduced detection/resolution time, and strengthened preventive-action follow-up.",
    tags: ["SRE", "ServiceNow", "RCA", "Automation"]
  }
];

const technologies = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "GitLab",
  "Prometheus",
  "Grafana",
  "Ansible",
  "Linux"
];

const impactStats = [
  { value: "10+", label: "Years Experience", note: "DevOps, SRE & Linux", icon: Calendar },
  { value: "3", label: "Cloud Platforms", note: "AWS, GCP, Azure", icon: Cloud },
  { value: "24/7", label: "Production Support", note: "Major incident response", icon: Clock },
  { value: "99.96%", label: "SLA Maintained", note: "Production reliability", icon: ShieldCheck },
  { value: "35%", label: "Lower MTTD", note: "Mean Time To Detect", icon: BarChart3 },
  { value: "33%", label: "Lower MTTR", note: "Mean Time To Resolve", icon: BarChart3 },
  { value: "30%", label: "Cost Reduction", note: "Compute optimization", icon: Database },
  { value: "5M+", label: "Users Supported", note: "Enterprise platforms", icon: Users }
];

const focusAreas = [
  ["Reliable Infrastructure", "Scalable cloud and Kubernetes platforms", Server],
  ["Automation First", "Less manual work, more repeatability", Workflow],
  ["Observability Driven", "Monitor, measure, detect, improve", BarChart3],
  ["Secure by Design", "IAM, RBAC, governance, controlled access", ShieldCheck]
];

const aiReliability = [
  "AI/ML platform support for GenAI and LLM inference workloads",
  "Azure AI Search and GraphRAG concepts for incident knowledge retrieval",
  "Anomaly-detection workflows connected to incident remediation",
  "Human-in-the-loop operations patterns for safer assisted triage"
];

const credentials = [
  {
    group: "Certification",
    image: `${import.meta.env.BASE_URL}aws-solutions-architect-associate.png`,
    imageAlt: "AWS Certified Solutions Architect Associate badge",
    items: [
      {
        label: "AWS Certified Solutions Architect - Associate",
        href: "https://www.credly.com/badges/8c46e207-9737-481f-ab89-d2f7a4a3a9bb/public_url",
        note: "Verify on Credly"
      }
    ]
  },
  {
    group: "Education",
    items: [
      { label: "M.S. Information Systems Technologies - Wilmington University, 2021" },
      { label: "B.Tech Computer Science Engineering - JNTUH, India, 2014" }
    ]
  }
];

const resumeUrl = `${import.meta.env.BASE_URL}MOHAMMED-CV-SRE.pdf`;

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Sabeelullah K Mohammed home">
      <span className="brand-mark" aria-hidden="true">
        <span>S</span><span>K</span><span>M</span>
      </span>
      <span className="brand-photo" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}sab.png`} alt="" />
      </span>
      <span className="brand-copy">
        <strong>SABEELULLAH K MOHAMMED</strong>
        <small>DevOps | Cloud | SRE</small>
      </span>
    </a>
  );
}

function App() {
  const [openRole, setOpenRole] = useState(0);

  return (
    <main>
      <header className="site-header">
        <Brand />
        <nav aria-label="Primary navigation">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Experience", "experience"],
            ["Skills", "skills"],
            ["Projects", "projects"],
            ["Contact", "contact"]
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={resumeUrl} download>
          <Download size={16} /> Download Resume
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-geometry hero-geometry-left" aria-hidden="true" />
        <div className="hero-geometry hero-geometry-right" aria-hidden="true" />
        <div className="hero-dots" aria-hidden="true" />
        <div className="hero-sparkles" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
        </div>

        <div className="hero-copy">
          <div className="hero-portrait" aria-label="Portrait of Sabeelullah K Mohammed">
            <img src={`${import.meta.env.BASE_URL}sab.png`} alt="Sabeelullah K Mohammed" />
          </div>
          <div className="hero-triad">CLOUD <b>|</b> AUTOMATION <b>|</b> RELIABILITY</div>
          <h1>
            <span>SABEELULLAH K</span>
            <span>MOHAMMED</span>
            <i className="name-sparkle name-sparkle-one" aria-hidden="true" />
            <i className="name-sparkle name-sparkle-two" aria-hidden="true" />
            <i className="name-sparkle name-sparkle-three" aria-hidden="true" />
          </h1>
          <h2 className="hero-statement">Building reliable cloud platforms with automation and observability.</h2>
          <div className="hero-keywords">DEVOPS <b>|</b> CLOUD <b>|</b> AUTOMATION <b>|</b> OBSERVABILITY</div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              <ArrowRight size={17} /> View My Work
            </a>
            <a className="button secondary" href={resumeUrl} download>
              <Download size={17} /> Download Resume
            </a>
          </div>
          <p className="hero-location">
            <MapPin size={18} /> Englewood, New Jersey · Open to SRE, DevOps, Cloud & Platform Engineering roles
          </p>
        </div>

        <div className="hero-logos hero-logos-left" aria-hidden="true">
          <div className="signal-card aws"><TechLogo name="AWS" /></div>
          <div className="signal-card docker"><TechLogo name="Docker" /></div>
          <div className="signal-card jenkins"><TechLogo name="Jenkins" /></div>
        </div>
        <div className="hero-logos hero-logos-right" aria-hidden="true">
          <div className="signal-card k8s"><TechLogo name="Kubernetes" /></div>
          <div className="signal-card terraform"><TechLogo name="Terraform" /></div>
          <div className="signal-card github"><TechLogo name="GitHub" /></div>
        </div>

        <p className="hero-side-note hero-side-note-left">TURNING INFRASTRUCTURE INTO OPPORTUNITY</p>
        <p className="hero-side-note hero-side-note-right">AUTOMATE<br />MONITOR<br />SCALE</p>
      </section>

      <section className="technology-rail" aria-label="Technology toolkit">
        <div className="technology-heading"><span /> TECHNOLOGY THAT KEEPS PRODUCTION MOVING</div>
        <div className="technology-marquee" aria-hidden="true">
          <div className="technology-track">
            {[...technologies, ...technologies].map((technology, index) => (
              <div className="technology-item" key={`${technology}-${index}`}>
                <TechLogo name={technology} />
                <small>{technology.replace("Microsoft ", "")}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="technology-values">
          <span>INFRASTRUCTURE</span>
          <span>AUTOMATION</span>
          <span>OBSERVABILITY</span>
          <span>RELIABILITY</span>
        </div>
      </section>

      <section className="impact-strip" aria-label="Impact metrics">
        {impactStats.map(({ value, label, note, icon: Icon }, index) => (
          <article className={`impact-card impact-card-${index + 1}`} key={label}>
            <span className="impact-icon"><Icon size={21} /></span>
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{note}</small>
          </article>
        ))}
      </section>

      <section id="about" className="about-section">
        <div className="about-copy">
          <p className="section-label">About Me</p>
          <h2>DevOps Engineer &amp; SRE with a cloud-first mindset</h2>
          <p>
            I’m Sabeelullah K Mohammed, a DevOps and SRE engineer with 10+ years of experience building,
            automating, and operating production infrastructure. My work spans AWS, GCP, Azure,
            Kubernetes, Terraform, CI/CD, Linux, observability, release engineering, and incident response.
          </p>
          <p>
            I focus on reliable systems, controlled delivery, measurable operations, and practical automation
            that helps teams move faster without sacrificing production stability.
          </p>
          <a className="button primary compact" href="#experience">
            More About Me <ArrowRight size={16} />
          </a>
        </div>

        <div className="focus-list">
          {focusAreas.map(([title, copy, Icon]) => (
            <article className="focus-row" key={title}>
              <span><Icon size={20} /></span>
              <div>
                <strong>{title}</strong>
                <small>{copy}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="about-visual" aria-hidden="true">
          <div className="mountain mountain-back" />
          <div className="mountain mountain-mid" />
          <div className="mountain mountain-front" />
          <blockquote>“Automate today<br />for a better tomorrow.”</blockquote>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Professional Experience</p>
            <h2>Production-focused engineering journey</h2>
          </div>
          <a href={resumeUrl} download>View Full Resume <ArrowRight size={15} /></a>
        </div>

        <div className="timeline-grid">
          {roles.map((role, index) => (
            <article className={`role ${openRole === index ? "open" : ""}`} key={`${role.company}-${role.period}`}>
              <button type="button" onClick={() => setOpenRole(openRole === index ? -1 : index)}>
                <span className="timeline-dot" />
                <span className="period">{role.period}</span>
                <strong>{role.title}</strong>
                <span className="role-company">{role.company}</span>
                <small><MapPin size={13} /> {role.place}</small>
                <ChevronDown size={18} className="role-chevron" />
              </button>
              <div className="role-detail">
                <p>{role.summary}</p>
                <ul>
                  {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tags">
                  {role.stack.map((tag) => <ToolChip key={tag} name={tag} />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Skills &amp; Tools</p>
            <h2>Tooling across the reliability lifecycle</h2>
          </div>
          <a href="#contact">Let’s Connect <ArrowRight size={15} /></a>
        </div>

        <div className="skill-grid">
          {skills.map(([group, items]) => (
            <article className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-items">
                {items.map((item) => <ToolChip key={item} name={item} />)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Featured Projects</p>
            <h2>Selected reliability work</h2>
          </div>
          <a href="#contact">Discuss a Project <ArrowRight size={15} /></a>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-icon"><Icon size={24} /></div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <details>
                    <summary>Case study details</summary>
                    <dl className="case-details">
                      <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                      <div><dt>Approach</dt><dd>{project.approach}</dd></div>
                      <div><dt>Outcome</dt><dd>{project.outcome}</dd></div>
                    </dl>
                  </details>
                  <div className="tags">
                    {project.tags.map((tag) => <ToolChip key={tag} name={tag} />)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ai-section">
        <div className="section-intro">
          <p className="section-label">Applied AI Reliability</p>
          <h2>AI-assisted operations as a secondary specialization</h2>
          <p>Reliability work increasingly depends on better signal handling, knowledge retrieval, and careful human-in-the-loop automation.</p>
        </div>
        <div className="ai-grid">
          {aiReliability.map((item) => (
            <article className="ai-card" key={item}>
              <TerminalSquare size={22} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="certifications-section">
        <div className="section-intro">
          <p className="section-label">Credentials</p>
          <h2>Certification &amp; education</h2>
        </div>
        <div className="credential-grid">
          {credentials.map((credential) => (
            <article className="credential-card" key={credential.group}>
              <h3>{credential.group}</h3>
              {credential.image ? (
                <img className="credential-badge" src={credential.image} alt={credential.imageAlt} />
              ) : null}
              <ul>
                {credential.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.label} <ExternalLink size={13} />
                      </a>
                    ) : item.label}
                    {item.note ? <small>{item.note}</small> : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="section-label">Let’s Connect</p>
          <h2>Open to opportunities</h2>
          <p>I’m open to SRE, DevOps, Cloud, Kubernetes, Linux, Terraform, and platform engineering opportunities.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:mohdsab1525@gmail.com">
            <span className="contact-icon"><Mail size={20} /></span>
            <span><small>Email</small><strong>mohdsab1525@gmail.com</strong></span>
          </a>
          <a href="https://www.linkedin.com/in/k-mohammed-646892217" target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaLinkedin size={19} /></span>
            <span><small>LinkedIn</small><strong>Connect on LinkedIn</strong></span>
          </a>
          <div className="contact-location">
            <span className="contact-icon"><MapPin size={20} /></span>
            <span><small>Location</small><strong>Englewood, New Jersey, USA</strong></span>
          </div>
        </div>
        <a className="button primary contact-cta" href="mailto:mohdsab1525@gmail.com">
          Get In Touch <ArrowRight size={17} />
        </a>
      </section>

      <footer>
        <Brand />
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/mohammed-DevRE" target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub /></a>
          <a href="https://www.linkedin.com/in/k-mohammed-646892217" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:mohdsab1525@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        <small>© 2026 Sabeelullah K Mohammed · Built for reliable cloud-native systems.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
