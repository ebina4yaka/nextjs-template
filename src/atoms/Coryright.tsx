import { ReactElement } from 'react'

export default function Copyright(): ReactElement {
  return (
    <div className="font-sans text-base">
      {'Copyright © '}
      <a href="https://material-ui.com/" target="_blank">
        {' Your Website '}
      </a>
      {`${new Date().getFullYear()}.`}
    </div>
  )
}
