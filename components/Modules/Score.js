import { useState } from "react"

export default function Score({ title, type, composer, youtubeVideos }) {
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
          <div className="w-full relative flex flex-wrap gap-4">
            {youtubeVideos.map((video) => (
              <div
                className="flex-1 min-w-[calc(25%)] max-w-[calc(50%)] aspect-16/9 bg-black rounded-lg"
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
      )}
    </>
  )
}
