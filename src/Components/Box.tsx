import styled from '@emotion/styled';
import { lightTheme } from '../theme';

const Box = styled.div(({ theme }) => {
  const { breakpoints, colors, sizes } = theme;

  return `
    background-color: ${colors.surface};
    border-radius: ${sizes.radius.md};
    color: ${colors.text.onSurface};
    margin: 0 auto;
    padding: ${sizes.space.md};

    @media screen and (min-width: ${breakpoints.md}) {
      padding: ${sizes.space.lg};
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      max-width: ${breakpoints.md};
      padding: ${sizes.space.xl};
    }
  `;
});

Box.defaultProps = {
  theme: lightTheme,
};

export default Box;
