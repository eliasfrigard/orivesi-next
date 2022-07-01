import Button from "../Button"
export default function SearchModule() {
  return (
    <div className=" selection:bg-accent-500 w-full flex flex-col justify-center items-center py-24 bg-secondary-500 text-primary-500 shadow-xl">
      <h3 className="text-center text-4xl lg:text-6xl tracking-wider font-sketch font-bold drop-shadow-lg">
        Hae meidän nuottiarkistosta
      </h3>

      <form
        action=""
        method="get"
        className="w-full lg:w-[900px] gap-6 sm:gap-4 container flex flex-col md:flex-row pt-10"
      >
        <input
          type="text"
          name=""
          id=""
          className="rounded-full p-4 w-full smz:w-3/5 text-grey-500 outline-none px-8 tracking-wider shadow-lg"
          placeholder="Hae nuottiarkistosta ..."
          autoFocus
        />
        <Button type="submit" url="/" width="w-full sm:w-2/5">
          Hae
        </Button>
      </form>
    </div>
  )
}
