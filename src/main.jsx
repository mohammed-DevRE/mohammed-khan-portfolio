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
  ["Cloud & Infrastructure", ["AWS", "GCP", "Azure", "EC2", "S3", "RDS", "Cloud SQL", "BigQuery", "Pub/Sub", "VPC", "IAM"]],
  ["Containers & Orchestration", ["Kubernetes", "GKE", "EKS", "Docker", "Helm", "OpenShift", "ECS", "Ingress", "RBAC"]],
  ["Infrastructure as Code", ["Terraform", "CloudFormation", "Ansible", "AWS CDK", "ARM", "Bicep", "Deployment Manager"]],
  ["Reliability & Observability", ["SLOs/SLIs", "Incident response", "RCA", "Runbooks", "Splunk", "Dynatrace", "Prometheus", "Grafana", "Moogsoft"]],
  ["CI/CD & Automation", ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Cloud Build", "Rundeck", "Maven", "Bamboo", "Postman"]],
  ["Security & Governance", ["Least-privilege IAM", "RBAC", "Delinea PAM", "RSA", "Bastion hosts", "Key rotation", "SonarQube"]],
  ["Linux & Platform Operations", ["Linux", "RHEL", "CentOS", "Solaris", "LVM", "Ceph basics", "tcpdump", "DNS", "VLANs"]],
  ["Data & AI-adjacent Platforms", ["BigQuery", "Databricks", "Spark SQL", "Cloud SQL", "MongoDB", "Azure AI Search", "GraphRAG"]]
];

const projects = [
  {
    icon: Network,
    title: "Multi-cloud Reliability Platform",
    copy:
      "Terraform and CloudFormation infrastructure patterns for AWS and GCP with Kubernetes deployment standards, monitoring, and secure access controls.",
    problem: "Cloud services need repeatable provisioning, consistent access controls, and reliable deployment paths across multiple environments.",
    approach: "Used Terraform, CloudFormation, IAM, Kubernetes standards, tagging, and monitoring patterns to make environments easier to reproduce and operate.",
    outcome: "Improved release consistency, reduced manual infrastructure drift, and supported scalable operations across AWS and GCP workloads.",
    tags: ["AWS", "GCP", "Terraform", "Kubernetes"]
  },
  {
    icon: Workflow,
    title: "Release Automation System",
    copy:
      "CI/CD workflows across Jenkins, Cloud Build, GitHub, GitLab, and Rundeck to reduce manual release work and improve controlled production delivery.",
    problem: "Manual handoffs and inconsistent release gates increase deployment risk and slow down production changes.",
    approach: "Built CI/CD workflows with automated build, test, promotion, and controlled release steps across Jenkins, Cloud Build, GitHub, GitLab, and Rundeck.",
    outcome: "Reduced repetitive release work and gave teams clearer production deployment controls across dev, QA, staging, and production.",
    tags: ["Jenkins", "Cloud Build", "GitLab", "Rundeck"]
  },
  {
    icon: TimerReset,
    title: "Incident Response Runbooks",
    copy:
      "Operational runbooks and monitoring workflows for MI/CIRS response, RCA readiness, anomaly detection, and ServiceNow-driven follow-up.",
    problem: "During major incidents, teams need fast context, clear ownership, and consistent follow-up to reduce repeat issues.",
    approach: "Created runbooks, dashboards, ServiceNow workflows, RCA templates, and remediation automations using monitoring signals and Rundeck scripts.",
    outcome: "Improved incident coordination, RCA readiness, and follow-through on preventive actions for production platforms.",
    tags: ["SRE", "ServiceNow", "RCA", "Automation"]
  }
];

const quickFacts = [
  ["10+ years", "DevOps, SRE, cloud and Linux engineering"],
  ["3 clouds", "AWS, GCP, and Azure production exposure"],
  ["24/7 ops", "Major incident response and production support"],
  ["IaC first", "Terraform, CloudFormation, Ansible, CDK"],
  ["Global ops", "US, EU, Brazil, and multi-cloud platform support"],
  ["L2/L3", "Production support, RCA, JVM, Linux, storage, and network triage"],
  ["Automation", "Shell, Python, Perl, Rundeck, CI/CD, and runbooks"]
];

const focusAreas = [
  {
    title: "Reliability Engineering",
    copy: "Incident response, RCA, production readiness, runbooks, monitoring discipline, and operational improvements."
  },
  {
    title: "Observability",
    copy: "Logs, metrics, dashboards, alerts, Splunk, Dynatrace, Prometheus, Grafana, CloudWatch, and Cloud Monitoring."
  },
  {
    title: "Cloud Platform Engineering",
    copy: "AWS, GCP, Azure, Kubernetes, Terraform, CloudFormation, IAM, networking, and platform operations."
  },
  {
    title: "Delivery Automation",
    copy: "Jenkins, GitLab CI/CD, GitHub Actions, Cloud Build, Rundeck, Maven, release controls, and deployment workflows."
  },
  {
    title: "DevSecOps & Governance",
    copy: "IAM, RBAC, PAM, bastion access, key rotation, SonarQube, access reviews, and compliance-minded operations."
  },
  {
    title: "FinOps & Optimization",
    copy: "Right-sizing, tagging, labels, budget monitoring, resource cleanup, and performance-aware cloud cost controls."
  }
];

const aiReliability = [
  "AI/ML platform support for GenAI and LLM inference workloads",
  "Azure AI Search and GraphRAG concepts for incident knowledge retrieval",
  "Anomaly detection workflows connected to incident remediation",
  "Human-in-the-loop operations patterns for safer assisted triage"
];

const credentials = [
  {
    group: "Certification",
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
      { label: "M.S. Information Technology - Wilmington University, Delaware, 2021" },
      { label: "B.Tech Computer Science Engineering - JNTUH, India, 2014" }
    ]
  }
];

const resumeUrl = `${import.meta.env.BASE_URL}MOHAMMED-CV-SRE.pdf`;

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
          {["About", "Experience", "Projects", "Skills", "Certifications", "Resume", "Contact"].map((item) => (
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
            <a className="button secondary" href={resumeUrl} download>
              <Download size={18} /> Download Resume
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
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
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
                <dl className="case-details">
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
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
          <h2>Tooling across the reliability lifecycle</h2>
          <p>A practical toolkit for building, operating, securing, observing, and improving modern platforms.</p>
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

      <section id="certifications" className="certifications">
        <div className="section-intro">
          <p className="section-label">Certifications</p>
          <h2>Credentials and education</h2>
          <p>Cloud certification and formal education behind the platform engineering work.</p>
        </div>
        <div className="credential-grid">
          {credentials.map((credential) => (
            <article className="credential-card" key={credential.group}>
              <h3>{credential.group}</h3>
              <ul>
                {credential.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                        <ExternalLink size={14} />
                      </a>
                    ) : item.label}
                    {item.note ? <span>{item.note}</span> : null}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="resume" className="resume-band">
        <div>
          <p className="section-label">Resume</p>
          <h2>Download my resume</h2>
          <p>PDF resume with SRE, DevOps, cloud, Linux, automation, and observability experience.</p>
        </div>
        <div className="resume-card">
          <BookOpen size={32} />
          <div>
            <strong>MOHAMMED-CV-SRE.pdf</strong>
            <span>Senior DevOps / SRE resume</span>
          </div>
          <a className="button secondary" href={resumeUrl} download>
            <Download size={18} /> Download
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
