import Head from 'next/head'
import Image from 'next/image'
import NavBar from './components/Nav/index'
import { Main, Title } from '@styles/HomeStyle'


export default function Home() {
  return (
    <Main>
      <Head>
        <title>GuardPassword</title>
        <meta name="description" content="Aplicacion para reguardo de password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Title>Generar Contraseñas</Title>
    </Main>
  )
}
