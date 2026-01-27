import React from "react";
import { cv } from "./data/cv";
import profile from "./assets/profile.jpg";

export default function App() {
  const telSafe = (cv.phone || "").replace(/[^\d+]/g, "");

  const nav = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "funding", label: "Funding" },
  { id: "development", label: "Development" },
  { id: "references", label: "References" },   // 👈 ADD THIS
  { id: "fullcv", label: "Full CV" },
];


  return (
    <div className="page">
      <TopNav items={nav} />

      <header className="hero">
        <div className="hero-left">
          <img className="avatar" src={profile} alt={`${cv.name} profile`} />
        </div>

        <div className="hero-right">
          <h1 className="name">{cv.name}</h1>
          <p className="role">{cv.role}</p>

          <div className="chips">
            <span className="chip">{cv.location}</span>
            <a className="chip chip-link" href={`mailto:${cv.email}`}>{cv.email}</a>
            <a className="chip chip-link" href={`tel:${telSafe}`}>{cv.phone}</a>
          </div>

          <div className="actions">
            {cv.links?.linkedin ? (
              <a className="btn" href={cv.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}

            <a className="btn btn-ghost" href={`mailto:${cv.email}`}>
              Contact
            </a>

        {cv.pdf ? (
  <>
    <a className="btn btn-soft" href={cv.pdf} target="_blank" rel="noreferrer">
  Open PDF
</a>

<a
  className="btn btn-ghost"
  href={cv.pdf}
  download="ProfDrProvcVijayakumarCV2026.pdf"
>
  Download PDF
</a>

  </>
) : null}

          </div>
        </div>
      </header>

      <main className="content">
        <Section id="summary" title="Summary">
          <p className="text">{cv.summary}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="stack">
            {cv.experience.map((item, idx) => (
              <article className="card" key={idx}>
                <div className="card-top">
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-sub">{item.org}</p>
                  </div>
                  <p className="card-period">{item.period}</p>
                </div>

                {item.points?.length ? (
                  <ul className="bullets">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="stack">
            {cv.education.map((e, idx) => (
              <article className="card" key={idx}>
                <div className="card-top">
                  <div>
                    <h3 className="card-title">{e.degree}</h3>
                    <p className="card-sub">{e.org}</p>
                  </div>
                  <p className="card-period">{e.year}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {cv.achievements?.length ? (
          <Section id="achievements" title="Selected Achievements">
            <CollapsibleList items={cv.achievements} initialCount={8} />
          </Section>
        ) : null}

        {cv.funding?.length ? (
          <Section id="funding" title="Funding">
            <CollapsibleList items={cv.funding} initialCount={8} />
          </Section>
        ) : null}

        {cv.professionalDevelopment?.length ? (
          <Section id="development" title="Professional & Personal Development">
            <CollapsibleList items={cv.professionalDevelopment} initialCount={8} />
            <p className="hint">
              Full list is available in the Full CV PDF below.
            </p>
          </Section>
        ) : null}

{cv.references?.length ? (
  <Section id="references" title="References">
    <div className="stack">
      {cv.references.map((ref, idx) => (
        <article className="card" key={idx}>
          <h3 className="card-title">{ref.name}</h3>
          <p className="card-sub">
            {ref.designation}, {ref.affiliation}
          </p>
          <p className="card-period">
            {ref.country}
          </p>

          {ref.note ? (
            <p className="text" style={{ marginTop: "8px", fontSize: "14px" }}>
              {ref.note}
            </p>
          ) : null}
        </article>
      ))}
    </div>

    <p className="hint">
      Full contact details can be shared upon formal request.
    </p>
  </Section>
) : null}



      <Section id="fullcv" title="Full CV (PDF)">
  {cv.pdf ? (
    <div className="pdfActions">
      <a className="btn btn-soft" href={cv.pdf} target="_blank" rel="noreferrer">
        Open PDF
      </a>
      <a className="btn btn-ghost" href={cv.pdf} download>
        Download PDF
      </a>
    </div>
  ) : (
    <p className="text">
      Add your CV PDF in <code>public/cv.pdf</code> to enable Open/Download.
    </p>
  )}
</Section>


        <footer className="footer">
          <div className="footer-row">
            <span>© {new Date().getFullYear()} {cv.name}</span>
            <span className="dot">•</span>
            <a href={`mailto:${cv.email}`}>{cv.email}</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TopNav({ items }) {
  return (
    <div className="topnav">
      <div className="topnav-inner">
        {items.map((it) => (
          <a key={it.id} className="topnav-link" href={`#${it.id}`}>
            {it.label}
          </a>
        ))}
      </div>

      {/* mobile hint */}
      <div className="topnav-hint">More →</div>
    </div>
  );
}


function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function CollapsibleList({ items = [], initialCount = 8 }) {
  const first = items.slice(0, initialCount);
  const rest = items.slice(initialCount);

  return (
    <>
      <ul className="bullets">
        {first.map((h, i) => <li key={i}>{h}</li>)}
      </ul>

      {rest.length ? (
        <details className="details">
          <summary className="detailsSummary">Show {rest.length} more</summary>
          <ul className="bullets">
            {rest.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </details>
      ) : null}
    </>
  );
}


