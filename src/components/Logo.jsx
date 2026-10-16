export default function Logo({ variant = "lockup", className = "" }) {
  const src = variant === "stacked" ? "/logo-stacked.png" : "/logo-lockup.png"
  return (
    <img
      className={className}
      src={src}
      alt="Reverend Coffee — natural, fresh, excellent"
    />
  )
}
