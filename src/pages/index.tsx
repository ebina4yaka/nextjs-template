import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import { Box, Container, createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../atoms/Coryright'

const useStyles = makeStyles(
  createStyles({
    component: {
      textAlign: 'center',
    },
  })
)

export default function Index(): ReactElement {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Box my={4} className={classes.component}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  )
}
