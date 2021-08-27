import styled from '@emotion/styled';

const ButtonRow = styled.div(({ theme }) => {
  const { sizes } = theme;

  return `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: ${sizes.space.lg} 0;
  `;
});

export default ButtonRow;
