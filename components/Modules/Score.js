import { useState } from "react"

export default function Score({ title, type, composer, youtubeVideos, isHeader = false }) {
  const [open, setOpen] = useState(false)
  const onMouseClick = () => setOpen(!open)

  let numberOfVideos = 0

  if (youtubeVideos) {
    youtubeVideos = youtubeVideos.split("\n")
    numberOfVideos = youtubeVideos.length
  } else {
    youtubeVideos = []
  }

  return (
    <>
      {isHeader ? (
        <div className="w-full h-14 px-10 flex gap-20 justify-between items-center">
          <h3 className="flex-1 font-medium tracking-wider">{title}</h3>

          <div className="flex flex-1 font-light md:flex items-center gap-14">
            <h3 className="flex-1 tracking-wider">{type}</h3>
            <h3 className="flex-1 tracking-wider">{composer}</h3>
          </div>
        </div>
      ) : (
        <div
          onClick={onMouseClick}
          className="w-full h-14 px-10 bg-hover backdrop-blur-lg rounded-lg shadow cursor-pointer hover:scale-102 hover:shadow-md hover:bg-hoverDark duration-300 flex gap-20 justify-between items-center"
        >
          <p className="flex-1 font-medium tracking-wide">{title}</p>
          <div className="flex flex-1 font-light md:flex items-center gap-14">
            <p className="flex-1 tracking-wide">{type}</p>
            <p className="flex-1 tracking-wide">{composer}</p>
          </div>
        </div>
      )}
      {/* {open ? (
        <div className="flex flex-col gap-6 mb-8">
        <div className="flex gap-6">
        <div className="w-3/5 h-[300px] shadow bg-hover rounded-lg"></div>
        <div className="w-2/5 h-[300px] shadow bg-hover rounded-lg"></div>
          </div>
          <div className="w-full relative flex flex-wrap gap-4">
            {youtubeVideos.map((video) => (
              <div
                className="flex-1 overflow-hidden shadow-xl min-w-[calc(25%)] max-w-[calc(50%)] aspect-16/9 bg-black rounded-lg"
                key={video}
              >
                <iframe
                  className="w-full aspect-16/9"
                  src={`https://www.youtube.com/embed/${video}`}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  )
}
