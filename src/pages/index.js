import Head from 'next/head'
import FormCreate from '@components/forms/FormCreate'
import { Main, Title } from '@styles/HomeStyle'


export default function Home() {
  return (
    <Main>
      <FormCreate />
    </Main>
  )
}
