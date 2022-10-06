import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { GetApiFetcher } from '../context/Fetcher';
import { EmployeeI } from '../interfaces';
import { Header, Content, SearchForm, Footer } from '../organisams';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
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
  )
}

export default Home
