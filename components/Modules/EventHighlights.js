import EventPreview from "./EventPreview"
import Button from "../Button"

export default function NewsHighlights({ news }) {
  return (
    <div className="flex flex-col	items-center my-32">
      <h3 className="tracking-wider text-5xl">SEURAAVAT TAPAHTUMAT</h3>

      {/* <h3 className='text-4xl font-medium text-center'>Seuraavat Tapahtumat</h3> */}
      <div className="flex w-full flex-wrap flex-column justify-between items-center mt-16 mb-20">
        {/* {news.map((item) => (
          ))} */}
        <EventPreview title="Jamit Oodin Kirjastossa"></EventPreview>
        <EventPreview title="Jamit Oodin Kirjastossa"></EventPreview>
        <EventPreview title="Jamit Oodin Kirjastossa"></EventPreview>

        {news.length % 2 === 0 ? "" : <div className="w-90 lg:w-[474px] xl:w-[525px]"></div>}
      </div>
      <Button url="/events">Lisää Tapahtumia</Button>
    </div>
  )
}
