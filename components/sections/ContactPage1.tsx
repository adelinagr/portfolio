export default function ContactPage1() {
  return (
    <section id="contact" data-nav-section="contact" className="contact-view" aria-label="Contact">
      <div className="contact-stage">
        <div className="contact-artwork">
          <img className="contact-artwork-image" src="/contact-page1.png" alt="Contact Information" />
          
          {/* Transparent Overlays */}
          <a 
            href="mailto:adelinagrosariu1@gmail.com" 
            className="contact-hit contact-hit-email" 
            aria-label="Email Adelina Grosariu"
          />
          <a 
            href="https://www.linkedin.com/in/adelina-grosariu-6148a8336/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-hit contact-hit-linkedin" 
            aria-label="Open Adelina Grosariu's LinkedIn profile"
          />
          <a 
            href="/Grosariu_Adelina_CV_en.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-hit contact-hit-cv" 
            aria-label="View Adelina Grosariu's CV"
          />
        </div>
      </div>
    </section>
  )
}

