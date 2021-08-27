import styled from '@emotion/styled';

const Button = styled.button(({ theme }) => {
  const { breakpoints, colors, sizes, typography } = theme;

  return `
    background-color: ${colors.primary.regular};
    border: 1px solid ${colors.primary.dark};
    color: ${colors.text.onPrimary.regular};
    font-size: ${typography.size.sm};
    font-weight: ${typography.weight.regular};
    padding: ${sizes.space.xs} ${sizes.space.md};
    text-transform: uppercase;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${typography.size.reg};
      padding: ${sizes.space.sm} ${sizes.space.lg};
    }
  `;
});

export default Button;
