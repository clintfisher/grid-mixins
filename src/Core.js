/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import vars from './cssVars';
import { grid, gridColumn, gridRow, pxToRem } from './cssMixins';

export const Shell = (props) => {
  const shell = css`
    max-width: ${pxToRem(1200)};
    margin: 0 auto;
  `;
  return <div css={shell} {...props} />;
};

export const Page = styled('div')`
  margin: 0 auto;

  @supports (grid-area: auto) {
    ${grid('mobile')};

    @media (min-width: ${vars.tablet}) {
      ${grid('tablet')};
    }

    @media (min-width: ${vars.desktop}) {
      ${grid('desktop')};
    }
  }
`;

export const PageHeader = styled('header')`
  min-height: ${pxToRem(48)};
  border-bottom: 1px solid ${vars.gray90};

  @supports (grid-area: auto) {
    ${grid('mobile')};
    ${gridColumn(1, -1, false, 'mobile')};
  }

  @media (min-width: ${vars.tablet}) {
    min-height: ${pxToRem(64)};

    @supports (grid-area: auto) {
      ${grid('tablet')};
      ${gridColumn(1, -1, false, 'tablet')};
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${grid('desktop')};
      ${gridColumn(1, -1, false, 'desktop')};
    }
  }
`;

export const PageLogo = styled('div')`
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

export const PageSubheader = styled('header')`
  margin-bottom: ${pxToRem(40)};
  text-align: center;

  @supports (grid-area: auto) {
    ${gridColumn(2, 6)};
    ${gridRow(2, 1)};

    @media (min-width: ${vars.tablet}) {
      ${gridColumn(2, 8)};
    }

    @media (min-width: ${vars.desktop}) {
      ${gridColumn(2, 12)};
    }
  } // end supports
`;

export const PageSubheading = styled('h1')`
  letter-spacing: ${pxToRem(1)};
  color: ${vars.black};
  word-break: break-word;
  margin: ${pxToRem(26)} 0 ${pxToRem(12)};
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(44)};
`;
