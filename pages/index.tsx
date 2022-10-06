import { createTheme, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import { GetApiFetcher } from '../context/Fetcher';
import ApiProvider, { EmployeeProvider } from '../context/Provider';
import { EmployeeI } from '../interfaces';
import Home from './app';

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

const App: NextPage = (props: any) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ApiProvider>
        <EmployeeProvider value={props.res}>
          <Home/>
        </EmployeeProvider>
      </ApiProvider>
    </ThemeProvider>
  )
}

export async function getServerSideProps() {
  const res = await GetApiFetcher<EmployeeI>(`http://localhost:3000/api/employee`);
  return { props: { res } }
}

export default App
