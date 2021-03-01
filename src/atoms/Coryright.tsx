import { ReactElement } from 'react'

export default function Copyright(): ReactElement {
  return (
    <div className="font-sans text-base">
      {'Copyright © '}
      <a
        href="https://material-ui.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {' Your Website '}
      </a>
      {`${new Date().getFullYear()}.`}
    </div>
  )
}
