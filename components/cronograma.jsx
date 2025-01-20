"use client"
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const colores = ["#A71FA7", "#404fd1", "#6d5299"]


function BotonFinal({ tipoBoton }) {
    if (tipoBoton == 1) {
        return <motion.div className="flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
        >
            {/* <Link className="text-white text-sm bg-[#942075] py-1 px-2 rounded-full inline-flex items-center" href="/planes" >
                Ver más salidas <span className="ml-2"><FaArrowRightLong /></span>
            </Link> */}
        </motion.div>
    } else {
        return <motion.div className="flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
        >
            <Link className="text-white text-sm bg-[#942075] py-1 px-2 rounded-full inline-flex items-center" href="/" >
                Proponer salida <span className="ml-2"><FaArrowRightLong /></span>
            </Link>
        </motion.div>
    }
}

function MiniCardSalidas({ fecha, dia, color, horaSalida, lugar, slogan }) {
    return (
        <motion.button className="justify-center text-center" style={{
            // margin: '1em'
        }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 20
            }}
            whileHover={{ scale: 1.2 }}
        >
                <div className="card">
                    <div className="date" style={{ backgroundColor: color }}>
                        <p className="day">{fecha}</p>
                        <p className="weekday">{dia}</p>
                        <p className="time">{horaSalida}</p>
                    </div>
                    <div className="info">
                        <h3 className="title">{lugar}</h3>
                        <p className="subtitle">{slogan}</p>
                    </div>
                </div>
        </motion.button>
    )
}


function Cronograma(props) {
    let colID = 0
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                // delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            style={{
                borderRadius: '15px',
            }} >

            <p style={{ color: '#baedeeff', fontSize: '2em' }}><b>PROGRAMACIÓN</b> <span style={{ color: '#baedeeff', fontSize: '0.5em' }}>DEL MES</span></p>

            <div className="flex">

                <div className="flex-none" style={{ writingMode: 'vertical-lr' }}>
                    <p style={{ color: '#baedeeff', fontSize: '2em' }}><b>DICIEMBRE</b></p>
                </div>

                <div className="flex-initial">
                    {/* <div className="grid"> */}
                    {/* <div className="grid grid-flow-row-dense grid-cols-3 auto-cols-min" style={{width: '80vw'}}> */}
                    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {props.proximasSalidas.map(function (salida) {
                            colID <= 1 ? colID++ : colID = 0
                            return <MiniCardSalidas
                                key={salida.id}
                                fecha={salida.fecha}
                                dia={salida.dia}
                                horaSalida={salida.itinerario[0].horaSalida}
                                lugar={salida.itinerario[0].lugar}
                                slogan={salida.slogan}
                                color={colores[colID]}
                            />
                        }
                        )}
                    </div>
                </div>
            </div>
            <BotonFinal tipoBoton={props.tipoBoton} />
        </motion.div>
    )
}

export default Cronograma