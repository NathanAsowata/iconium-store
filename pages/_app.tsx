import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Provider store={store}>
    <Navigation />
      <Component {...pageProps} />
      </Provider>
    </>
  ) 
}

export default MyApp
