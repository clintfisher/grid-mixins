/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import vars from './cssVars';
import {
  font,
  fontFamily,
  fontSize,
  grid,
  gridColumn,
  gridRow,
  pxToRem,
  visuallyHidden
} from './cssMixins';

// css styles

// generic pipe styles for menus that have piped items
// used with before or after selector
const pipe = css`
  display: inline-block;
  content: '';
  width: 1px;
  height: ${pxToRem(12)};
  margin-right: ${pxToRem(8)};
  margin-left: ${pxToRem(8)};
  background-color: ${vars.black};
`;

// components

// reusable menu component that handles pipes
// by a direction prop
// currently used in UserNav, was prev used in
// CompanyNav but needed to refactor that from
// a function to a component so the env data
// could be accessed in the view and didnt want to
// use the css prop in the App view
export const PipedMenu = styled('ul')`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    ${(props) => {
      return (
        props.pipePosition === 'before' &&
        css`
          &:before {
            ${pipe};
          }
          &:first-of-type {
            &:before {
              display: none;
            }
          } // end first-of-type
        `
      );
    }};

    ${(props) => {
      return (
        props.pipePosition === 'after' &&
        css`
          &:after {
            ${pipe};
          }
          &:last-child {
            &:after {
              display: none;
            }
          } // end last-child
        `
      );
    }};
  } // end li
`;

// QuickNav
// contains home link and icon
export const QuickNav = styled('div')`
  display: flex;
  align-items: center;
  margin-left: ${pxToRem(20)};

  @supports (grid-area: auto) {
    ${gridColumn(2, 1)};
    ${gridRow(1, 1)};
    margin-left: 0;

    @media (min-width: ${vars.tablet}) {
      ${gridColumn(2, 2)};
    }
  } // end supports
`;

export const QuickNavMenu = styled('ul')`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const HomeLink = () => {
  const link = css`
    ${font({
      name: `${vars.serviceBold}, ${vars.sansFallback}`,
      size: 14,
      lineHeight: 14
    })};
    display: flex;
    align-items: center;
    color: ${vars.gray40};
  `;

  const linkText = css`
    ${visuallyHidden(true, true)};

    @media (min-width: ${vars.tablet}) {
      ${visuallyHidden(false)};
      display: flex;
    }
  `;
  return (
    <a css={link} href="/">
      <span css={linkText}>Home</span>
    </a>
  );
};

// UserNav
// currently contains logout link
export const UserNav = (props) => {
  const userNav = css`
    ${visuallyHidden()};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @supports (grid-area: auto) {
      ${gridRow(1, 1)};
      ${gridColumn(6, 2)};
    }

    @media (min-width: ${vars.tablet}) {
      ${visuallyHidden(false)};
      margin-right: ${pxToRem(16)};

      @supports (grid-area: auto) {
        ${gridColumn(8, 2)};
        margin-right: 0;
      }
    } // end tablet

    @media (min-width: ${vars.desktop}) {
      @supports (grid-area: auto) {
        ${gridColumn(11, 3)};
      }
    } // end desktop
  `;

  const userNavMenu = css`
    white-space: nowrap;

    li {
      ${font({
        name: `${vars.serviceBold}, ${vars.sansFallback}`,
        size: 14,
        lineHeight: 14
      })};
      color: ${vars.black};

      a,
      &:visited {
        color: ${vars.black};
      }

      &:last-child {
        a,
        &:visited {
          color: ${vars.gray40};
        }
      } // end last-child
    } // end li
  `;

  return (
    <div css={userNav} data-testid="UserNav">
      <PipedMenu css={userNavMenu} pipePosition="before">
        {props.children}
      </PipedMenu>
    </div>
  );
};

UserNav.propTypes = {
  children: PropTypes.node.isRequired
};

export const LogoutButton = styled('button')`
  ${font({
    name: `${vars.serviceBold}, ${vars.sansFallback}`,
    size: 14,
    lineHeight: 14
  })};
  background-color: ${vars.white};
  color: ${vars.gray40};
  border: none;
  padding: 0;
  transition: ${vars.easeOutAll};

  &:hover {
    color: rgba(0, 0, 0, 50%);
  }
