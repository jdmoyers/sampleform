import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const Button = styled.button(({ theme }) => {
  const { breakpoints, colors, sizes, typography } = theme;

  return `
    background-color: ${colors.primary.regular};
    border: 1px solid ${colors.primary.dark};
    color: ${colors.text.onPrimary.regular};
    cursor: pointer;
    font-size: ${typography.size.sm};
    font-weight: ${typography.weight.regular};
    padding: ${sizes.space.xs} ${sizes.space.md};
    text-transform: uppercase;
    transition: background-color ease-in-out 100ms;

    &:hover {
      background-color: ${colors.primary.dark};
    }

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${typography.size.reg};
      padding: ${sizes.space.sm} ${sizes.space.lg};
    }
  `;
});

Button.defaultProps = {
  theme: lightTheme,
};

export default Button;
