import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const InputRow = styled.div(({ theme }) => {
  const { breakpoints, sizes } = theme;

  return `
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    margin: 0 0 ${sizes.space.xs};

    @media screen and (min-width: ${breakpoints.md}) {
      margin: 0 0 ${sizes.space.sm};
    }
  `;
});

InputRow.defaultProps = {
  theme: lightTheme,
};

export default InputRow;
