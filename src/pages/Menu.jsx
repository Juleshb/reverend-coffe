import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Logo from "../components/Logo"
import {
  branchName,
  branches,
  categories,
  itemBranches,
  menu,
  milkNote,
  shop,
} from "../data/site"

function price(amount) {
  return new Intl.NumberFormat("en-RW").format(amount)
}

export default function Menu() {
  const [params, setParams] = useSearchParams()
  const branch = params.get("branch") || "all"
  const [category, setCategory] = useState("all")
  const [query, setQuery] = useState("")

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return menu.filter((item) => {
      const inBranch = branch === "all" || itemBranches(item).includes(branch)
      const inCategory = category === "all" || item.category === category
      const inSearch =
        needle.length === 0 ||
        item.name.toLowerCase().includes(needle) ||
        item.description.toLowerCase().includes(needle)
      return inBranch && inCategory && inSearch
    })
  }, [branch, category, query])

  const groups = categories
    .map((group) => ({
      ...group,
      items: visible.filter((item) => item.category === group.id),
    }))
    .filter((group) => group.items.length > 0)

  function setBranch(next) {
    const updated = new URLSearchParams(params)
    if (next === "all") updated.delete("branch")
    else updated.set("branch", next)
    setParams(updated, { replace: true })
  }

  return (
    <main className="board-menu">
      <header className="board-hero">
        <Logo variant="stacked" className="board-logo" />
        <p className="board-kicker">{shop.motto}</p>
        <h1>
          REVEREND
          <span>COFFEE</span>
        </h1>
        <p className="board-sub">
          {branch === "all"
            ? "Mahoko and Gisenyi, near Petite Barrière"
            : branchName(branch)}
        </p>
      </header>

      <section className="board-heading">
        <h2>OUR MENU</h2>
        <p>Prices in RWF · order at the counter</p>
      </section>

      <div className="board-filters">
        <div className="chip-row" role="group" aria-label="Choose a house">
          <button
            type="button"
            className={branch === "all" ? "chip on" : "chip"}
            aria-pressed={branch === "all"}
            onClick={() => setBranch("all")}
          >
            All houses
          </button>
          {branches.map((item) => (
            <button
              key={item.id}
              type="button"
              className={branch === item.id ? "chip on" : "chip"}
              aria-pressed={branch === item.id}
              onClick={() => setBranch(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">Search the menu</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            type="search"
          />
        </label>
        <div className="chip-row" role="group" aria-label="Menu categories">
          <button
            type="button"
            className={category === "all" ? "chip on" : "chip"}
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              className={category === item.id ? "chip on" : "chip"}
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {groups.length === 0 ? (
        <p className="empty">Nothing matches. Ask the bar.</p>
      ) : (
        groups.map((group) => (
          <section key={group.id} className="product-section" id={group.id}>
            <h3 className="product-section-title">{group.name}</h3>
            <div className="product-grid">
              {group.items.map((item) => {
                const note = [
                  item.description,
                  item.tags?.join(", "),
                  item.branches ? `${item.branches.map(branchName).join(" / ")} only` : null,
                ]
                  .filter(Boolean)
                  .join(" · ")
                return (
                  <article key={item.id} className="product-card">
                    <div className="product-photo">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                    <div className="product-body">
                      <div className="board-row">
                        <span className="board-name">{item.name}</span>
                        <span className="board-dots" aria-hidden="true" />
                        <span className="board-price">{price(item.price)}</span>
                      </div>
                      <p className="board-note">{note}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))
      )}

      <p className="board-foot">
        {milkNote} Please tell us about allergies before you order.
      </p>
    </main>
  )
}
