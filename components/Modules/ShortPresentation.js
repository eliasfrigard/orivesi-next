import Button from "../Button"

export default function ShortPresentation() {
  return (
    <div className="w-full flex flex-col justify-center gap-14 items-center bg-secondary-500 text-primary-500 py-32">
      <h3 className="text-6xl tracking-wider font-sketch font-bold">Tervetuloa meidän nettisivuille!</h3>
      <div
        className="prose max-w-3xl text-xl leading-[2.3rem] tracking-wide text-center text-primary-500"
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
