export default function NewsPreview({ data }) {
  return (
    <div className="w-90">
      <div className="img h-[220px] bg-slate-300"></div>
      <div className="meta">
        <p>Dec 5, 2021</p>
        <p>by Antti Järvelä</p>
      </div>
    </div>
  )
}
