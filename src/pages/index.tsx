import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from 'next/Link'
import ProTip from '../organisms/Protip'
import Copyright from '../templates/Coryright'

export default function Index(): React.ReactElement {
  return (
    <Container maxWidth="sm">
      <Box className="primary" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="./about">Go to the about page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
