export const validateField = (type: string, value: string): boolean => {
  switch (type) {
    case 'text': {
      if (!value.length) {
        return false;
      }

      return true;
    }
    case 'email': {
      if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return false;
      }

      return true;
    }
    case 'password': {
      if (value.length < 8) {
        return false;
      }
      return true;
    }
  }
  return true;
};
