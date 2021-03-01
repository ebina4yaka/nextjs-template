import { ReactElement } from 'react'
import Copyright from '../atoms/Coryright'

export default function Index(): ReactElement {
  return (
    <div className="lg:container mx-auto">
      <div className="md:box-content">
        <div className="font-sans text-4xl">
          Next.js with TypeScript example
        </div>
        <footer>
          <Copyright />
        </footer>
      </div>
    </div>
  )
}
