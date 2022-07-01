export default function HighlightText({ title, subtitle }) {
  return (
    <div className="pb-16 sm:pt-24 sm:pb-32 text-center w-full px-4">
      {subtitle ? (
        <h2 className="text-2xl sm:text-4xl lg:text-4xl leading-10 sm:leading-tight my-4 font-work font-medium text-grey-400 uppercase drop-shadow-md">
          {subtitle}
        </h2>
      ) : null}
      <h1 className="text-7xl lg:text-[9rem] sm:leading-[10rem] font-bold font-sketch text-accent-500 drop-shadow-lg">
        {title}
      </h1>
    </div>
  )
}
