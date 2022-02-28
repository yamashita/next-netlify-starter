import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>test about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="header about" />
        <p className="description">
          ryus's about
          <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
