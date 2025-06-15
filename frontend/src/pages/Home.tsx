import { nameLogo } from "../utils/constant";  
import { Navbar } from "../components/Common/Navbar";  
import { CreditCard } from "../components/svg/CreditCard";  
import { TransacionIcon } from "../components/svg/TransactionIcon";  
import { BankIcon } from "../components/svg/BankIcon";  
import { Footer } from "../components/Common/Footer";  
import { SimpleCard } from "../components/Common/SimpleCard";  

export default function Home() {  
  return (
    <div className="w-full min-h-screen flex flex-col bg-[url('/backgroundHome.png')] bg-no-repeat bg-center bg-cover pt-16 text-white font-montserrat">  
      <div className="px-4 md:px-10 w-full max-w-[2040px] mx-auto">  
        {/* Navbar */}  
        <Navbar />  

        {/* Bienvenida */}  
        <div className="mt-12 md:mt-24 flex flex-col items-center text-center px-4">  
          <h2 className="text-3xl md:text-5xl font-extrabold">  
            Te damos la bienvenida a{" "}  
            <span className="border-b-2 border-b-primary">{nameLogo}</span>  
          </h2>  
          <p className="mt-4 text-2xl md:text-4xl font-semibold mb-4">  
            Empoderamos tus finanzas  
          </p>  
          <p className=" mb-5 max-w-md md:max-w-xl text-xl md:text-2xl text-pretty">  
            Creá una cuenta con nosotros y hace crecer tus finanzas. Ofrecemos la mejor calidad en Banca Digital  
          </p>  
        </div>  

        {/* Imagen y SVG decorativo */}  
        <div className="relative w-full h-[550px] mt-12">  
          <img  
            src="/tarjeta.png"  
            alt="tarjeta de banco"  
            className="absolute right-3 top-0 -translate-y-24 z-10 max-w-full h-auto"  
          />  
          <svg  
            className="absolute right-0 translate-x-10 -translate-y-10 z-0"  
            width="435"  
            height="492"  
            viewBox="0 0 435 492"  
            fill="none"  
            xmlns="http://www.w3.org/2000/svg"  
          >  
            <circle cx="246" cy="246" r="246" fill="#0095BE" />  
          </svg>  
        </div>  

        {/* Sección Estadísticas */}  
        <div className="bg-[#3D544D3D]/76 flex flex-col md:flex-row justify-around items-center md:items-stretch px-4 md:px-20 py-8 rounded-4xl mt-12 gap-4 md:gap-8">  
          {[  
            { value: '16+', label: 'Años de experiencia' },  
            { value: '250+', label: 'Empresas asociadas' },  
            { value: '40+', label: 'Estamos en toda LATAM' },  
            { value: '10.2k+', label: 'Clientes' },  
          ].map((item, index) => (  
            <div  
              key={index}  
              className="flex flex-col items-center justify-center flex-1 text-center px-4 py-2"  
            >  
              <p className="text-4xl md:text-5xl font-bold">{item.value}</p>  
              <p className="text-xl md:text-2xl">{item.label}</p>  
            </div>  
          ))}  
        </div>  

        {/* Sección Nuestros Productos */}  
        <div className="mt-12 px-4 md:px-10">  
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">  
            Nuestros Productos  
          </h2>  
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">  
            {/* Producto 1 */}  
            <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4">  
              <div className="flex justify-center items-center gap-4 mb-4">  
                <p className="text-3xl md:text-4xl font-semibold">  
                  Seguridad Garantizada  
                </p>  
                <CreditCard />  
              </div>
              <p className="text-xl font-extralight">En nuestra app bancaria, tu seguridad es nuestra prioridad. Utilizamos tecnología de encriptación avanzada y autenticación de múltiples factores para proteger tus datos y transacciones. Con nosotros, tu dinero y tu información están siempre seguros.</p>
            </div>

                        {/* Producto 2 */}  
              <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4">  
              <div className="flex justify-center items-center gap-4 mb-4">  
                <p className="text-3xl md:text-4xl font-semibold">  
                  Historial de transacciones  
                </p>  
                <TransacionIcon />  
              </div>  
              <p className="text-xl font-extralight">  
                Consulta tu historial de transacciones en cualquier momento y  
                con total seguridad. Cada movimiento queda registrado de manera  
                clara y detallada, para que siempre tengas el control de tus  
                finanzas con total transparencia y confianza.  
              </p>  
            </div>  
            {/* Producto 3 */}  
            <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4">  
              <div className="flex justify-center items-center gap-4 mb-4">  
                <p className="text-3xl md:text-4xl font-semibold">  
                  Ayuda personalizada  
                </p>  
                <BankIcon />  
              </div>  
              <p className="text-xl font-extralight">  
                Nuestro equipo de soporte está siempre disponible para  
                brindarte asistencia personalizada. Ya sea una duda sobre  
                tu cuenta o un detalle de una transacción, estamos aquí para  
                ayudarte de manera rápida y efectiva.  
              </p>  
            </div>  
          </div>  
        </div> 
          {/* Texto */}
          <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-10 mt-8 md:mt-12">
          <div className="flex flex-col gap-2 justify-center text-center md:text-left max-w-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">La manera inteligente de <br /> usar tus tarjetas </h2>
            <p className="text-2xl md:text-3xl mt-4">Te bonificamos tu primer tarjeta de débito</p>
          </div>
          {/* Imagen */}
          <img src="/groupCard.png" alt=""  className="w-full max-w-sm md:max-w-md h-auto"/>
          </div>

        {/* Sección de clientes */}  
        <div className="mt-12 px-4 md:px-10">  
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">  
            Nuestros clientes nos eligen  
          </h2>  
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
            {/* Cliente 1 */}  
            <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4">  
              <div className="bg-primary text-white rounded-full w-13 h-13 flex justify-center items-center text-xl mx-auto">  
                66  
              </div>  
              <p className="text-lg font-light text-center">  
                “¡Pará, pará, pará! ¿No entendés? Esta app es lo que necesitás para que tu plata esté más segura que un secreto bien guardado. Nada de vueltas, todo clarito, sin sorpresas..."  
              </p>  
              <div className="flex justify-center items-center gap-2 mt-auto mx-auto">  
                <img  
                  src="/GuillermoFrancella.png"  
                  alt="Guillermo Francella"  
                  className="w-12 h-12 rounded-full object-cover"  
                />  
                <div className="text-center">  
                  <p className="font-extralight">Guillermo Francella</p>  
                  <p className="text-[#ADB2B1] text-sm">Actor</p>  
                </div>  
              </div>  
            </div>  

            {/* Cliente 2 */}  
            <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4 col-span-1 md:col-span-1">  
              <div className="bg-primary text-white rounded-full w-13 h-13 flex justify-center items-center text-xl mx-auto">  
                66  
              </div>  
              <p className="text-lg font-light text-center">  
                "La verdad, a veces la vida te da unas curvas más cerradas que Mónaco en lluvia. Aprendí por las malas que hay cosas que no se pueden rebobinar…"  
              </p>  
              <div className="flex justify-center items-center gap-2 mt-auto mx-auto">  
                <img  
                  src="/FrancoColapinto.png"  
                  alt="Franco Colapinto"  
                  className="w-12 h-12 rounded-full object-cover"  
                />  
                <div className="text-center">  
                  <p className="font-extralight">Franco Colapinto</p>  
                  <p className="text-[#ADB2B1] text-sm">Piloto</p>  
                </div>  
              </div>  
            </div>  

            {/* Cliente 3 */}
            <div className="flex flex-col bg-[#27322F3D]/76 rounded-4xl p-6 gap-4">
              <div className="bg-primary text-white rounded-full w-13 h-13 flex justify-center items-center text-xl mx-auto">
                  66
                </div>
                <p className="text-lg font-light text-center">
                  “La app que te permite tener control absoluto de tus finanzas, sin misterios ni trampas. No importa lo que pase, tus transacciones siempre claras, sin drama, sin nominaciones. ¡Con esta app, podés estar tranquilo y manejar tu plata como un campeón!”
                </p>
                <div className="flex justify-center items-center gap-2 mt-auto mx-auto">
                  <img
                    src="/SantiagoDelMoro.png"
                    alt="Santiago del moro"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <p className="font-extralight">Santiago del Moro</p>
                    <p className="text-[#ADB2B1] text-sm">Conductor de TV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mt-12 px-4 md:px-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            <span className="text-primary">Preguntas</span> frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard
              title="¿Cómo abro una cuenta en nuestro banco?"
            >
              ¡Abrir una cuenta es muy sencillo! Presiona el botón “Registrate”, completa el formulario con tus datos y listo!
            </SimpleCard>
            <SimpleCard
              title="¿Qué documentos necesito para abrir una cuenta?"
            >
              Por normativa del BCRA, necesitamos que completes tus datos y que nos compartas un DNI o Pasaporte para verificar tu identidad y asignarte una cuenta bancaria.
            </SimpleCard>
            <SimpleCard
              title="¿Cómo puedo acceder a mis cuentas?"
            >
              Una vez creada tu cuenta, podrás ver tus tarjetas asociadas, saldo e historial de gastos y transferencias en la sección correspondiente.
            </SimpleCard>
            <SimpleCard
              title="¿Mis transacciones son seguras en CapyBank?"
            >
              En CapyBank, la seguridad es prioridad. Contamos con tecnología de alta gama para proteger todas tus operaciones.
            </SimpleCard>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
    </div>
  );
}
