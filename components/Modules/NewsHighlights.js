import NewsPreview from "./NewsPreview"

export default function NewsHighlights({ data }) {
  return (
    <div className="flex justify-center gap-20 flex-wrap">
      <NewsPreview></NewsPreview>
    </div>
  )
}
