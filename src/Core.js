/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
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
  } // end supports
`;

export const PageHeader = styled('header')`
  min-height: ${pxToRem(48)};
  padding-top: 1rem;
  border-bottom: 1px solid ${vars.gray90};

  @supports (grid-area: auto) {
    display: grid;
    grid-template-columns: subgrid;
    ${gridColumn(1, -1, false)};
  }

  @media (min-width: ${vars.tablet}) {
    min-height: ${pxToRem(64)};
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
  font-weight: 300;
`;

export const PageBlurb = styled('p')`
  font-size: 1rem;
  line-height: ${pxToRem(22)};
  max-width: 85%;
  margin: ${pxToRem(27)} auto 0;
  color: ${vars.gray20};

  @media (min-width: ${vars.tablet}) {
    margin-top: ${pxToRem(32)};
  }

  @media (min-width: ${vars.desktop}) {
    max-width: ${pxToRem(578)};
  }
`;

export const PageBody = styled('main')`
  position: relative;
  min-height: ${pxToRem(500)};
  margin: 0 ${pxToRem(20)} ${pxToRem(40)} ${pxToRem(20)};
  align-content: flex-start;

  @media (min-width: ${vars.tablet}) {
    margin-right: ${pxToRem(30)};
    margin-left: ${pxToRem(30)};
  }

  @media (min-width: ${vars.desktop}) {
    margin-right: ${pxToRem(40)};
    margin-left: ${pxToRem(40)};
  }

  @supports (grid-area: auto) {
    ${grid('mobile')};
    ${gridColumn(1, -1, false, 'mobile')};
    ${gridRow(3, 1)};
    margin-right: 0;
    margin-left: 0;

    @media (min-width: ${vars.tablet}) {
      ${grid('tablet')};
      ${gridColumn(1, -1, false, 'tablet')};
      margin-right: 0;
      margin-left: 0;
    }

    @media (min-width: ${vars.desktop}) {
      ${grid('desktop')};
      ${gridColumn(1, -1, false, 'desktop')};
      margin-right: 0;
      margin-left: 0;
    }
  } // end supports
`;

// Row base styles

const rowBase = (props) => {
  return css`
    display: flex;
    flex-direction: column;

    ${props.bordered
      ? `
      padding-top: ${pxToRem(8)};
      border-top: 1px solid ${vars.gray90};
    `
      : ''};

    &:last-child {
      margin-bottom: 0;
    }

    @supports (grid-area: auto) {
      ${grid('mobile')};
      ${gridColumn(1, -1, false, 'mobile')};
      align-content: start;
    }
  `;
};

const rowTabletBase = (props) => {
  return css`
    ${props.flexColumn
      ? `
      flex-direction: column;
    `
      : 'flex-direction: row'};

    ${props.divided
      ? `
      position: relative;
      min-height: 5rem;

      &:after {
        content: '';
        width: 1px;
        min-height: calc(100% - ${pxToRem(64)});
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        right: 50%;
        background-color: ${vars.gray90};
      }
    `
      : ''};

    @supports (grid-area: auto) {
      ${grid('tablet')};
      ${gridColumn(1, -1, false, 'tablet')};
    }
  `;
};

export const rowDesktopBase = () => {
  return css`
    @supports (grid-area: auto) {
      ${grid('desktop')};
      ${gridColumn(1, -1, false, 'desktop')};
    }
  `;
};

/**
 * Row - generic component that provides the grid
 * and either a top or center border
 * additional styling is handled contextually in
 * parent component. use emotions component as selector
 * @prop {string} bordered - gives Row a top border
 * @prop {string} divided - gives Row a center border
 * @returns { node } - div
 * @example
 * // ${Row} {}
 */
export const Row = styled('div')`
  ${rowBase};
  margin-bottom: ${pxToRem(40)};

  @media (min-width: ${vars.tablet}) {
    ${rowTabletBase};
  }

  @media (min-width: ${vars.desktop}) {
    ${rowDesktopBase};
  }
`;

export const HR = styled('hr')`
  margin: 0 0 ${pxToRem(32)};
  padding-top: ${pxToRem(8)};
  border: none;
  border-top: 1px solid ${vars.gray90};

  @supports (grid-area: auto) {
    ${gridColumn(2, 6)};
  }

  @media (min-width: ${vars.tablet}) {
    @supports (grid-area: auto) {
      ${gridColumn(2, 8)};
    }
  }

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${gridColumn(2, 12)};
    }
  }
`;

/**
 * SectionHeader - generic component that provides
 * a SectionHeader wrapper. use emotions component
 * as selector to contextually style
 * @returns { node } - header
 * @example
 * // ${SectionHeader} {}
 */
export const SectionHeader = styled('header')`
  margin-bottom: ${pxToRem(16)};

  @media (min-width: ${vars.tablet}) {
    @supports (grid-area: auto) {
      ${(props) => {
        return props.fullWidth
          ? css`
              ${gridColumn(2, 8)};
            `
          : '';
      }};
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${(props) => {
        return props.fullWidth
          ? css`
              ${gridColumn(2, 12, 'desktop')};
            `
          : '';
      }};
    }
  }
`;

export const SectionHeading = styled('h2')`
  margin: 0;
  color: ${vars.gray20};
  font-weight: 300;
`;

export const Section = ({ fullWidth, ...props }) => {
  const section = css`
    margin: 0 0 ${pxToRem(16)};
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    @supports (grid-area: auto) {
      ${gridColumn(2, 6)};
      width: auto;
    }

    @media (min-width: ${vars.tablet}) {
      width: calc(50% - 1rem);
      margin-right: ${pxToRem(16)};
      ${fullWidth && 'width: 100%; margin-right: 0;'};

      &:last-child {
        margin-left: ${pxToRem(16)};
        margin-right: 0;
      }

      @supports (grid-area: auto) {
        ${gridColumn(6, 4)};
        width: auto;
        margin-left: 0;
        margin-right: 0;

        &:last-child {
          margin-left: 0;
        }

        ${fullWidth
          ? `
          ${grid('tablet')};
          ${gridColumn(1, -1, false, 'tablet')};
        `
          : `
              ${gridColumn(2, 4)};

              &:nth-of-type(2) {
                ${gridColumn(6, 4)};
              }
            `};
      } // end support
    } // end tablet

    @media (min-width: ${vars.desktop}) {
      @supports (grid-area: auto) {
        ${fullWidth
          ? `
          ${grid('desktop')};
          ${gridColumn(1, -1, false, 'desktop')};
          `
          : gridColumn(2, 6)};

        &:nth-of-type(2) {
          ${gridColumn(8, 6)};
        }
      } // end support
    } // end desktop
  `;
  return <section css={section} {...props} />;
};

/**
 * Subcolumn - generic component that provides
 * a subcolumn wrapper.
 * use emotions component
 * as selector to contextually style
 * @returns { node } - div
 * @example
 * // ${Subcolumn} {}
 */
export const Subcolumn = styled('div')`
  @media (min-width: ${vars.tablet}) {
    @supports (grid-area: auto) {
      ${gridColumn(2, 4)};
      ${gridRow(2, 1)};

      &:last-child {
        ${gridColumn(6, 4)};
      }
    }
  } // end tablet
  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${gridColumn(2, 6)};

      &:last-child {
        ${gridColumn(8, 6)};
      }
    }
  }
`;
