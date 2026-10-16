import { Link } from "react-router-dom"
import { branches, shop } from "../data/site"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Logo className="footer-logo" />
        <p className="muted">
          {shop.city}, {shop.country}. Mahoko and Gisenyi, near Petite Barrière.
          Order at the counter after you read the menu.
        </p>
      </div>
      <div>
        <p className="footer-label">Houses</p>
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>
              <Link to={`/locations#${branch.id}`}>
                {branch.name}
                <span>{branch.area}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="footer-label">Visit</p>
        <ul>
          <li>
            <Link to="/menu">Digital menu</Link>
          </li>
          <li>
            <Link to="/qr">Print a table QR</Link>
          </li>
          <li>
            <Link to="/locations">Hours and directions</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
