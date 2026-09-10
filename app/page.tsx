'use client'

import { useEffect, useState } from 'react'
import SiteNav from '@/components/SiteNav'
import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
import WorkSection from '@/components/sections/WorkSection'
import StudentVibesSection from '@/components/sections/StudentVibesSection'
import StudentVibesPage2 from '@/components/sections/StudentVibesPage2'
import StudentVibesPage3 from '@/components/sections/StudentVibesPage3'
import WebDevelopmentPage1 from '@/components/sections/WebDevelopmentPage1'
import WebDevelopmentPage2 from '@/components/sections/WebDevelopmentPage2'
import WebDevelopmentPage3 from '@/components/sections/WebDevelopmentPage3'
import WebDevelopmentPage4 from '@/components/sections/WebDevelopmentPage4'
import WebDevelopmentPage5 from '@/components/sections/WebDevelopmentPage5'
import WebDevelopmentPage6 from '@/components/sections/WebDevelopmentPage6'
import WebDevelopmentPage7 from '@/components/sections/WebDevelopmentPage7'
import VogueGlitch from '@/components/sections/VogueGlitch'
import TwinGridPage1 from '@/components/sections/TwinGridPage1'
import TwinGridPage2 from '@/components/sections/TwinGridPage2'
import TwinGridPage3 from '@/components/sections/TwinGridPage3'
import TwinGridPage4 from '@/components/sections/TwinGridPage4'
import CyberSafePage1 from '@/components/sections/CyberSafePage1'
import CyberSafePage2 from '@/components/sections/CyberSafePage2'
import SkillsSection from '@/components/sections/SkillsSection'
import ContactPage1 from '@/components/sections/ContactPage1'
import ContactPage2 from '@/components/sections/ContactPage2'

export default function Home() {
  const [active, setActive] = useState('home')
  const [navHidden, setNavHidden] = useState(false)
  
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-section]'))
    if (!sections.length) return

    const sectionKey = (section: HTMLElement) => {
      const explicitKey = section.dataset.navSection
      if (explicitKey) return explicitKey
      const id = section.id.toLowerCase()
      if (id.includes('work') || id.includes('studentvibes') || id.includes('web-development') || id.includes('vogueglitch') || id.includes('twingrid') || id.includes('cybersafe')) return 'work'
      return id
    }

    const updateActiveSection = () => {
      const scrollTop = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop)
      const marker = scrollTop + window.innerHeight * 0.5
      let current = sections[0]
      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + scrollTop
        if (sectionTop <= marker) current = section
      }
      
      const nextActive = sectionKey(current)
      setActive(nextActive)
      
      const isInteriorPage = /-\d+$/.test(current.id)
      setNavHidden(isInteriorPage)

      const projectHash = current.id.replace(/-\d+$/, '')
      const targetHash = projectHash === 'home' ? '' : `#${projectHash}`
      
      if (window.location.hash !== targetHash) {
        if (targetHash || window.location.hash) {
          window.history.replaceState(null, '', targetHash || window.location.pathname)
        }
      }

      document.querySelectorAll<HTMLAnchorElement>('.site-nav a').forEach((link) => {
        const isActive = link.getAttribute('href') === `#${nextActive}`
        link.classList.toggle('is-active', isActive)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    document.addEventListener('scroll', updateActiveSection, { passive: true, capture: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('hashchange', updateActiveSection)
    const scrollPoll = window.setInterval(updateActiveSection, 100)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      document.removeEventListener('scroll', updateActiveSection, true)
      window.removeEventListener('resize', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
      window.clearInterval(scrollPoll)
    }
  }, [])

  return (
    <main className="home-shell font-serif">
      <SiteNav active={active} hidden={navHidden} />
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <StudentVibesSection />
      <StudentVibesPage2 />
      <StudentVibesPage3 />
      <WebDevelopmentPage1 />
      <WebDevelopmentPage2 />
      <WebDevelopmentPage3 />
      <WebDevelopmentPage4 />
      <WebDevelopmentPage5 />
      <WebDevelopmentPage6 />
      <WebDevelopmentPage7 />
      <VogueGlitch />
      <TwinGridPage1 />
      <TwinGridPage2 />
      <TwinGridPage3 />
      <TwinGridPage4 />
      <CyberSafePage1 />
      <CyberSafePage2 />
      <SkillsSection />
      <ContactPage1 />
      <ContactPage2 />
    </main>
  )
}
