import { Theme } from '@emotion/react';
import { breakpoints } from './breakpoints';
import { light as lightColors, dark as darkColors } from './colors';
import { sizes } from './sizes';
import { typography } from './typography';

const lightTheme: Theme = {
  breakpoints,
  colors: lightColors,
  typography,
  sizes,
};

const darkTheme: Theme = {
  breakpoints,
  colors: darkColors,
  typography,
  sizes,
};

export { lightTheme, darkTheme };
