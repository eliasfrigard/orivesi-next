import { useState } from "react"

export default function Score({ title, type, composer }) {
  const [open, setOpen] = useState(false)
  const onMouseClick = () => setOpen(!open)

  return (
    <>
      <div
        onClick={onMouseClick}
        className="w-full h-14 px-10 bg-hover backdrop-blur-lg rounded-lg shadow cursor-pointer hover:scale-102 hover:shadow-md hover:bg-hoverDark duration-300 flex gap-20 justify-between items-center"
      >
        <p className="font-medium tracking-wider">{title}</p>
        <div className="hidden font-light md:flex gap-14">
          <p>{type}</p>
          <p>{composer}</p>
        </div>
      </div>
      {open ? (
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex gap-6">
            <div className="w-3/5 h-[300px] shadow bg-hover rounded-lg"></div>
            <div className="w-2/5 h-[300px] shadow bg-hover rounded-lg"></div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-1/5 aspect-video shadow bg-hover rounded-lg"></div>
            <div className="w-1/5 aspect-video shadow bg-hover rounded-lg"></div>
            <div className="w-1/5 aspect-video shadow bg-hover rounded-lg"></div>
            <div className="w-1/5 aspect-video shadow bg-hover rounded-lg"></div>
            <div className="w-1/5 aspect-video shadow bg-hover rounded-lg"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
