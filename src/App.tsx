import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import Box from './Components/Box';
import { lightTheme } from './theme';
import GlobalStyles from './GlobalStyles';

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Box>App here</Box>
    </ThemeProvider>
  );
};

export default App;
