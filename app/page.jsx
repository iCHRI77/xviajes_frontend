"use client"

import { useState, useEffect } from "react"
import Cronograma from "@/components/cronograma";
import { motion } from "framer-motion"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



const proximasSalidas = [
  {
    id: 1, fecha: "08", dia: "DOM", ciudad: "Cali", departamento: "Valle del Cauca", slogan: "Crece con nuestra flora",
    guia: { id: "123456", nombre: "Alberto Flores", calificacion: 5, img: "src/img" },
    itinerario: [
      { lugar: "Jardin Botanico", horaSalida: "7:00" }
    ]
  },
  {
    id: 2, fecha: "13", dia: "VIE", ciudad: "Palmira", departamento: "Valle del Cauca", slogan: "Conecta con tus ancestros",
    guia: { id: "789123", nombre: "Guillermo Alexis", calificacion: 4, img: "src/img" },
    itinerario: [
      { lugar: "Museo Arqueológico de Palmira", horaSalida: "9:00" }
    ]
  },
  {
    id: 3, fecha: "21", dia: "SAB", ciudad: "Cali", departamento: "Valle del Cauca", slogan: "Explora nuestra fauna",
    guia: { id: "789123", nombre: "Guillermo Alexis", calificacion: 4, img: "src/img" },
    itinerario: [
      { lugar: "Zoológico de Cali", horaSalida: "8:00" }
    ]
  },
  {
    id: 4, fecha: "22", dia: "DOM", ciudad: "Cali", departamento: "Valle del Cauca", slogan: "Crece con nuestra flora",
    guia: { id: "123456", nombre: "Alberto Flores", calificacion: 5, img: "src/img" },
    itinerario: [
      { lugar: "Jardin Botanico", horaSalida: "7:00" }
    ]
  }
]

function HomePage() {

  const [services, setServices] = useState([
    { id: 1, description: "Vacaciones" },
    { id: 2, description: "Pasadías" },
    { id: 3, description: "Aventuras" }
  ]);


  const today = new Date();
  const month = today.getUTCMonth();

  function calendarioLetras(mes) {
    switch (mes) {
      case 0:
        return 'enero'
        break;
      case 1:
        return 'febrero'
        break;
      case 2:
        return 'marzo'
        break;
      case 3:
        return 'abril'
        break;
      case 4:
        return 'mayo'
        break;
      case 5:
        return 'junio'
        break;
      case 6:
        return 'julio'
        break;
      case 7:
        return 'agosto'
        break;
      case 8:
        return 'septiembre'
        break;
      case 9:
        return 'octubre'
        break;
      case 10:
        return 'noviembre'
        break;
      case 11:
        return 'diciembre'
        break;
      default:
        break;
    }
  }

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentServiceIndex((prevState) => {
        if (prevState === services.length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 2000); // 2 segundos

    return () => clearInterval(intervalo);
  }, []);

  const currentService = services[currentServiceIndex];



  return (
    <>
      <Navbar />
      <main className="pb-5">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <div>
            <p className="text-2xl text-[#FFFFFF] max-w-60 pt-5 px-15 mx-10 text-center"
              style={{
                fontSize: '1em'
              }}
            >
              Armamos tus
              {/* <br /> */}
            </p>
            <p className="text-2xl text-[#1AFB47] max-w-60 px-15 pb-10 mx-10 text-center">
              <i><span className="text-4xl text-white" style={{
                fontSize: '2em'
              }}>{currentService.description}</span></i>

            </p>
          </div>
        </div>

        <div className="text-white text-center mb-9" >

          <h5>
            <b style={{ fontSize: '0.8em' }}> Mes de {calendarioLetras(month)}</b>
          </h5>
          <b style={{ fontSize: '1.8em' }}> SALIDAS </b>
        </div>

        <div className="text-center mb-9 mt-9">
          <form className="inline-flex flex-wrap mx-5 gap-7 justify-center items-center">
            <div>
              <label htmlFor="destino" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿A dónde vas?</label>
              <input type="text" id="destino" placeholder="Destino" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="fecha-entrada" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de entrada</label>
              <input type="date" id="fecha-entrada" name="fecha-entrada" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="fecha-salida" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de salida</label>
              <input type="date" id="fecha-salida" name="fecha-salida" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="personas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personas</label>
              <input type="text" id="personas" placeholder="" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </form>

        </div>
      </main >


      <div className="relative flex flex-wrap justify-between px-2 py-2 bg-[#baedeeff]">
      </div>

      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <Cronograma proximasSalidas={proximasSalidas} tipoBoton={1} />
      </div>

      <div className="text-center mb-9" >

        <h3 style={{
          fontSize: '1.8em', marginTop: '30px', marginBottom: '20px'
        }} className="text-[#d8429f] mx-auto">
          <b>DESCONECTA, RECONECTA, TRANSFORMA</b>
        </h3>
        <p className="px-4">EXPERIENCIAS ECOLÓGICAS PARA UN TURISMO CONSCIENTE </p>
      </div>
      <hr />

      <div className="container mx-auto px-4 py-4 grid grid-cols-2 h-56
        items-center">

        <h3 style={{
          fontSize: '1.8em'
        }} className="text-[#d8429f] mx-auto">
          <b>¿Te preocupa la logística?</b>
        </h3>

        <p className="px-4">Relájate y déjanos llevarte a una aventura inolvidable en la naturaleza. Nosotros nos encargamos de todo, tú solo disfruta del viaje.</p>

      </div>
      <Footer />
    </>
  )
}

export default HomePage