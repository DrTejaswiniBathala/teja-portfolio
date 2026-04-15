import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// Replace this with your actual image import
// import profileImg from "./assets/tejaswini.jpg";
import profileImg from "./assets/tejaswini.jpg";

function App() {
  const ventures = [
    {
      tag: "Flagship Platform",
      title: "TeSh Acad International Consultants",
      description:
        "The central platform of my professional portfolio, focused on academic consulting, mentoring, international opportunities, strategic growth support, and long-term value creation.",
      bullets: [
        "Academic consulting and professional support",
        "Mentoring, guidance, and growth pathways",
        "International and institutional opportunity orientation",
        "Core brand and long-term professional platform",
      ],
      link: "https://teshacad.org/",
      featured: true,
    },
    {
      tag: "Creative Venture",
      title: "TeSh Events",
      description:
        "A platform dedicated to creative event planning, curated experiences, milestone celebrations, elegant presentations, and people-centered execution.",
      bullets: [
        "Creative planning and event experiences",
        "Presentation-driven celebrations and occasions",
        "Brand-conscious and visually elegant execution",
      ],
      link: "https://tesh-events.vercel.app/",
      featured: false,
    },
    {
      tag: "Guidance Platform",
      title: "AstroTej",
      description:
        "My modern Vedic astrology and guidance platform, built around clarity, spiritual insight, personal support, and thoughtful consultation.",
      bullets: [
        "Modern Vedic astrology consultations",
        "Personal clarity and direction-focused sessions",
        "Professionally presented spiritual guidance platform",
      ],
      link: "https://drtejaswiniastrology.com/",
      featured: false,
    },
  ];

  const projects = [
    {
  label: "ONGOING WORK",
  title: "Healthcare Publications",
  description:
    "Engaged in healthcare-related paper writing and publication support, with a focus on building strong academic and professional contributions through structured research work.",
},
    {
      label: "ONGOING PROJECT",
      title: "EMR Startup",
      description:
        "Currently part of a healthcare EMR startup, supporting software quality through testing, system review, workflow validation, and careful attention to user-facing reliability.",
    },
    {
  label: "GUIDANCE WORK",
  title: "Admissions & Career Support",
  description:
    "Supporting students and professionals with higher education guidance, application direction, and growth-oriented academic support.",
},
    {
      label: "Healthcare IT",
      title: "Apollo IP EMR Project",
      description:
        "Worked with hands-on exposure to P4C, CPOE, configuration support, MedMantra-aligned environment understanding, training support, and implementation-related documentation.",
    },
    {
      label: "Healthcare IT",
      title: "Dedalus HCIS",
      description:
        "Contributed to healthcare information system exposure through product understanding, build-related support, issue reporting, knowledge-sharing, and pharmacy-domain aligned inputs.",
    },
    {
      label: "Healthcare IT",
      title: "ePharmacy New Zealand",
      description:
        "Worked on functional understanding, use-case comparison, and healthcare process review aligned with business and system expectations.",
    },
  ];

  const experience = [
    {
  role: "CTO",
  company: "TeSh Acad International Consultants",
  period: "Aug 2025 – Present",
  summary:
    "Leading technology-facing and platform development initiatives for TeSh Acad while supporting digital growth, website building, recruitment coordination, and strategic execution.",
  projects: [
    {
      title: "Platform Development and Digital Growth",
      period: "Aug 2025 – Present",
      points: [
        "Supporting website development, portfolio refinement, and platform visibility initiatives.",
        "Contributing to recruitment coordination, digital communication, and structured professional positioning.",
        "Working on technology-facing tasks aligned with long-term platform growth and execution.",
      ],
    },
  ],
},
    {
  role: "Associate Professional Business Analyst",
  company: "Dedalus",
  period: "May 2022 – Jul 2025",
  summary:
    "Worked across healthcare IT and business analysis responsibilities involving requirements understanding, functional interpretation, documentation, internal coordination, process support, and solution-oriented collaboration.",
  projects: [
    {
      title: "New Zealand ePharmacy",
      period: "32 months ; Dec 2022 – July 2025",
      points: [
        "Rebranding the use cases by comparing the use case specifications with the current version of ePharmacy.",
      ],
    },
    {
      title: "Healthcare Information System Product Knowledge",
      period: "3 months ; Sep 2022 – Nov 2022",
      points: [
        "Demonstrated the healthcare information system product of Dedalus by cross-sharing knowledge with all team members.",
        "Executed the CSP OP production build in testing bridge as a Level 2 team member in the GST - GOLD SANITY TESTING.",
        "Reported DELTA SYNC for the Delhi region of Apollo.",
        "Shortlisted entrant for the 40th birthday Value Competition entries in Dedalus APAC region.",
        "Validated pharmacy-related inputs regarding HCIS dispensing mechanism, giving expertise in this area as a part of the strategy of bringing HCIS to Asia.",
      ],
    },
    {
      title: "Apollo IP EMR Project",
      period: "4 months ; May 2022 – Aug 2022",
      points: [
        "Worked with hands-on exposure to P4C, CPOE configuration, and MedMantra.",
        "Assisted with build, configuration, and testing of training environment.",
        "Created around 30 prescription scenarios in the CPOE module.",
        "Prepared training and end-user documentation including 4Ci configuration and CPOE cookbook material.",
      ],
    },
  ],
},
    {
      role: "Market Research Intern",
      company: "Cetas Healthcare, Mumbai",
      period: "Apr 2022 – May 2022",
      summary:
        "Contributed to market understanding, secondary research, questionnaire design, discussion guide preparation, and recommendation-oriented project support.",
    },
    {
      role: "Digital Marketing Intern",
      company: "GHC Drugs and Pharmaceuticals Pvt. Ltd.",
      period: "May 2021 – Jun 2021",
      summary:
        "Worked on online marketing resources, annual operating plan support, and patient journey mapping in a pharmaceutical business environment.",
    },
    {
  role: "Clinical Pharmacist Student Intern",
  company: "Vishwabharathi Super Speciality Hospital, Kurnool, AP",
  period: "Mar 2019 – Mar 2020",
  summary:
    "Completed clinical internship across General Medicine, Cardiology, Psychiatry, and Pediatrics, with involvement in patient counselling, medication adherence mapping, antibiotic rationality review, medication error monitoring, and ward round participation.",
},
{
  role: "Clinical Pharmacist Student Intern",
  company: "Care Hospitals, Banjara Hills, Hyderabad, Telangana",
  period: "Apr 2018 – May 2018",
  summary:
    "Worked on NABH protocol implementation, Management of Medication (MoM), patient education on rights under NABH, and activities supporting improved patient safety.",
},
  ];

  const education = [
    {
      title: "MBA, Pharmaceutical Management",
      place: "Indian Institute of Health Management Research University, Jaipur",
    },
    {
      title: "Doctor of Pharmacy (PharmD)",
      place: "Jawaharlal Nehru Technological University, Anantapur",
    },
  ];

  const skills = [
    "Presented research paper on the Impact of clinical pharmacy services in general surgery, showcasing expertise in the field of clinical pharmacy.",
    "Presented a scientific paper on the Experimental analysis of the effect of psychological properties on electrical properties of the human body, demonstrating strong research skills and interdisciplinary knowledge.",
    "Experienced Organizer of the PHARMACON One-day National Conference on - Give wings to your career, showcasing exceptional event coordination skills.",
    "Actively engaged as a Delegate in numerous International Conferences on Pharmacy Practice Advanced Learning Series Modules and Clinical Pharmacy.",
    "Demonstrated proficiency through participation in workshops on Clinical Research and Pharmacovigilance.",
    "Consistently participated in the Unified Cyber Olympiads during schooling.",
    " Recognized annually for outstanding performance in the ALL INDIA GENERAL KNOWLEDGE EXAMINATIONS.",
    "Received accolades and awards for exceptional calligraphy skills during exams and regular events throughout academic years.",
  ];

  return (
    <div className="site-shell">
      <div className="mesh mesh-1"></div>
      <div className="mesh mesh-2"></div>
      <div className="mesh mesh-3"></div>

      <div className="page">
        <nav className="topnav">
          <div className="topnav-inner">
            <a href="#home" className="topnav-link active">Home</a>
            <a href="#about" className="topnav-link">About</a>
            <a href="#ventures" className="topnav-link">Ventures</a>
            <a href="#projects" className="topnav-link">Projects</a>
            <a href="#experience" className="topnav-link">Experience</a>
            <a href="#contact" className="topnav-link">Achievements</a>
            <a href="#explore-platforms" className="topnav-link">Explore my platforms</a>
            <div className="topnav-socials">
  <a
    href="https://www.instagram.com/itsme_.teja/?hl=en"
    target="_blank"
    rel="noreferrer"
    className="topnav-icon"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
    </svg>
  </a>

  <a
    href="mailto:drtejaswinibathala@gmail.com"
    className="topnav-icon"
    aria-label="Email"
    title="drtejaswinibathala@gmail.com"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
    >
      <path d="M3.75 5.5h16.5A1.75 1.75 0 0 1 22 7.25v9.5A1.75 1.75 0 0 1 20.25 18.5H3.75A1.75 1.75 0 0 1 2 16.75v-9.5A1.75 1.75 0 0 1 3.75 5.5Zm0 1.5v.2l8.25 5.54 8.25-5.54V7H3.75Zm16.75 10V8.51l-8.08 5.43a.75.75 0 0 1-.84 0L3.5 8.51V17h17Z" />
    </svg>
  </a>
</div>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="hero-left">
            <p className="eyebrow">Professional Portfolio</p>
            <h1 className="hero-title">
              Dr Tejaswini <span>Bathala</span>
            </h1>
            <p className="hero-role">
              Entrepreneur • Medical Devices & Diagnostic Solutions • Healthcare IT Professional • 
              Modern Vedic Astrologer • PharmD • MBA
            </p>
            <p className="hero-text">
              Building successful professional platforms across
              <strong> Education, Consulting, Healthcare IT, Events, and Astrology</strong>.
              At the core of my works include <strong>TeSh Acad</strong>, elevated by
              <strong> TeSh Events</strong> and <strong>AstroTej</strong>, backed by practical experience in
              <strong> ERP / EMR / Healthcare technology projects</strong>.
            </p>

            
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://teshacad.org/" target="_blank" rel="noreferrer">
                Explore TeSh Acad
              </a>
              <a className="btn btn-secondary" href="https://tesh-events.vercel.app/" target="_blank" rel="noreferrer">
                TeSh Events
              </a>
              <a className="btn btn-secondary" href="https://drtejaswiniastrology.com/" target="_blank" rel="noreferrer">
                AstroTej
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/dr-tejaswini-bathala-66437b154/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>



          <div className="hero-right">
            <div className="portrait-card">
              <img src={profileImg} alt="Dr Tejaswini Bathala" className="portrait" />
            </div>

            <div className="floating-panel">
              <div className="floating-item">
                <span className="floating-label">Founder and Director</span>
                <strong>Dr Tejaswini Bathala Health Tech Solutions Pvt Ltd ; AstroTej</strong>
              </div>
              <div className="floating-item">
                <span className="floating-label">CTO</span>
                <strong>TeSh Acad</strong>
              </div>
              <div className="floating-item">
                <span className="floating-label">Managing Director</span>
                <strong>TeSh Events, India</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stat-band">
          <div className="stat-card">
            <h3>5+ Years</h3>
            <p>Clinical Experience</p>
          </div>
          <div className="stat-card">
            <h3>3+ Years</h3>
            <p>Business Analysis Experience</p>
          </div>
          <div className="stat-card">
            <h3>Healthcare Solutions</h3>
            <p>For Healthcare industries, Corporate Hospitals, Clinics, Hospital systems, Medical devices and Diagnostics, Digital healthTech (EMR, ERP...).</p>
          </div>
          <div className="stat-card">
            <h3>Drug Researcher</h3>
            <p>Disease Specific Allopathic Medicine Advisor</p>
          </div>
        </section>

        <main className="content">
          <section className="section section-split" id="about">
            <div className="section-intro">
              <p className="section-kicker">BEHIND THE WORK</p>
              <h2>The Story I’m Building</h2>
            </div>

            <div className="about-grid">
              <div className="feature-panel feature-panel-large">
                <h3>My Story</h3>
                <p>
                  My work is a mix of practical experience, curiosity, and the desire to build something of my own. From healthcare and 
                  business analysis to technology, consulting, and independent ventures, each part of my journey has helped shape the 
                  professional path I am creating.
                </p>
                <p>
                  This portfolio reflects that evolving journey. It brings together my experience, my ideas, and the professional 
                  identity I am building step by step.
                </p>
              </div>

              <div className="feature-panel accent-panel">
                <h3>What I’m Building Now</h3>
                <ul>
                  <li>TeSh Acad as primary professional platform</li>
                  <li>TeSh Events as creative experience venture</li>
                  <li>AstroTej as guidance and astrology platform</li>
                  <li>ERP / EMR projects as core technical-professional strength</li>
                  <li>End to end guidance in Healthcare Research and Publications</li>
                  <li>Transformative Healthcare and Scientific training</li>
                  <li>Collaborating clinics, industries, researchers, investors and partners to a future-ready digital health and IT solutions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="ventures">
            <div className="section-intro">
              <p className="section-kicker">Core Platforms</p>
              <h2>Ventures</h2>
            </div>

            <div className="venture-layout">
              {ventures.map((item) => (
                <article
                  key={item.title}
                  className={`venture-block ${item.featured ? "venture-featured" : ""}`}
                >
                  <span className="venture-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Visit Platform →
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <div className="section-intro">
              <p className="section-kicker">Healthcare IT Focus</p>
              <h2>Featured Projects</h2>
            </div>

            <div className="project-grid">
              {projects.map((item) => (
                <article key={item.title} className="project-card">
                  <span className="project-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>



<section className="section" id="experience">
  <div className="section-intro">
    <p className="section-kicker">Career Journey</p>
    <h2>Experience</h2>
  </div>

  <div className="resume-timeline">
    {experience.map((item, index) => (
      <article key={`${item.role}-${item.company}`} className="resume-entry">
        <div className="resume-entry-rail">
          <span className="resume-entry-dot"></span>
          {index !== experience.length - 1 && (
            <span className="resume-entry-line"></span>
          )}
        </div>

        <div className="resume-entry-card">
          <div className="resume-entry-top">
            <div>
              <span className="resume-role">{item.role}</span>
              <h3 className="resume-company">{item.company}</h3>
            </div>
            <span className="resume-period">{item.period}</span>
          </div>

          <p className="resume-summary">{item.summary}</p>

          {item.projects && item.projects.length > 0 && (
            <div className="resume-projects">
              {item.projects.map((project, idx) => (
                <div key={idx} className="resume-project">
                  <div className="resume-project-head">
                    <h4>{project.title}</h4>
                    <span>{project.period}</span>
                  </div>

                  <ul className="resume-project-points">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    ))}
  </div>
</section>





          <section className="section section-split" id="contact">
            <div className="section-intro">
              <p className="section-kicker">Qualification</p>
              <h2>Education + Achievements</h2>
            </div>

            <div className="bottom-grid">
              <div className="education-card">
                <h3>Education</h3>
                {education.map((item) => (
                  <div key={item.title} className="edu-item">
                    <strong>{item.title}</strong>
                    <p>{item.place}</p>
                    <span>{item.period}</span>
                  </div>
                ))}
              </div>

              <div className="skills-card">
                <h3>Achievements</h3>
                <div className="skills-wrap">
                  {skills.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            </div>

          <section className="contact-cta" id="explore-platforms">
  <h3>Explore My Platforms</h3>

  <div className="platform-logos">
    <div className="platform-logo-group">
      <a
        href="https://teshacad.org/"
        target="_blank"
        rel="noreferrer"
        className="platform-logo-wrap"
      >
        <div className="platform-logo-card">
          <img src="/tesh-acad-logo.png" alt="TeSh Acad" />
        </div>
      </a>

      <div className="platform-name-row">
        <span>TeSh Acad</span>
        <a
          href="https://www.instagram.com/tesh_acad/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="platform-insta"
          aria-label="TeSh Acad Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
          </svg>
        </a>
      </div>
    </div>

    <div className="platform-logo-group">
      <a
        href="https://tesh-events.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="platform-logo-wrap"
      >
        <div className="platform-logo-card">
          <img src="/tesh-events-logo.png" alt="TeSh Events" />
        </div>
      </a>

      <div className="platform-name-row">
        <span>TeSh Events</span>
        <a
          href="https://www.instagram.com/tesh.events/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="platform-insta"
          aria-label="TeSh Events Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
          </svg>
        </a>
      </div>
    </div>

    <div className="platform-logo-group">
      <a
        href="https://drtejaswiniastrology.com/"
        target="_blank"
        rel="noreferrer"
        className="platform-logo-wrap"
      >
        <div className="platform-logo-card">
          <img src="/astrotej-logo.png" alt="AstroTej" />
        </div>
      </a>

      <div className="platform-name-row">
        <span>AstroTej</span>
        <a
          href="https://www.instagram.com/astro_.tej/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="platform-insta"
          aria-label="AstroTej Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</section>
<footer className="site-footer">
  <p>© 2026 Dr Tejaswini Bathala. All rights reserved.</p>
</footer>
        </main>
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);