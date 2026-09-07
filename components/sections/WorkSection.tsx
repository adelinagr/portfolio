export default function WorkSection() {
  return (
    <section id="work" data-nav-section="work" className="work-view" aria-labelledby="work-title">
      <a className="work-project project-studentvibes" href="#studentvibes" aria-label="Open StudentVibes project">
        <img className="project-blob project-studentvibes-composite" src="/group-1-studentvibes.png" alt="StudentVibes — Making student life a little less boring. Visual Identity. Social Media. Content." />
      </a>
      <a className="work-project project-web" href="#web-development" aria-label="Open Web Development project">
        <img className="project-blob project-web-composite" src="/group-2-web-development.png" alt="Web Development — Building things. Breaking things. Fixing things. UI · Web Development · UX." />
      </a>
      <a className="work-project project-twingrid" href="#twingrid" aria-label="Open TwinGrid project">
        <img className="project-blob project-twingrid-composite" src="/group-3-twingrid.png" alt="TwinGrid — A product concept I couldn&apos;t stop thinking about. Product Concept · UX · Research." />
      </a>
      <a className="work-project project-cybersafe" href="#cybersafe" aria-label="Open CyberSafe Toolkit project">
        <img className="project-blob project-cybersafe-composite" src="/group-4-cybersafe.png" alt="CyberSafe Toolkit — My first little cybersecurity project. SOC · Cybersecurity · UI Design." />
      </a>
      <img className="work-arrow arrow-one" src="/arrow-studentvibes.png" alt="" aria-hidden="true" />
      <img className="work-arrow arrow-two" src="/arrow-web-development.png" alt="" aria-hidden="true" />
      <img className="work-arrow arrow-three" src="/arrow-twingrid.png" alt="" aria-hidden="true" />
      <img className="work-arrow arrow-four" src="/arrow-cybersafe.png" alt="" aria-hidden="true" />
      <h2 id="work-title" className="work-title">What I&apos;ve been up to</h2>
      <p className="work-subtitle">A surprisingly short list. I&apos;m a student, give me a minute.</p>
    </section>
  )
}
