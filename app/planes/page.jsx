import Cronograma from "@/components/cronograma"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

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
    id: 4, fecha: "28", dia: "SAB", ciudad: "El Cerrito", departamento: "Valle del Cauca", slogan: "Disfruta de una choco aventura",
    guia: { id: "789123", nombre: "Guillermo Alexis", calificacion: 4, img: "src/img" },
    itinerario: [
      { lugar: "Chocolate Delicao", horaSalida: "10:00" }
    ]
  },
  {
    id: 5, fecha: "28", dia: "SAB", ciudad: "Palmira", departamento: "Valle del Cauca", slogan: "Conecta con tus ancestros",
    guia: { id: "789123", nombre: "Guillermo Alexis", calificacion: 4, img: "src/img" },
    itinerario: [
      { lugar: "Museo Arqueológico de Palmira", horaSalida: "9:00" }
    ]
  },
  {
    id: 6, fecha: "29", dia: "DOM", ciudad: "Cali", departamento: "Valle del Cauca", slogan: "Explora nuestra fauna",
    guia: { id: "789123", nombre: "Guillermo Alexis", calificacion: 4, img: "src/img" },
    itinerario: [
      { lugar: "Zoológico de Cali", horaSalida: "8:00" }
    ]
  }
]


function PlanesPage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-center mb-9 mt-9">
          <h1 style={{ fontSize: '2em' }}><b>Próximos destinos</b></h1>
          <br />
          <form className="inline-flex flex-wrap mx-5 gap-7 justify-center items-center">
            <div>
              <label htmlFor="destino" className="block mb-2 text-sm font-medium text-gray-900">¿A dónde vas?</label>
              <input type="text" id="destino" placeholder="Destino" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="fecha-entrada" className="block mb-2 text-sm font-medium text-gray-900">Fecha de entrada</label>
              <input type="date" id="fecha-entrada" name="fecha-entrada" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="fecha-salida" className="block mb-2 text-sm font-medium text-gray-900">Fecha de salida</label>
              <input type="date" id="fecha-salida" name="fecha-salida" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="personas" className="block mb-2 text-sm font-medium text-gray-900">Personas</label>
              <input type="text" id="personas" placeholder="" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </form>

        </div>
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <Cronograma proximasSalidas={proximasSalidas} tipoBoton={0} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PlanesPage