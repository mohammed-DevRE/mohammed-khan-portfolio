import React, { useEffect, useState } from "react";
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
  Eye,
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
    "period": "Jul 2022 – Present",
    "title": "DevOps Engineer",
    "company": "SAP Ariba",
    "place": "Remote",
    "summary": "SRE and L2/L3 production support across enterprise platforms, with cloud automation, Kubernetes delivery, and incident response.",
    "bullets": [
      "Migrated GitLab repositories to GitHub and converted GitLab CI/CD pipelines into GitHub Actions YAML workflows for automated builds, tests, and deployments.",
      "Manage branching, merging, tagging, and releases; partner with developers on pull requests, code reviews, migration guidance, and engineering standards.",
      "Design multi-stage pipelines with GitHub Actions, Jenkins, Cloud Build, and Rundeck across development, QA, staging, and production.",
      "Deploy Docker and Kubernetes workloads on GKE/EKS; provision AWS and GCP infrastructure with Terraform and CloudFormation.",
      "Automate operational workflows with Python, Shell, Perl, and Rundeck; troubleshoot build and deployment failures using logs, JVM diagnostics, and observability tools.",
      "Use Splunk and Dynatrace to investigate production issues. Coordinate major incident triage, root-cause analysis, and preventive actions."
    ],
    "stack": [
      "GitHub Actions",
      "GitLab",
      "Jenkins",
      "Python",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GCP",
      "Rundeck"
    ]
  },
  {
    "period": "Oct 2021 – Jun 2022",
    "title": "SRE/DevOps Engineer",
    "company": "Verizon",
    "place": "Piscataway, NJ",
    "summary": "Repository and pipeline migration, Kubernetes delivery, cloud infrastructure automation, and application reliability.",
    "bullets": [
      "Migrated GitLab repositories and CI/CD pipelines to GitHub and GitHub Actions using YAML workflows and GitHub-hosted runners.",
      "Resolved migration-related build and deployment failures through workflow log analysis and root-cause troubleshooting.",
      "Managed Kubernetes deployments with Helm and built Jenkins/GitLab Runner pipelines with automated tests and SonarQube checks.",
      "Automated infrastructure with Terraform and CloudFormation; supported AWS, Docker, ECS, Python Lambda functions, and monitoring with Prometheus, Grafana, and Splunk."
    ],
    "stack": [
      "GitHub Actions",
      "GitLab",
      "Jenkins",
      "AWS",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Prometheus"
    ]
  },
  {
    "period": "Jul 2020 – Sep 2021",
    "title": "Cloud/DevOps Engineer",
    "company": "GoDaddy",
    "place": "Tempe, AZ",
    "summary": "GitHub repository consolidation, Jenkins delivery pipelines, container platforms, and multi-cloud infrastructure automation.",
    "bullets": [
      "Migrated repositories from GitLab, Azure DevOps, and Bitbucket to GitHub while preserving commit history, branches, and tags.",
      "Used Git, GitHub CLI, and GitHub REST APIs for repository migration and configuration workflows.",
      "Built Jenkins CI/CD pipelines with automated tests and artifact management using Maven, Nexus, and Artifactory.",
      "Managed GCP/GKE infrastructure with Helm, kubectl, ingress, and RBAC; automated AWS and Azure environments with Terraform, CloudFormation, PowerShell, and Python."
    ],
    "stack": [
      "GitHub",
      "GitHub CLI",
      "GitLab",
      "Jenkins",
      "GKE",
      "Terraform",
      "Python",
      "Azure"
    ]
  },
  {
    "period": "Apr 2019 – Jun 2020",
    "title": "DevOps Engineer/Build and Release Engineer",
    "company": "UCSF",
    "place": "San Francisco, CA",
    "summary": "Source control, secure CI/CD workflows, build automation, and multi-environment release coordination.",
    "bullets": [
      "Built GitHub repositories and GitHub Actions YAML workflows for automated builds, testing, and deployments.",
      "Established branching, merging, pull request, code review, and release management practices.",
      "Managed repository access, token security, secrets, and automated security scanning.",
      "Maintained Jenkins and multi-stage CI/CD pipelines; automated packaging and deployments with Docker, Maven, Ant, Terraform, and CloudFormation."
    ],
    "stack": [
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Maven",
      "Terraform",
      "CloudFormation"
    ]
  },
  {
    "period": "Apr 2015 – Jul 2018",
    "title": "Build and Release Engineer",
    "company": "Google",
    "place": "Hyderabad, India",
    "summary": "Build infrastructure, software packaging, release support, and Linux automation.",
    "bullets": [
      "Configured and maintained build servers, CI/CD pipelines, and source repositories; resolved compilation, integration, and release issues.",
      "Supported packaging, deployment readiness, release documentation, and post-release reviews.",
      "Automated Linux administration and environment configuration with Shell scripts and Infrastructure as Code practices.",
      "Administered Red Hat Linux systems, Kickstart/PXE provisioning, access controls, LVM, backups, and upgrades."
    ],
    "stack": [
      "Linux",
      "RHEL",
      "Shell",
      "CI/CD",
      "Kickstart",
      "PXE",
      "LVM"
    ]
  },
  {
    "period": "Jul 2014 – Mar 2015",
    "title": "Linux Engineer",
    "company": "Excela Solutions",
    "place": "Hyderabad, India",
    "summary": "UNIX/Linux administration, server provisioning, access management, and production maintenance.",
    "bullets": [
      "Installed, secured, patched, backed up, and upgraded Red Hat Linux systems.",
      "Automated maintenance with Shell scripts and provisioned servers with Kickstart and PXE.",
      "Managed users, groups, permissions, LVM storage, and UNIX/Linux/Solaris troubleshooting."
    ],
    "stack": [
      "Linux",
      "RHEL",
      "Solaris",
      "Shell",
      "Kickstart",
      "PXE",
      "LVM"
    ]
  }
];

