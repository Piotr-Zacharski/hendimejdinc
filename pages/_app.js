import NProgress from 'nprogress'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <title>HendiMejdi</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
