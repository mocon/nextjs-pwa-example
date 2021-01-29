import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ThemeProvider } from 'styled-components'
import { store, persistor } from 'src/store'
import { theme, GlobalStyles } from 'src/config/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Head>
            <meta name='application-name' content='Portfolio View' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta
              name='apple-mobile-web-app-status-bar-style'
              content='black-translucent'
            />
            <meta name='apple-mobile-web-app-title' content='Portfolio View' />
            <meta
              name='description'
              content='Track your stocks and crypto for free'
            />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta
              name='msapplication-config'
              content='/static/icons/browserconfig.xml'
            />
            <meta name='msapplication-TileColor' content='#1f4f46' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#1f4f46' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/static/icons/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/static/icons/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/static/icons/favicon-16x16.png'
            />
            <link rel='manifest' href='/static/manifest.json' />
            <link
              rel='mask-icon'
              href='/static/icons/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <link rel='shortcut icon' href='/static/icons/favicon.ico' />
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
            />

            <meta name='twitter:card' content='summary' />
            <meta
              name='twitter:url'
              content='https://nextjs-pwa-example.mylesoconnor.vercel.app'
            />
            <meta name='twitter:title' content='PWA App' />
            <meta
              name='twitter:description'
              content='Best PWA App in the world'
            />
            <meta
              name='twitter:image'
              content='https://nextjs-pwa-example.mylesoconnor.vercel.app/static/icons/android-chrome-192x192.png'
            />
            <meta name='twitter:creator' content='@DavidWShadow' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta
              property='og:description'
              content='Best PWA App in the world'
            />
            <meta property='og:site_name' content='PWA App' />
            <meta
              property='og:url'
              content='https://nextjs-pwa-example.mylesoconnor.vercel.app'
            />
            <meta
              property='og:image'
              content='https://nextjs-pwa-example.mylesoconnor.vercel.app/static/icons/apple-touch-icon.png'
            />
            <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
            />
          </Head>
          <GlobalStyles />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
