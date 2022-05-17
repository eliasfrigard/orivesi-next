export default function Footer({ title, subtitle }) {
  return (
    <div className="py-24 text-center">
      <h1 className="text-8xl">{title}</h1>
      <h2 className="text-5xl mt-10 font-cursive">{subtitle}</h2>
    </div>
  )
}
