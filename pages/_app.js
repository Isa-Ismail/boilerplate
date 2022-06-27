import { useEffect } from 'react'
import '../styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { StoreProvider } from '../utils/store';

function MyApp({ Component, pageProps }) {

  return (<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
              <StoreProvider>
                <Component {...pageProps} />
              </StoreProvider>
          </SnackbarProvider>)
}

export default MyApp