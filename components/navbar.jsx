'use client'

import Link from "next/link"
import { useState } from "react";
import { FaBars } from "react-icons/fa";



let menu = [
    { id: 1, description: "Inicio", url: "/" },
    { id: 2, description: "Nosotros", url: "/nosotros" },
    { id: 3, description: "Planes", url: "/planes" },
    // { id: 4, description: "Users", url: "/users" },
]


function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#b08ceeff]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                            href="/"
                        >
                            <img
                                src="/xForceViajesLogo.png"
                                alt="Descripción de la imagen"
                                // fill={true} // Hace que la imagen ocupe todo el espacio del contenedor
                                style={{ objectFit: 'cover', width: '15em' }} // Ajusta cómo la imagen se adapta al contenedor

                            />

                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i> <FaBars /></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {menu.map(obj =>
                                <li key={obj.id} className="group/item hover:bg-[#baedeeff] rounded-md">
                                    <Link href={obj.url}
                                        className="text-md px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white
                                        hover:opacity-75 hover:text-black" >
                                        {obj.description}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="relative flex flex-wrap justify-between px-2 py-2 bg-[#baedeeff]">
            </div>
        </div>
    )
}

export default Navbar