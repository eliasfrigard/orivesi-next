import Button from "../Button"
import Image from "next/image"

export default function ShortPresentation() {
  return (
    <div className="w-full px-4 flex flex-col justify-center gap-10 md:gap-14 items-center bg-secondary-500 text-primary-500 py-20 md:py-32 mb-32 shadow-xl">
      <h3 className="text-center text-4xl lg:text-6xl tracking-wider font-sketch font-bold">
        Tervetuloa meidän nettisivulle!
      </h3>
      <div
        className="prose max-w-3xl text-md md:text-xl leading-[2.3rem] md:leading-[2.3rem] tracking-wide text-center text-primary-500"
        dangerouslySetInnerHTML={{
          __html:
            "OAS on kaikille avoin pelimannikollektiivi, johon voi liittyä mukaan milloin tahansa – ilmoittaudu mukaan viikonloppukursseille, piipahda Kaustisen pelimanniklinikoilla tai tule vaikka suoraan keikalle! Voit myös halutessasi liittyä yhdistyksen jäseneksi, jolloin saat mm. alennnusta kurssimaksuista. Nuotit ja muuta treenimateriaalia löytyy täältä nettisivuiltamme valtava määrä – siitä vaan soittamaan!",
        }}
      />

      {/* <div className="w-1/3 aspect-79/50 img relative shadow-xl rounded-[300px]">
        <Image
          className="rounded-full"
          src="/oas-portaat.jpeg"
          width="2048"
          height="1404"
          alt="Picture of the author"
          layout="responsive"
        />
      </div> */}
      <div>
        <Button url="/">Liity jäseneksi</Button>
      </div>
    </div>
  )
}
