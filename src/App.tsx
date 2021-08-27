import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './theme';
import GlobalStyles from './GlobalStyles';
import Register from './Pages/Register';

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Register />
    </ThemeProvider>
  );
};

export default App;
