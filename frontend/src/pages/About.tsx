import { Footer } from "../components/Common/Footer"
import { Navbar } from "../components/Common/Navbar"
import { SimpleCard } from "../components/Common/SimpleCard"

export default function About () {
  return (
    <div className="relative w-screen h-screen bg-[url('/backgroundHome.png')] bg-no-repeat bg-top bg-[length:100%_350%] min-h-[1600px] flex flex-col pt-16 text-white font-monserrat">
      <div className="absolute inset-0 bg-gradient-to-t from-[#863333] to-transparent z-0" />
      <div className="px-10 w-full mx-auto flex flex-col gap-10 max-w-[2040px] z-999">
        <Navbar />
        <div className="relative w-full mb-96">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-extrabold">Somos el banco digital mas grande  <br />
              de Latinoamérica</h2>
            <p className="text-3xl font-semibold">¡Queremos formar parte de tu día a día!</p>
            <p className="text-xl font-extralight max-w-[483px]">Estamos para ayudarte en todos los países de Latinoamérica, viaja sin problemas y disfruta de tus vacaciones sin preocupaciones.</p>
          </div>
          <img className="absolute right-28 top-0 translate-y-[12%]" src="/exampleCard.png" alt="Targeta de banco de ejemplo" />
        </div>

        <div className="flex w-full gap-10 justify-center mb-20">
          <SimpleCard title="16 años de experiencia">
            Estamos orgullosos de haber creado la mayor familia financiera hace 16 años. Y por eso seguimos creciendo
          </SimpleCard>

          <SimpleCard title="Lo mejor está llegando">
            Ayudamos a impulsar el progreso creando nuevas formas de comprar y  en América Latina a través de la banca digital
          </SimpleCard>
        </div>
      </div>
      <Footer className="z-999" />
    </div>
  )
}