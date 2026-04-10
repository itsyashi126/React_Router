
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav className="bg-slate-500 text-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-400 cursor-pointer">
            Logo
          </h1>

          <ul className="flex items-center gap-8 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-rose-500 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-rose-500 transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-rose-500 transition duration-300"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-rose-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

