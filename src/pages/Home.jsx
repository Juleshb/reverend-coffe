import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import { branches, formatRwf, menu, shop } from "../data/site"

export default function Home() {
  const featured = menu.filter((item) => item.featured).slice(0, 4)

  return (
    <main>
      <header className="board-hero">
        <Logo variant="stacked" className="board-logo" />
        <p className="board-kicker">{shop.motto}</p>
        <h1>
          REVEREND
          <span>COFFEE</span>
        </h1>
        <p className="board-sub">{shop.tagline}</p>
        <div className="hero-actions hero-actions-center">
          <Link to="/menu" className="btn btn-gold">
            See the menu
          </Link>
          <Link to="/locations" className="btn btn-ghost">
            Find a house
          </Link>
        </div>
      </header>

      <section className="product-section">
        <h3 className="product-section-title">On the bar</h3>
        <div className="product-grid">
          {featured.map((item) => (
            <article key={item.id} className="product-card">
              <div className="product-photo">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-body">
                <div className="board-row">
                  <span className="board-name">{item.name}</span>
                  <span className="board-dots" aria-hidden="true" />
                  <span className="board-price">{formatRwf(item.price)}</span>
                </div>
                <p className="board-note">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="section-link">
          <Link to="/menu">Open the full menu</Link>
        </p>
      </section>

      <section className="product-section">
        <h3 className="product-section-title">Two houses</h3>
        <div className="house-grid">
          {branches.map((branch) => (
            <article key={branch.id} className="product-card">
              <div className="product-photo product-photo-tall">
                <img src={branch.image} alt={branch.name} />
              </div>
              <div className="product-body">
                <p className="eyebrow">{branch.area}</p>
                <h3>{branch.name}</h3>
                <p>{branch.summary}</p>
                <p className="muted">{branch.note}</p>
                <div className="house-links">
                  <Link to={`/menu?branch=${branch.id}`}>Menu for this house</Link>
                  <a href={branch.maps} target="_blank" rel="noreferrer">
                    Directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section">
        <h3 className="product-section-title">The house</h3>
        <div className="shop-gallery">
          {shop.photos.map((src, index) => (
            <figure key={src} className={index === 0 ? "wide" : undefined}>
              <img src={src} alt={`Reverend Coffee shop photo ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="story">
        <div>
          <p className="eyebrow">The house</p>
          <h2>Natural. Fresh. Excellent.</h2>
        </div>
        <p>{shop.about}</p>
      </section>

      <section className="steps">
        <div className="section-head">
          <p className="eyebrow">At the table</p>
          <h2>Scan, read, order at the counter.</h2>
        </div>
        <ol className="step-list">
          <li>
            <span>01</span>
            <h3>Scan the QR code</h3>
            <p>Each table has a code. It opens this menu on your phone. No app.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Choose your cup</h3>
            <p>Coffee, tea, cold drinks, and a short kitchen list, with prices in francs.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Order at the bar</h3>
            <p>Tell us your name and what you want. We call you when it is ready.</p>
          </li>
        </ol>
      </section>
    </main>
  )
}
