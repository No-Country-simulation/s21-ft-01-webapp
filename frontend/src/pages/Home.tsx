import { nameLogo } from "../utils/constant";
import { Navbar } from "../components/Common/Navbar";
import { CreditCard } from "../components/svg/CreditCard";
import { TransacionIcon } from "../components/svg/TransactionIcon";
import { BankIcon } from "../components/svg/BankIcon";
import { Footer } from "../components/Common/Footer";
import { SimpleCard } from "../components/Common/SimpleCard";
// TODO: Hacer un refactor sacar componentes comunes
export default function Home () {
  return (
    <div className="w-full min-h-[4428px] bg-[url('/backgroundHome.png')] bg-no-repeat bg-center flex flex-col bg-[length:100%_100%] pt-16 text-white font-monserrat">
      <div className="px-10 w-full max-w-[2040px] mx-auto">
        <Navbar />
        <div className="mt-24 flex flex-col gap-4">
          <h2 className="text-5xl font-extrabold">Te damos la bienvenida a <span className="border-b-2 border-b-primary">{nameLogo}</span></h2>
          <p className="font-semibold text-4xl mb-4">Empoderamos tus finanzas</p>
          <p className="max-w-[483px] text-xl text-pretty">Creá una cuenta con nosotros y hace crecer tus finanzas. Ofrecemos la mejor calidad en Banca Digital</p>
        </div>
        <div className="relative w-full h-[550px]">
          <img src='/tarjeta.png' alt="targeta de banco" className="absolute right-3 top-0 -translate-y-30 z-10" />
          <svg className="absolute right-0 translate-x-10 -translate-y-15 z-0" width="435" height="492" viewBox="0 0 435 492" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="246" cy="246" r="246" fill="#0095BE" />
          </svg>
        </div>
        <div className="bg-[#3D544D3D]/76 flex justify-between px-26 py-10 rounded-4xl ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-5xl font-bold">16+</p>
            <p className="text-xl">Años de experiencia</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-5xl font-bold">250+</p>
            <p className="text-xl">Empresas asociadas</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-5xl font-bold">40+</p>
            <p className="text-xl">Estamos en toda LATAM</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-5xl font-bold">10.2k+</p>
            <p className="text-xl">Clientes</p>
          </div>
        </div>
        <div className="flex flex-col gap-15 mt-15">
          <h2 className="text-5xl font-extrabold text-center">Nuestros Productos</h2>
          <div className="flex text-center ">
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-4">
                <p className="text-3xl font-semibold">Seguridad Garantizada </p>
                <CreditCard />
              </div>
              <p className="text-xl font-extralight">En nuestra app bancaria, tu seguridad es nuestra prioridad. Utilizamos tecnología de encriptación avanzada y autenticación de múltiples factores para proteger tus datos y transacciones. Con nosotros, tu dinero y tu información están siempre seguros.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-4">
                <p className="text-3xl font-semibold">Historial de transacciones</p>
                <TransacionIcon />
              </div>
              <p className="text-xl font-extralight">Consulta tu historial de transacciones en cualquier momento y con total seguridad. Cada movimiento queda registrado de manera clara y detallada, para que siempre tengas el control de tus finanzas con total transparencia y confianza.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-4">
                <p className="text-3xl font-semibold">Ayuda personalizada</p>
                <BankIcon />
              </div>
              <p className="text-xl font-extralight">Nuestro equipo de soporte está siempre disponible para brindarte asistencia personalizada. Ya sea una duda sobre tu cuenta o un detalle de una transacción, estamos aquí para ayudarte de manera rápida y efectiva.</p>
            </div>
          </div>
        </div>
        <div className="flex mt-30 px-10 justify-between">
          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-5xl font-extrabold">La manera inteligente de <br /> usar tus tarjetas </h2>
            <p className="text-3xl">Te bonificamos tu primer tarjeta de débito</p>
          </div>
          <img src="/groupCard.png" alt="" />
        </div>

        <div className="mt-15">
          <h2 className="text-5xl font-extrabold text-center mb-30">Nuestros clientes nos eligen</h2>
          <div className="grid grid-cols-7 gap-10 mt-15 px-15">
            <div className="flex flex-col gap-4 bg-[#27322F3D]/76 rounded-4xl py-10 px-5 backdrop-blur-xs col-span-2">
              <div className="bg-primary text-white rounded-full w-13 h-13 flex justify-center items-center text-xl">
                66
              </div>
              <p className="text-xl font-light mt-5">
                “¡Pará, pará, pará! ¿No entendés? Esta app es lo que necesitás para que tu plata esté más segura que un secreto bien guardado. Nada de vueltas, todo clarito, sin sorpresas. Mirá, no soy un genio de las finanzas, pero con esta app, hasta yo sé lo que estoy haciendo. ¡Es lo más!"
              </p>
              <div className="flex gap-1 mt-auto">
                <img src="/GuillermoFrancella.png" alt="Imagen de Guillermo Francella" className="rounded-full" />
                <div>
                  <p className="font-extralight">Guillermo Francella</p>
                  <p className="text-[#ADB2B1]">Actor</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#27322F3D]/76 rounded-4xl py-10 px-5 backdrop-blur-xs col-span-3">
              <div className="bg-primary text-white rounded-full w-13 h-13 text-xl flex justify-center items-center">
                66
              </div>
              <p className="text-xl font-light mt-5">
                "La verdad, a veces la vida te da unas curvas más cerradas que Mónaco en lluvia. Aprendí por las malas que hay cosas que no se pueden rebobinar… pero con esta app bancaria, al menos puedo tener el control de mis finanzas. Me ayudó a organizar mis gastos, revisar cada transacción y, sobre todo, asegurarme de que no me vuelva a pasar lo mismo. Seguridad, claridad y un equipo que está ahí cuando lo necesitás. En la pista y en la vida, tener confianza lo es todo."
              </p>
              <div className="flex gap-1 mt-auto">
                <img src="/FrancoColapinto.png" alt="Imagen de Franco Colapinto" className="rounded-full" />
                <div>
                  <p className="font-extralight">Franco Colapinto</p>
                  <p className="text-[#ADB2B1]">Piloto</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#27322F3D]/76 rounded-4xl py-10 px-5  backdrop-blur-xs col-span-2">
              <div className="bg-primary text-white rounded-full w-13 h-13 text-xl flex justify-center items-center">
                66
              </div>
              <p className="text-xl font-light mt-5">
                “La app que te permite tener control absoluto de tus finanzas, sin misterios ni trampas. No importa lo que pase, tus transacciones siempre claras, sin drama, sin nominaciones. ¡Con esta app, podés estar tranquilo y manejar tu plata como un campeón!”
              </p>
              <div className="flex gap-1 mt-auto">
                <img src="/SantiagoDelMoro.png" alt="Imagen de Santiago del moro" className="rounded-full" />
                <div>
                  <p className="font-extralight">Santiago del moro</p>
                  <p className="text-[#ADB2B1]">Conductor de TV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30 flex justify-center w-full items-center flex-col">
          <h2 className="text-5xl font-medium text-center mb-30"><span className="text-primary">Preguntas</span> frecuentes</h2>
          <div className="grid grid-cols-2 gap-10 mt-15">
            <SimpleCard title="¿Cómo abro una cuenta en nuestro banco?">
              ¡Abrir una cuenta es muy sencillo !Presiona el botón “Registrate” completa el formulario con tus datos y listo!
            </SimpleCard>
            <SimpleCard title="¿Que documentos necesito para abrir una cuenta?">
              Por normativa del BCRA necesitamos que completes tus datos y que nos compartas un DNI o Pasaporte para poder verificar tu identidad y asignarte una Cuenta bancaria
            </SimpleCard>
            <SimpleCard title="¿Como puedo acceder a mis cuentas?">
              Una vez creada tu cuenta vas a encontrar una sección en la página principal con tus tarjetas asociadas, tu saldo e historial de gastos y transferencias
            </SimpleCard>
            <SimpleCard title="¿Mis transacciones son seguras en CapyBank?">
              En CapyBank nos preocupamos por la seguridad de nuestros clientes, contamos con la mas alta tecnología en banca digital.
            </SimpleCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 