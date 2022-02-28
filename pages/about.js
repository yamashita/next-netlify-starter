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
             <form name="contact" method="POST" data-netlify="true">
               <input type="hidden" name="form-name" value="contact"/>

               <label>Your Name:<input name="name" type="text" /></label>
               <button type="submit">Send</button>
             </form>
        </p>
      </main>

      <Footer />
    </div>
  )
}
