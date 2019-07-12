/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import vars from "./cssVars";
import { grid, gridColumn, gridRow, pxToRem } from "./cssMixins";

export const Shell = props => {
  const shell = css`
    max-width: ${pxToRem(1200)};
    margin: 0 auto;
  `;
  return <div css={shell} {...props} />;
};

export const Page = styled("div")`
  margin: 0 auto;

  @supports (grid-area: auto) {
    ${grid("mobile")};

    @media (min-width: ${vars.tablet}) {
      ${grid("tablet")};
    }

    @media (min-width: ${vars.desktop}) {
      ${grid("desktop")};
    }
  }
`;

export const PageHeader = styled("header")`
  border-bottom: 1px solid ${vars.gray90};

  @supports (grid-area: auto) {
    ${grid("mobile")};
    ${gridColumn(1, -1, false, "mobile")};
  }

  @media (min-width: ${vars.tablet}) {
    @supports (grid-area: auto) {
      ${grid("tablet")};
      ${gridColumn(1, -1, false, "tablet")};
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${grid("desktop")};
      ${gridColumn(1, -1, false, "desktop")};
    }
  }
`;

export const PageLogo = styled("div")`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @supports (grid-area: auto) {
    ${gridColumn(3, 4)};
    ${gridRow(1, 1)};
    margin: 0;
  }

  img {
    display: block;
    width: ${pxToRem(160)};
    height: auto;
    margin: 0 auto;
  }

  @media (min-width: ${vars.tablet}) {
    @supports (grid-area: auto) {
      ${gridColumn(4, 4)};
    }

    img {
      width: ${pxToRem(240)};
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${gridColumn(5, 6)};
    }
  } // end desktop
`;
