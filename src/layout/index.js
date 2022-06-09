import Head from 'next/head'
import NavBar from "@components/Nav";

export default function Layout({ children }){
  return(
    <>
      <Head> 
        <title>GuardPassword</title>
        <meta name="description" content="Aplicacion para reguardo de password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      { children }
    </>
  )
}
