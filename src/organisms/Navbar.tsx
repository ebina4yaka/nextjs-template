import { ReactElement, useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from '../molecules/DarkModeToggle'

export default function Navbar(): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar-size">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="hamburger-button"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-semibold">Logo</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="navbar-selected">
                  <Link href="/">Dashboard</Link>
                </div>
                <div className="navbar-no-selected">
                  <Link href="/">Team</Link>
                </div>
                <div className="navbar-no-selected">
                  <Link href="/">Projects</Link>
                </div>
                <div className="navbar-no-selected">
                  <Link href="/">Calendar</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-right">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${navbarOpen ? '' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="navbar-selected block">
            <Link href="/">Dashboard</Link>
          </div>
          <div className="navbar-no-selected block">
            <Link href="/">Team</Link>
          </div>
          <div className="navbar-no-selected block">
            <Link href="/">Projects</Link>
          </div>
          <div className="navbar-no-selected block">
            <Link href="/">Calendar</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
