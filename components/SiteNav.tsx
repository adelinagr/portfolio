export const navigation = ['About', 'Work', 'Skills', 'Contact']

export default function SiteNav({ active, hidden = false }: { active: string; hidden?: boolean }) {
  return (
    <aside className={`site-nav ${hidden ? 'is-hidden' : ''}`} aria-label="Primary navigation">
      <nav>
        <a className={active === 'home' ? 'is-active' : ''} href="#home">Home</a>
        {navigation.map((item) => (
          <a className={active === item.toLowerCase() ? 'is-active' : ''} key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
    </aside>
  )
}

