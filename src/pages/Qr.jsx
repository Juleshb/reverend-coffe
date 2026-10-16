import { QRCodeSVG } from "qrcode.react"
import { useMemo } from "react"
import { branches } from "../data/site"

function menuUrl(origin, branch) {
  const url = new URL("/menu", origin)
  if (branch) url.searchParams.set("branch", branch)
  return url.toString()
}

export default function Qr() {
  const origin = window.location.origin
  const cards = useMemo(
    () => [
      {
        id: "both",
        title: "Either house",
        detail: "Opens the full menu. Guests can switch houses on the page.",
        href: menuUrl(origin),
      },
      ...branches.map((branch) => ({
        id: branch.id,
        title: branch.name,
        detail: branch.area,
        href: menuUrl(origin, branch.id),
      })),
    ],
    [origin],
  )

  return (
    <main className="qr-page">
      <header className="menu-intro no-print">
        <p className="eyebrow">For the table</p>
        <h1>QR codes for the menu.</h1>
        <p>
          Print a code and stand it on the table. A scan opens the live menu
          on the guest’s phone. Use the house code if that table should land
          on Mahoko or Gisenyi first.
        </p>
        <button type="button" className="btn btn-dark" onClick={() => window.print()}>
          Print these codes
        </button>
      </header>

      <div className="qr-grid">
        {cards.map((card) => (
          <article key={card.id} className="qr-card">
            <QRCodeSVG
              value={card.href}
              size={196}
              bgColor="#fff8ee"
              fgColor="#5c3a24"
              level="M"
              title={`QR code for the ${card.title} menu`}
            />
            <div>
              <p className="eyebrow">Reverend Coffee</p>
              <h2>{card.title}</h2>
              <p>{card.detail}</p>
              <p className="qr-instruction">Scan to see the menu</p>
              <a className="no-print" href={card.href}>
                {new URL(card.href).pathname + new URL(card.href).search}
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
