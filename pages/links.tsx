import Layout from '../components/Layouts/Default'
import Image from 'next/image'

export default function Links() {
  const externalLinks = [
    {
      title: "Bandcamp",
      description: "Osta tai kuuntele julkaisujamme Bandcampissa.",
      url: "https://orivesiallstars.bandcamp.com/",
      buttonText: "Siirry Bandcampiin",
      image: "/a3159776273_16.jpg",
    },
    {
      title: "Orivesi All Stars kauppa",
      description: "Tilaa Orivesi All Stars -tuotteet meidän kaupasta.",
      url: "https://kolibri-shop.fi/allstars/",
      buttonText: "Siirry kauppaan",
      image: "/All-Stars-clique-miami-huppari-1.jpg",
    }
  ];

  return (
    <Layout
      pageTitle='Linkit'
      pageDescription='Orivesi All Stars - Linkit ulkopuolisiin palveluihin'
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageUrl='/links'
    >
      <div className='container flex flex-col items-center'>
        <div className='flex flex-col gap-8 w-full max-w-3xl mt-8 md:mt-16'>
          {externalLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-102 active:scale-98 border border-secondary-200"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section - using your custom 16/9 aspect ratio */}
                <div className="md:w-1/3 aspect-16/9 md:aspect-auto relative overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={225}
                  />
                  {/* Subtle overlay using your secondary color */}
                  <div className="absolute inset-0 bg-secondary-500/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <h2 className="font-round text-2xl text-secondary-500 mb-2">
                    {link.title}
                  </h2>
                  <p className="text-grey-300 text-base mb-4 leading-relaxed font-work">
                    {link.description}
                  </p>
                  <div className="inline-flex items-center text-accent-500 font-bold group-hover:text-accent-600 transition-colors">
                    {link.buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}