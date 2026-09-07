export default function WorkSection() {
  return (
    <section id="work" data-nav-section="work" className="work-view" aria-label="Work overview">
      <img className="work-title-group" src="/work-title-group.png" alt="What I've been up to" />
      <a className="work-asset asset-studentvibes" href="#studentvibes" aria-label="Open StudentVibes project">
        <img src="/studentvibes-group.png" alt="StudentVibes project" />
      </a>
      <a className="work-asset asset-vogueglitch" href="#vogueglitch" aria-label="Open VogueGlitch project">
        <img src="/vogueglitch-group.png" alt="VogueGlitch project" />
      </a>
      <a className="work-asset asset-web" href="#web-development" aria-label="Open Web Development project">
        <img src="/webdevelopment-group.png" alt="Web Development project" />
      </a>
      <a className="work-asset asset-twingrid" href="#twingrid" aria-label="Open TwinGrid project">
        <img src="/twingrid-group.png" alt="TwinGrid project" />
      </a>
      <a className="work-asset asset-cybersafe" href="#cybersafe" aria-label="Open CyberSafe Toolkit project">
        <img src="/cybersafe-group.png" alt="CyberSafe Toolkit project" />
      </a>
    </section>
  )
}
