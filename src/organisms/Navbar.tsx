import { ReactElement, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeToggle from '../molecules/DarkModeToggle'

export default function Navbar(): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()

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
                <Link href="/">
                  <div
                    className={
                      router.pathname === '/'
                        ? 'navbar-selected'
                        : 'navbar-no-selected'
                    }
                  >
                    Dashboard
                  </div>
                </Link>
                <Link href="/team">
                  <div
                    className={
                      router.pathname.match(/^\/team/)
                        ? 'navbar-selected'
                        : 'navbar-no-selected'
                    }
                  >
                    Team
                  </div>
                </Link>
                <Link href="/projects">
                  <div
                    className={
                      router.pathname.match(/^\/projects/)
                        ? 'navbar-selected'
                        : 'navbar-no-selected'
                    }
                  >
                    Projects
                  </div>
                </Link>
                <Link href="/calendar">
                  <div
                    className={
                      router.pathname.match(/^\/calendar/)
                        ? 'navbar-selected'
                        : 'navbar-no-selected'
                    }
                  >
                    Calendar
                  </div>
                </Link>
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
          <Link href="/">
            <div
              className={
                router.pathname === '/'
                  ? 'navbar-selected block'
                  : 'navbar-no-selected block'
              }
            >
              Dashboard
            </div>
          </Link>
          <Link href="/team">
            <div
              className={
                router.pathname.match(/^\/team/)
                  ? 'navbar-selected block'
                  : 'navbar-no-selected block'
              }
            >
              Team
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={
                router.pathname.match(/^\/projects/)
                  ? 'navbar-selected block'
                  : 'navbar-no-selected block'
              }
            >
              Projects
            </div>
          </Link>
          <Link href="/calendar">
            <div
              className={
                router.pathname.match(/^\/calendar/)
                  ? 'navbar-selected block'
                  : 'navbar-no-selected block'
              }
            >
              Calendar
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
