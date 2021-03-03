import '../src/styles/globals.css'
import * as nextRouter from 'next/router'

require('@storybook/react').addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})

nextRouter.useRouter = () => ({
  route: '/',
  pathname: '/about',
  query: { query: 'Next.js Storybook' },
  asPath: '',
  basePath: '',
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
})
