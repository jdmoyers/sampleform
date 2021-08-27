import '@emotion/react';
import { Breakpoints } from './theme/breakpoints';
import { Colors } from './theme/colors';
import { Sizes } from './theme/sizes';
import { Typography } from './theme/typography';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: Breakpoints;
    colors: Colors;
    sizes: Sizes;
    typography: Typography;
  }
}
