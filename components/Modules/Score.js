export default function Score({ title, type, composer }) {
  return (
    <div className="w-full h-14 px-10 bg-hover backdrop-blur-lg rounded-lg shadow cursor-pointer hover:scale-102 hover:shadow-md duration-300 flex gap-20 justify-between items-center">
      <p className="font-bold tracking-wider">{title}</p>
      <div className="flex gap-14">
        <p>{type}</p>
        <p>{composer}</p>
      </div>
    </div>
  )
}