const skills = [
  [
    "Source Control & Migration",
    [
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Bitbucket",
      "GitHub CLI",
      "GitHub REST API",
      "History / Branch / Tag Migration"
    ]
  ],
  [
    "CI/CD & Release Engineering",
    [
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "Reusable Workflows",
      "YAML",
      "GitHub-hosted Runners",
      "Release Management",
      "Pipeline Validation"
    ]
  ],
  [
    "Build & Artifact Management",
    [
      "Maven",
      "Ant",
      "SonarQube",
      "Nexus",
      "JFrog Artifactory",
      "Cloud Build",
      "Rundeck"
    ]
  ],
  [
    "Automation & Infrastructure",
    [
      "Python",
      "Bash",
      "Shell",
      "PowerShell",
      "Terraform",
      "Ansible",
      "CloudFormation",
      "Argo CD"
    ]
  ],
  [
    "Cloud & Containers",
    [
      "AWS",
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "GKE",
      "EKS",
      "Helm",
      "OpenShift"
    ]
  ],
  [
    "Security & Governance",
    [
      "Repository Permissions",
      "Branch Protection",
      "Secrets Management",
      "IAM",
      "RBAC",
      "Key rotation",
      "DevSecOps"
    ]
  ],
  [
    "Observability & Operations",
    [
      "Dynatrace",
      "Splunk",
      "Prometheus",
      "Grafana",
      "Moogsoft",
      "Cloud Monitoring",
      "ServiceNow",
      "RCA"
    ]
  ],
  [
    "Linux & Systems",
    [
      "Linux",
      "RHEL",
      "Solaris",
      "LVM",
      "Kickstart",
      "PXE",
      "Shell"
    ]
  ]
];

