import { NavLink } from 'react-router-dom'
import { FaRibbon } from 'react-icons/fa6'

const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'

const navLinkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'bg-gold text-maroon' : 'text-royalblue hover:bg-saffron/20 hover:text-maroon'}`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-saffron/40 backdrop-blur bg-offwhite/80">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-maroon">
          <FaRibbon className="text-saffron" />
          <span className="font-heading font-semibold">Raksha Bandhan</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/messages" className={navLinkClass}>Messages</NavLink>
          <NavLink to="/quotes" className={navLinkClass}>Quotes</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
      </nav>
    </header>
  )
}