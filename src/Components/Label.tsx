import styled from '@emotion/styled';

const Label = styled.label(({ theme }) => {
  const { typography } = theme;

  return `
    color: inherit;
    font-size: ${typography.size.reg};
  `;
});

export default Label;
