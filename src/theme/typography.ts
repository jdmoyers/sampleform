export interface Typography {
  family: string;
  lineHeight: {
    base: number;
    heading: number;
  };
  size: {
    base: {
      reg: string;
      lg: string;
    };
    max: string;
    xxxl: string;
    xxl: string;
    xl: string;
    lg: string;
    reg: string;
    sm: string;
    xs: string;
  };
  weight: {
    regular: number;
    bold: number;
  };
}

export const typography: Typography = {
  family: `'Work Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
  lineHeight: {
    base: 1.75,
    heading: 1.3,
  },
  size: {
    base: {
      reg: '100%',
      lg: '112.5%',
    },
    max: '3.052rem',
    xxxl: '2.441rem',
    xxl: '1.953rem',
    xl: '1.563rem',
    lg: '1.25rem',
    reg: '1rem',
    sm: '0.8rem',
    xs: '0.7rem',
  },
  weight: {
    regular: 400,
    bold: 700,
  },
};