`;

// NavElement provides main navigation wrapper
export const NavElement = styled('nav')`
  position: relative;
  margin-top: 1rem;
  border-top: 1px solid ${vars.gray90};

  @supports (grid-area: auto) {
    display: grid;
    grid-template-columns: subgrid;
    ${gridColumn(1, -1, false)};
    ${gridRow(2, 1)};
  }

  @media (min-width: ${vars.tablet}) {
    position: static;
    padding-top: ${pxToRem(16)};
  }
`;

// MenuButton provides nav menu toggle at mobile
// @req'd: `styled` : event
export const MenuButton = styled('button')`
  ${font({
    name: `${vars.serviceRegular}, ${vars.sansFallback}`,
    size: 14,
    lineHeight: 14
  })};
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%; // ie;
  height: ${pxToRem(48)};
  padding: ${pxToRem(16)};
  transition: ${vars.easeOutAll};
  letter-spacing: ${pxToRem(1)};
  color: ${vars.gray40};
  background-color: ${vars.white};
  border: 1px dotted transparent;
  cursor: pointer;

  @supports (grid-area: auto) {
    ${gridColumn(2, 6)};
  }

  span {
    position: absolute;
    top: ${pxToRem(16)}; // ie
    right: ${pxToRem(16)};
    transition: ${vars.easeOutAll};
  }

  &:hover {
    color: ${vars.gray60};

    span {
      border-color: ${vars.gray60};
    }
  } // end hover

  &:active {
    border: 1px dotted ${vars.black};
  }
`;

// SubMenuButton provides menu access
// My Subscription options
export const SubMenuButton = styled('button')`
  ${font({
    name: `${vars.serviceSemiBold}, ${vars.sansFallback}`,
    size: 14,
    lineHeight: 22
  })};
  width: 100%;
  margin: 0 0 ${pxToRem(16)};
  padding: 0;
  transition: ${vars.easeOutAll};
  border: none;
  background-color: ${vars.white};
  cursor: pointer;
  text-align: left;

  @media (min-width: ${vars.tablet}) {
    margin: 0;
    padding: 0 0 ${pxToRem(16)};
    border-bottom: 2px solid transparent;
  }
