export default function HighlightText({ title, subtitle }) {
  return (
    <div className="py-24 text-center">
      <h1 className="text-6xl lg:text-8xl leading-tight">{title}</h1>
      {subtitle ? (
        <h2 className="text-4xl lg:text-5xl leading-tight mt-10 font-cursive">{subtitle}</h2>
      ) : null}
    </div>
  )
}
