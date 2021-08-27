import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const Label = styled.label(({ theme }) => {
  const { typography } = theme;

  return `
    color: inherit;
    font-size: ${typography.size.reg};
  `;
});

Label.defaultProps = {
  theme: lightTheme,
};

export default Label;
