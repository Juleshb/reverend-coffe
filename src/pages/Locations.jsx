import { Link } from "react-router-dom"
import { branches, shop } from "../data/site"

export default function Locations() {
  return (
    <main className="locations-page">
      <header className="menu-intro">
        <p className="eyebrow">Rubavu</p>
        <h1>Two houses, one menu.</h1>
        <p>
          Mahoko for a slower morning. Gisenyi, near Petite Barrière, when you
          are already by the lake. Both use the same digital menu.
        </p>
      </header>

      <div className="shop-gallery location-gallery">
        {shop.photos.map((src, index) => (
          <figure key={src}>
            <img src={src} alt={`Reverend Coffee shop photo ${index + 1}`} />
          </figure>
        ))}
      </div>

      <div className="location-list">
        {branches.map((branch) => (
          <article key={branch.id} id={branch.id} className="location-card product-card">
            <div className="product-photo product-photo-tall">
              <img src={branch.image} alt={branch.name} />
            </div>
            <div className="product-body location-copy">
              <div>
                <p className="eyebrow">{branch.area}</p>
                <h2>{branch.name}</h2>
                <p>{branch.summary}</p>
                <p className="muted">{branch.note}</p>
                <div className="house-links">
                  <Link to={`/menu?branch=${branch.id}`}>Open this menu</Link>
                  <a href={branch.maps} target="_blank" rel="noreferrer">
                    Open in maps
                  </a>
                </div>
              </div>
              <dl>
                {branch.hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
