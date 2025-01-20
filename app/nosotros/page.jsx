"use client"
import { motion } from "framer-motion";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { IoTodayOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function NosotrosPage() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-[#008F39]">
              Sobre nosotros
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empresa de logística para viajes, pasadías y vacaciones
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nacimos como un proyecto de universidad, pero nos quedamos porque queremos brindarles la mejor experiencia cuando se trata de:
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#008F39]">
                    <span style={{ color: '#FFFFFF', fontSize: '1.5em' }}><PiAirplaneTakeoff /></span>
                  </div>
                  Viajar
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Contamos con agentes altamente calificados. De esa forma, asegurando la ingridad del grupo mientras visualizas los mejores paisajes.
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#008F39]">
                    <span style={{ color: '#FFFFFF', fontSize: '1.5em' }}><IoTodayOutline /></span>
                  </div>
                  Hacer pasadías
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  ¿No quieres quedarte por muchos días? Excelente, tambien tenemos planes de un solo día donde conocerás los lugares más interesantes.
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#008F39]">
                    <span style={{ color: '#FFFFFF', fontSize: '1.5em' }}><BsCalendar4Week /></span>
                  </div>
                  Quedate algunos días
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Si deseas quedarte, tambien ofrecemos planes para tus vacaciones. ¡Lo mejor es que tienes todo incluido! Atrevete a disfrutar de los mejores días conociendo lugares increíbles.
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8 }}
                className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#008F39]">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Recordar tu experiencia para siempre
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Queremos que recuerdes tu experiencia con nosotros, por lo que te ofrecemos un plan de fotografía incluido en el paquete que escojas, tus trips estarán guardados en nuestra nube y podrás compartir tus experiencias con quienes más quieras.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default NosotrosPage