const migrationProjects = [
  { icon: Network, title: "GitHub Repository Migration", copy: "Source code migrations from GitLab, Azure DevOps, and Bitbucket to GitHub.", problem: "Development teams needed to consolidate source repositories without losing version history.", approach: "Used Git, GitHub CLI, and REST APIs to migrate repositories while preserving commit history, branches, and tags.", outcome: "Preserved source history and supported standardized GitHub development workflows.", tags: ["GitHub", "GitLab", "GitHub CLI", "REST APIs"] },
  { icon: Workflow, title: "GitHub Actions & Release Automation", copy: "GitLab CI/CD conversion and multi-stage delivery across development, QA, staging, and production.", problem: "Existing pipelines needed to transition to GitHub Actions and support repeatable delivery.", approach: "Converted pipeline configurations into YAML workflows for builds, tests, and deployments; investigated execution logs and resolved migration failures.", outcome: "Enabled automated delivery workflows on GitHub and repeatable pipeline troubleshooting.", tags: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "YAML"] },
];

const projects = [
  { icon: TimerReset, title: "Cloud Delivery & Production Reliability", copy: "Kubernetes deployments, infrastructure automation, and incident response supporting application releases.", problem: "Application releases depended on consistent environments and actionable production diagnostics.", approach: "Used Terraform, CloudFormation, Docker, Kubernetes, observability tools, and ServiceNow incident/change workflows.", outcome: "Supported controlled deployments, root-cause analysis, and preventive operational actions.", tags: ["Terraform", "Kubernetes", "AWS", "GCP"] },
  { icon: BarChart3, title: "Production Observability & Incident Response", copy: "Production triage, service recovery, and follow-up for enterprise applications.", problem: "Major incidents required teams to correlate application symptoms with service and infrastructure signals.", approach: "Used Splunk logs and Dynatrace APM, coordinated incident bridges, and documented root causes and preventive actions.", outcome: "Supported triage, stakeholder updates, and follow-up after major incidents.", tags: ["Splunk", "Dynatrace", "RHEL"] }
];

const sreAnimations = [
  { file: "sre-eks-rollout", category: "AWS / Kubernetes", title: "Rolling out an EKS deployment", description: "Illustrative workflow covering build checks, rolling updates, pod readiness, health verification, and rollback." },
  { file: "sre-incident-response", category: "Production Support", title: "Responding to a production incident", description: "Illustrative workflow covering alert triage, Splunk and Dynatrace investigation, mitigation, verification, and root-cause follow-up." },
];

const technologies = [
  "GitHub Actions",
  "GitHub",
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
  { value: "10+", label: "Years Experience", note: "Build, release, DevOps & SRE", icon: Calendar },
  { value: "EKS", label: "Kubernetes Operations", note: "Rollouts, scaling & readiness", icon: Server },
  { value: "CI/CD", label: "Pipeline Engineering", note: "GitHub Actions & Jenkins", icon: Workflow },
  { value: "3", label: "Cloud Platforms", note: "AWS, GCP & Azure", icon: Cloud }
];

const focusAreas = [
  ["Reliable Infrastructure", "Scalable cloud and Kubernetes platforms", Server],
  ["Automation First", "Less manual work, more repeatability", Workflow],
  ["Observability Driven", "Monitor, measure, detect, improve", BarChart3],
  ["Secure by Design", "IAM, RBAC, governance, controlled access", ShieldCheck]
];

const deliveryPractices = [
  "Provision AWS environments with Terraform and CloudFormation",
  "Validate builds and automate releases with GitHub Actions and Jenkins",
  "Roll out Kubernetes changes with readiness checks and verify service health",
  "Use logs and APM to triage incidents and document preventive actions"
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

const resumeUrl = `${import.meta.env.BASE_URL}resume-preview/index.html`;

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Sabeelullah K Mohammed home">
      <span className="brand-mark" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}skm-logo.png`} alt="" />
      </span>
      <span className="brand-avatar" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}sab.png`} alt="" />
      </span>
      <span className="brand-copy">
        <strong>SABEELULLAH K MOHAMMED</strong>
        <small>SRE | AWS DevOps | Production Support</small>
      </span>
    </a>
  );
}

