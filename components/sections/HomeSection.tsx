export default function HomeSection() {
  return (
    <section id="home" data-nav-section="home" className="home-view" aria-labelledby="intro-title">
      <div className="hero">
        <div className="hero-copy hero-copy-left">I make<br />things look good.</div>
        <h1 id="intro-title" className="hero-title font-sans">hi, i&apos;m adelina.</h1>
        <div className="hero-copy hero-copy-right">I also<br />overthink why they work.</div>
      </div>
      <footer className="home-footer">
        <p>Economic Informatics student · Product · UX · AI · Cybersecurity</p>
        <a href="#about">scroll to see what I&apos;ve been up to<span aria-hidden="true">↓</span></a>
      </footer>
    </section>
  )
}
