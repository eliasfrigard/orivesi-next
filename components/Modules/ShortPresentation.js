import Button from "../Button"
import Title from "../Title"

export default function ShortPresentation() {
  return (
    <div className="selection:bg-accent-500 w-full px-4 flex flex-col justify-center gap-10 md:gap-14 items-center bg-secondary-500 text-primary-500 py-20 md:py-32 mb-32 shadow-xl">
      <Title version="v2">Tervetuloa meidän nettisivulle!</Title>

      <div
        className="prose max-w-3xl text-md md:text-xl leading-[2.3rem] md:leading-[2.3rem] tracking-wide text-center text-primary-500 drop-shadow-lg"
        dangerouslySetInnerHTML={{
          __html:
            "OAS on kaikille avoin pelimannikollektiivi, johon voi liittyä mukaan milloin tahansa – ilmoittaudu mukaan viikonloppukursseille, piipahda Kaustisen pelimanniklinikoilla tai tule vaikka suoraan keikalle! Voit myös halutessasi liittyä yhdistyksen jäseneksi, jolloin saat mm. alennnusta kurssimaksuista. Nuotit ja muuta treenimateriaalia löytyy täältä nettisivuiltamme valtava määrä – siitä vaan soittamaan!",
        }}
      />
      <div>
        <Button url="/">Liity jäseneksi</Button>
      </div>
    </div>
  )
}