`;

// Menu - main navigation menu
// @req'd: `styled`: dynamic styles
export const Menu = styled('ul')`
  position: absolute;
  z-index: 1;
  top: ${pxToRem(49)};
  display: ${(props) => {
    return props.visible === 'true' ? 'block' : 'none';
  }};
  width: 100%; // IE
  min-height: ${pxToRem(
    40
  )}; // avoid content shift between routes before isActive kicks in
  margin: 0;
  padding: ${pxToRem(20)};
  list-style-type: none;
  color: ${vars.black};
  background-color: ${vars.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px 0;

  @supports (grid-area: auto) {
    ${gridColumn(2, 6)};
  }

  li {
    ${font({
      name: `${vars.serviceSemiBold}, ${vars.sansFallback}`,
      size: 14,
      lineHeight: 22
    })};
    position: relative; // for subnav
    margin-bottom: ${pxToRem(16)};
    border-bottom: 1px solid ${vars.gray90};

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  } // end li

  a {
    display: block;
    color: ${vars.black};
    text-decoration: none;
    transition: ${vars.easeOutAll};

    &:visited {
      color: ${vars.black};
    }

    &:hover {
      color: rgba(0, 0, 0, 50%);
    }

    span {
      display: inline-block;
      padding-bottom: ${pxToRem(16)};
      border-bottom: 2px solid transparent; // keep button height consistent
    }
  } // end a

  // keep this class hashless for react router
  // its also used to populate the text value of our menu button
  .isActive {
    span {
      border-bottom: 2px solid ${vars.aqua};
    }
  } // end isActive

  @media (min-width: ${vars.tablet}) {
    position: static;
    display: flex;
    justify-content: center;
    padding: 0;
    box-shadow: none;
    opacity: 1;

    @supports (grid-area: auto) {
      ${gridColumn(1, -1, false)};
    }

    li {
      ${fontSize({ size: 13, lineHeight: 21 })};
      margin-bottom: 0;
      margin-right: ${pxToRem(16)};
      padding-bottom: 0;
      border-bottom: none;
      flex-shrink: 0;

      &:last-child {
        margin-right: 0;
      }
    } // end li
  } // end media

  @media (min-width: ${vars.desktop}) {
    @supports (grid-area: auto) {
      ${gridColumn(5, 9)};
    }

    li {
      ${fontSize({ size: 14, lineHeight: 22 })};

      @supports (grid-area: auto) {
        &:last-child {
          margin-left: auto;
        }
      }
    } // end li
  } // end media
`;

// SubMenu provides My Subscription options
// transitions dont work well here content
// shifts up before animation finishes
// lets use display for toggling here
// instead of opacity
export const SubMenu = styled('ul')`
  min-height: ${pxToRem(16)};
  list-style-type: none;
  margin: 0 0 ${pxToRem(16)} ${pxToRem(16)};
  padding: 0;
  display: ${(props) => {
    return props.visible === 'true' ? 'block' : 'none';
  }};

  li {
    padding-bottom: ${pxToRem(16)};
  }

  @media (min-width: ${vars.tablet}) {
    position: absolute;
    z-index: 1;
    top: ${pxToRem(40)};
    width: ${pxToRem(200)};
    margin: 0;
    background-color: pink;
    padding: ${pxToRem(20)};
    color: ${vars.black};
    background-color: ${vars.white};
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px 0;

    li {
      margin-bottom: ${pxToRem(16)};
      padding-bottom: ${pxToRem(16)};
      border-bottom: 1px solid ${vars.gray90};

      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
    } // end li

    @media (min-width: ${vars.desktop}) {
      width: ${pxToRem(270)};
    }
  } // end media
`;

// CompanyNav
// currently in PageFooter
export const CompanyNav = styled('div')`
  display: flex;
  max-width: ${pxToRem(400)};
  margin-left: 1rem;

  @supports (grid-area: auto) {
    ${gridRow(2, 1)};
    ${gridColumn(2, 6)};
    margin-left: 0;
  }

  @media (min-width: ${vars.tablet}) {
    justify-content: flex-end;
    margin-right: ${pxToRem(32)};
    margin-left: 0;

    @supports (grid-area: auto) {
      ${gridRow(1, 1)};
      ${gridColumn(5, 5)};
      max-width: none;
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    max-width: none;

    @supports (grid-area: auto) {
      ${gridColumn(5, 9)};
      margin: 0;
    }
  } // end desktop
`;

export const CompanyNavMenu = styled('ul')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${vars.tablet}) {
    justify-content: flex-end;
  }

  @media (min-width: ${vars.desktop}) {
    align-items: flex-start;
  }
`;

export const CompanyNavMenuItem = styled('li')`
  ${font({
    name: `${vars.serviceRegular}, ${vars.sansFallback}`,
    size: 12,
    lineHeight: 22
  })};

  @media (min-width: ${vars.tablet}) {
    margin-left: ${(props) => {
      return props.last ? '0.5rem' : 0;
    }};
  }
`;

export const CompanyNavSubMenu = styled('ul')`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    ${fontSize({ size: 12, lineHeight: 22 })};
    display: flex;
    align-items: center;

    &:after {
      ${pipe};
      height: ${pxToRem(10)};
    }

    &:last-child {
      &:after {
        display: inline-block;
        margin-right: 0;
      }
    } // end last-child
  } // end li

  a {
    color: ${vars.aqua};
    white-space: nowrap;
  }
`;
