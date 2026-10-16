import { useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { shop } from "../data/site"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="shell menu-shell">
      <Header />
      <div className="welcome-bar">
        <p>
          {shop.welcome.toUpperCase()} TO REVEREND COFFEE · {shop.city.toUpperCase()}
        </p>
        <Link to="/locations" className="btn btn-line welcome-cta">
          Find a house
        </Link>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}
