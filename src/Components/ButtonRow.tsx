import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const ButtonRow = styled.div(({ theme }) => {
  const { sizes } = theme;

  return `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: ${sizes.space.lg} 0;
  `;
});

ButtonRow.defaultProps = {
  theme: lightTheme,
};

export default ButtonRow;
