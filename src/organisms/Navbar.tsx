import { ReactElement } from 'react'
import DarkModeToggle from '../molecules/DarkModeToggle'

export default function Navbar(): ReactElement {
  return (
    <nav className="navbar">
      <div className="navbar-size">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-semibold">Logo</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="navbar-selected">
                  Dashboard
                </a>
                <a href="/" className="navbar-no-selected">
                  Team
                </a>
                <a href="/" className="navbar-no-selected">
                  Projects
                </a>
                <a href="/" className="navbar-no-selected">
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-right">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="navbar-selected block">
            Dashboard
          </a>
          <a href="/" className="navbar-no-selected block">
            Team
          </a>
          <a href="/" className="navbar-no-selected block">
            Projects
          </a>
          <a href="/" className="navbar-no-selected block">
            Calendar
          </a>
        </div>
      </div>
    </nav>
  )
}
