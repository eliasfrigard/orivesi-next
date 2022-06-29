import Button from "../Button"
export default function SearchModule() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-24 bg-secondary-500 mt-32 text-primary-500">
      <h3 className="text-center text-4xl lg:text-6xl tracking-wider font-sketch font-bold">
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
          className="rounded-full p-4 w-full text-grey-500 outline-none px-8 tracking-wider"
          placeholder="Hae nuottiarkistosta ..."
          autoFocus
        />
        <Button type="submit" url="/" width="w-full">
          Hae
        </Button>
      </form>
    </div>
  )
}
