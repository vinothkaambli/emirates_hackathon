import { Box, createTheme, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { StyledHeaderBar } from '../organisams';
import styles from '../styles/Home.module.css';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0b0b0b',
    },
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
        <StyledHeaderBar />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </div>
    </ThemeProvider>
  )
}

export default Home
