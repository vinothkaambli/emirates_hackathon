import { createTheme, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Content, SearchForm, Footer } from '../organisams';
import styles from '../styles/Home.module.css';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#8991a9',
      light: '#ffffff'
    },
    secondary: {
      main: '#d7dce4'
    }
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className={styles.container}>
        <Head>
          <title>Trips</title>
          <meta name="description" content="Trips App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <Content/>
        <SearchForm/>
      </div>
    </ThemeProvider>
  )
}

export default Home
