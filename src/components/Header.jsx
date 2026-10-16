import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import Logo from "./Logo"

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/qr", label: "QR codes" },
]

export default function Header() {
  const location = useLocation()
  const [openPath, setOpenPath] = useState(null)
  const open = openPath === location.pathname

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <Logo className="brand-logo" />
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpenPath(open ? null : location.pathname)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} onClick={() => setOpenPath(null)}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
        <Link to="/menu" className="btn btn-dark nav-cta">
          Open menu
        </Link>
      </nav>
    </header>
  )
}
