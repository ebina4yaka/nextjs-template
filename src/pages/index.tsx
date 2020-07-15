import React from 'react'
import Typography from '@material-ui/core/Typography'
import Copyright from '../atoms/Coryright'

export default function Index(): React.ReactElement {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js with TypeScript example
      </Typography>
      <Copyright />
    </>
  )
}
