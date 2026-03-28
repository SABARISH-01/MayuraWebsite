import { NavLink } from 'react-router-dom'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#why', label: 'Why Us' },
  { href: '/#careers', label: 'Careers' },
]

function Navbar({ mobileOpen, onToggleMobile, onCloseMobile }) {
  return (
    <>
      <nav>
        <NavLink to="/" className="nav-logo" onClick={onCloseMobile}>
          <img src="/mayura-logo.png" alt="Mayura Groups Limited Logo" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span>MAYURA</span>
            <span>GROUPS LIMITED</span>
          </div>
        </NavLink>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/#contact" className="nav-cta" onClick={onCloseMobile}>
              Contact Us
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={onToggleMobile} type="button" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobileMenu">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onCloseMobile}>
            {item.label}
          </a>
        ))}
        <a href="/#contact" onClick={onCloseMobile}>
          Contact Us
        </a>
      </div>
    </>
  )
}

export default Navbar
