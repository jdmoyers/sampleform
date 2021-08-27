import styled from '@emotion/styled';

const ValidationMessage = styled.div(({ theme }) => {
  const { breakpoints, colors, typography } = theme;

  return `
    color: ${colors.error};
    font-size: ${typography.size.sm};
    min-height: 1.4rem;
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${typography.size.reg};
      min-height: 1.75rem;
    }
  `;
});

export default ValidationMessage;
