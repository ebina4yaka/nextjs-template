import { ReactElement } from 'react'
import DarkModeToggle from '../molecules/DarkModeToggle'

export default function Navbar(): ReactElement {
  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div
            className="flex-1 flex items-center
           justify-center sm:items-stretch sm:justify-start"
          >
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-semibold">Template Project</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="bg-gray-200 text-black px-3 py-2 rounded-md text-sm font-medium
                  dark:bg-gray-900 dark:text-white"
                >
                  Dashboard
                </a>
                <a
                  href="/"
                  className="text-white-300
                   hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                   dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black"
                >
                  Team
                </a>
                <a
                  href="/"
                  className="text-white-300
                   hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                   dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black"
                >
                  Projects
                </a>
                <a
                  href="/"
                  className="text-white-300
                   hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                   dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute
           inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700
             hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700
             hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700
             hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  )
}
