interface TextColors {
  onSurface: string;
  onBackground: string;
  onPrimary: {
    light: string;
    regular: string;
    dark: string;
  };
  onSecondary: {
    light: string;
    regular: string;
    dark: string;
  };
  onError: string;
  onSuccess: string;
}

export interface Colors {
  primary: {
    light: string;
    regular: string;
    dark: string;
  };
  secondary: {
    light: string;
    regular: string;
    dark: string;
  };
  surface: string;
  background: string;
  success: string;
  error: string;
  text: TextColors;
  link: TextColors;
}

export const light: Colors = {
  primary: {
    light: '#718dc9',
    regular: '#406098',
    dark: '#01376a',
  },
  secondary: {
    light: '#e35183',
    regular: '#ad1457',
    dark: '#78002e',
  },
  surface: '#fff',
  background: '#1c1c1c',
  success: '#2e7d32',
  error: '#c62828',
  text: {
    onSurface: '#1c1c1c',
    onBackground: '#fff',
    onPrimary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onSecondary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onError: '#fff',
    onSuccess: '#fff',
  },
  link: {
    onSurface: '#1c1c1c',
    onBackground: '#fff',
    onPrimary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onSecondary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onError: '#fff',
    onSuccess: '#fff',
  },
};

export const dark: Colors = {
  primary: {
    light: '#718dc9',
    regular: '#406098',
    dark: '#01376a',
  },
  secondary: {
    light: '#e35183',
    regular: '#ad1457',
    dark: '#78002e',
  },
  surface: '#fff',
  background: '#1c1c1c',
  success: '#2e7d32',
  error: '#c62828',
  text: {
    onSurface: '#1c1c1c',
    onBackground: '#fff',
    onPrimary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onSecondary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onError: '#fff',
    onSuccess: '#fff',
  },
  link: {
    onSurface: '#1c1c1c',
    onBackground: '#fff',
    onPrimary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onSecondary: {
      light: '#1c1c1c',
      regular: '#fff',
      dark: '#fff',
    },
    onError: '#fff',
    onSuccess: '#fff',
  },
};
