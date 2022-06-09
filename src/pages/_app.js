import { createGlobalStyle } from 'styled-components'
import Layout from 'src/layout/index';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
