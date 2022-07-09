import { useState } from "react"

export default function Search({ input, handleSubmit }) {
  const [sorting, setSorting] = useState("Title")
  const [direction, setDirection] = useState("asc")
  const [searchValue, setsearchValue] = useState("")
  const [disableDirection, setDisableDirection] = useState(true)

  const filteringOptions = ["Title", "Composer", "Dancetype", "Date"]

  const handleSortingChange = (event) => {
    if (filteringOptions.includes(event.target.value)) setDisableDirection(false)
    else setDisableDirection(true)
  }

  const handleDirectionChange = (event) => {
    setDirection(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault

    handleSubmit({
      searchValue,
      sorting,
      direction,
    })
  }

  return (
    <div className="w-full bg-secondary-500 py-20">
      <form
        className="container flex justify-center"
        onSubmit={handleOnSubmit({ searchValue, sorting, direction })}
      >
        <div className="xl:w-2/3 ">
          <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
            <input
              type="text"
              name=""
              id=""
              className="rounded-full p-4 w-full smz:w-3/5 text-grey-500 bg-primary-500 outline-none px-8 tracking-wider shadow-lg "
              placeholder="Hae nuottiarkistosta ..."
              aria-label="Search"
              aria-describedby="button-addon2"
              autoFocus
            />
          </div>
        </div>
      </form>
    </div>
  )
}
