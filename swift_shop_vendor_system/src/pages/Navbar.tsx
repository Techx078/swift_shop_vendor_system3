import { useState } from 'react'
import roimalogo from "../roima.png"
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full mb-[200px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    <div className="flex-shrink-0 ">
                        <img
                            src={roimalogo}
                            alt="Roima Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                    <div className="hidden md:flex space-x-4  items-center">
                        <NavLink to="/products"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                            })}
                        >Products</NavLink> |{" "}
                        <NavLink to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                            })}
                        >About</NavLink>
                        <span className="text-gray-700">Welcome, here </span>
                        <p className="block px-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                            <i className="fa-solid fa-user"></i>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
