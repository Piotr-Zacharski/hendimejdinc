import NProgress from 'nprogress'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import '../styles/nprogress.css'
import '../styles/bootstrap.min.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