function App() {
  const [openRole, setOpenRole] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main>
      <div className={`welcome-loader${introVisible ? "" : " welcome-loader-hidden"}`} aria-hidden={!introVisible}>
        <div className="welcome-loader-card">
          <div className="welcome-loader-photo">
            <img src={`${import.meta.env.BASE_URL}sab.png`} alt="" />
          </div>
          <div>
            <span>Welcome to</span>
            <strong>SABEEL&apos;s portfolio</strong>
          </div>
        </div>
      </div>
      <div className="page-sparkles" aria-hidden="true">
        {Array.from({ length: 32 }).map((_, index) => <i key={index} />)}
      </div>
      <div className="flash-lines" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, index) => <i key={index} />)}
      </div>
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
        <a className="header-cta" href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Eye size={16} /> View Resume
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
          <div className="hero-triad">BUILD <b>|</b> RELEASE <b>|</b> RELIABILITY</div>
          <div className="hero-name-wrap">
            <div className="hero-name-waves" aria-hidden="true"><i /><i /></div>
          <h1>
            <span className="hero-name-line"><b className="glass-name glass-name-ice">SABEELULLAH</b>{" "}<b className="glass-name glass-name-gold">K</b></span>
            <span className="glass-name glass-name-teal">MOHAMMED</span>
            <i className="name-sparkle name-sparkle-one" aria-hidden="true" />
            <i className="name-sparkle name-sparkle-two" aria-hidden="true" />
            <i className="name-sparkle name-sparkle-three" aria-hidden="true" />
          </h1>
          </div>
          <h2 className="hero-statement">Site Reliability Engineer | AWS DevOps | AWS Certified Solutions Architect – Associate</h2>
          <div className="hero-keywords">AWS / EKS <b>|</b> GITHUB ACTIONS <b>|</b> PRODUCTION SUPPORT</div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              <ArrowRight size={17} /> View My Work
            </a>
            <a className="button secondary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Eye size={17} /> View Resume
            </a>
          </div>
          <p className="hero-location">
            <MapPin size={18} /> New Jersey · Open to SRE, AWS DevOps and production support roles
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

        <a className="hero-certification" href="#certifications" aria-label="AWS Certified Solutions Architect Associate — view certification">
          <span className="hero-certification-art">
            <img className="credential-badge" src={`${import.meta.env.BASE_URL}aws-solutions-architect-associate.png`} alt="AWS Certified Solutions Architect Associate" width="120" height="120" />
          </span>
          <span>AWS Certified <ArrowRight size={12} aria-hidden="true" /></span>
        </a>
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
          <h2>Keeping production services healthy</h2>
          <p>
            I’m Sabeelullah K Mohammed. My experience spans site reliability engineering, AWS DevOps,
            and L2/L3 production support for enterprise applications.
          </p>
          <p>
            I operate Kubernetes workloads on Amazon EKS, provision cloud infrastructure with Terraform
            and CloudFormation, and automate build, test, and deployment workflows with GitHub Actions
            and Jenkins. In production, I use Splunk logs, Dynatrace APM, and CloudWatch metrics to
            diagnose issues, support incident response, and verify recovery. My Linux background includes RHEL administration.
          </p>
          <div className="about-actions">
            <a className="button primary compact" href="#experience">
              More About Me <ArrowRight size={16} />
            </a>
            <div className="about-mini-stats" aria-label="Profile highlights">
              <span><BadgeCheck size={21} /><strong>10+</strong><small>Years Experience</small></span>
              <span><Cloud size={23} /><strong>3</strong><small>Cloud Platforms</small></span>
              <span><Workflow size={22} /><strong>CI/CD</strong><small>Release Automation</small></span>
            </div>
          </div>
        </div>

        <div className="focus-list">
          {focusAreas.map(([title, copy, Icon], index) => (
            <article className={`focus-row focus-row-${index + 1}`} key={title}>
              <span><Icon size={20} /></span>
              <div>
                <strong>{title}</strong>
                <small>{copy}</small>
              </div>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <ArrowRight size={23} className="focus-arrow" />
            </article>
          ))}
        </div>

        <div className="about-visual" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}mountain-trees.png`} alt="" />
          <blockquote>“Automate today<br />for a better tomorrow.”</blockquote>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Professional Experience</p>
            <h2>Production-focused engineering journey</h2>
          </div>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">View Full Resume <ArrowRight size={15} /></a>
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

        <div className="sre-workflows">
          {sreAnimations.map(({ file, category, title, description }) => (
            <figure className="workflow-showcase" key={file}>
              <div className="workflow-heading">
                <div><p className="section-label">{category}</p><h3>{title}</h3></div>
                <a href={`${import.meta.env.BASE_URL}${file}.gif`} target="_blank" rel="noopener noreferrer">View GIF <ExternalLink size={15} /></a>
              </div>
              <picture>
                <source media="(prefers-reduced-motion: reduce)" srcSet={`${import.meta.env.BASE_URL}${file}.png`} />
                <img className="sre-workflow-gif" src={`${import.meta.env.BASE_URL}${file}.gif`} alt={description} width="1056" height="594" loading="lazy" />
              </picture>
              <figcaption>{description}</figcaption>
            </figure>
          ))}
        </div>

        <details className="workflow-showcase migration-details">
          <summary>GitHub Migration &amp; CI/CD</summary>
          <figure className="workflow-showcase">
          <div className="workflow-heading">
            <div><p className="section-label">GitHub Migration &amp; CI/CD</p><h3>From legacy repositories to reusable workflows</h3></div>
            <a href={`${import.meta.env.BASE_URL}github-migration-workflow.gif`} target="_blank" rel="noopener noreferrer">View GIF <ExternalLink size={15} /></a>
          </div>
          <video className="workflow-animation" loop muted playsInline controls preload="none" poster={`${import.meta.env.BASE_URL}github-migration-workflow.png`} aria-label="Illustrative GitHub migration and delivery workflow: migrate repositories, convert to reusable GitHub Actions YAML, build and test, secure, approve, and release.">
            <source src={`${import.meta.env.BASE_URL}github-migration-workflow.mp4`} type="video/mp4" />
            <a href={`${import.meta.env.BASE_URL}github-migration-workflow.gif`}>View animated GitHub migration workflow</a>
          </video>
          <img className="workflow-still" src={`${import.meta.env.BASE_URL}github-migration-workflow.png`} alt="GitLab, Azure DevOps, and Bitbucket to GitHub: migrate, convert, build and test, secure, approve, and release." width="1200" height="675" loading="lazy" />
          <figcaption>Illustrative workflow: preserve source history, translate pipelines into reusable GitHub Actions, and validate controlled releases.</figcaption>
        </figure>
          <div className="migration-projects">
            {migrationProjects.map(({ title, copy, approach, outcome }) => (
              <article key={title}><h4>{title}</h4><p>{copy} {approach} {outcome}</p></article>
            ))}
          </div>
        </details>

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
          <p className="section-label">SRE &amp; Delivery Practices</p>
          <h2>Reliable delivery and production support</h2>
          <p>Infrastructure automation, deployment validation, observability, and incident response.</p>
        </div>
        <div className="ai-grid">
          {deliveryPractices.map((item) => (
            <article className="ai-card" key={item}>
              <TerminalSquare size={22} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="certifications-section">
        <div className="credential-sparkles" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, index) => <i key={index} />)}
        </div>
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
          <p>I’m open to SRE, AWS DevOps, and production support opportunities.</p>
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
            <span><small>Location</small><strong>New Jersey</strong></span>
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
        <small>© 2026 Sabeelullah K Mohammed · All rights reserved · Built for reliable cloud-native systems.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
