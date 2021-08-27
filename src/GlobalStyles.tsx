import { ReactElement } from 'react';
import { css, Global, useTheme } from '@emotion/react';

const GlobalStyles = (): ReactElement => {
  const { breakpoints, colors, sizes, typography } = useTheme();

  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-size: ${typography.size.base.reg};

          @media screen and (min-width: ${breakpoints.md}) {
            font-size: ${typography.size.base.lg};
          }
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          background: ${colors.background};
          color: ${colors.text.onBackground};
          font-family: ${typography.family};
          font-weight: ${typography.weight.regular};
          line-height: ${typography.lineHeight.base};
          margin: 0;
          padding: ${sizes.space.lg};

          @media screen and (min-width: ${breakpoints.md}) {
            padding: ${sizes.space.xl};
          }

          @media screen and (min-width: ${breakpoints.lg}) {
            padding: ${sizes.space.xxl} ${sizes.space.xl};
          }
        }

        p {
          margin-bottom: ${sizes.space.md};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: ${typography.family};
          font-weight: ${typography.weight.regular};
          line-height: ${typography.lineHeight.heading};
          margin: ${sizes.space.xxl} 0 ${sizes.space.md};
        }

        h1 {
          font-size: ${typography.size.max};
          margin-top: 0;
        }

        h2 {
          font-size: ${typography.size.xxxl};
        }

        h3 {
          font-size: ${typography.size.xxl};
        }

        h4 {
          font-size: ${typography.size.xl};
        }

        h5 {
          font-size: ${typography.size.lg};
        }

        small {
          font-size: ${typography.size.sm};
        }

        a {
          color: ${colors.link.onBackground};
        }
      `}
    />
  );
};

export default GlobalStyles;
