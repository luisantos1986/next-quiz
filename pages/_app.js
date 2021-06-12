import Layout from '../components/Layouts'
import { useStore, wrapper } from '../store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
