import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const ErrorMessage = styled.div(({ theme }) => {
  const { breakpoints, colors, sizes, typography } = theme;

  return `
    border: 2px solid ${colors.error};
    color: ${colors.error};
    font-size: ${typography.size.sm};
    margin-bottom: ${sizes.space.md};
    padding: ${sizes.space.md};
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${typography.size.reg};
      min-height: 1.75rem;
      margin-bottom: ${sizes.space.lg};
      padding: ${sizes.space.lg};
    }
  `;
});

ErrorMessage.defaultProps = {
  theme: lightTheme,
};

export default ErrorMessage;
