export default function AboutSection() {
  return (
    <section id="about" data-nav-section="about" className="about-view" aria-labelledby="about-title">
      <div className="about-title"><span>SO...</span><h1 id="about-title">WHO AM I?</h1></div>
      <article className="about-intro">I&apos;m Adelina — an Economic Informatics student<br />who somehow ended up being more interested<br />in how a product feels than in writing the code<br />behind it.</article>
      <article className="leopard-panel">
        <p className="leopard-lead">When I&apos;m not designing<br />things...</p>
        <div className="leopard-list">learning Chinese<br />making things unnecessarily pretty<br />falling into random research rabbit holes<br />overthinking everything</div>
      </article>
      <article className="burgundy-card">I&apos;m currently exploring<br />Product Design, UX, AI<br />and Cybersecurity —<br />because apparently<br />choosing one field<br />wasn&apos;t enough.</article>
      <p className="about-body">During my Web Development internship, I discovered that the part I<br />genuinely enjoyed wasn&apos;t sitting there writing code.<br />It was figuring out how things should look, what users might need,<br />which components made sense, and how to turn an idea into<br />something that actually feels good to use.</p>
      <p className="about-statement">I like good interfaces, thoughtful details, interesting problems, and<br />figuring out why something doesn&apos;t work when it very obviously should.</p>
    </section>
  )
}
