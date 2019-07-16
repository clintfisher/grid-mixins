/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import vars from './cssVars';
import { font, gridColumn, pxToRem } from './cssMixins';

// css exports

export const hr = css`
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

export const Section = styled('section')`
  ${gridColumn(1, -1, false)};
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled('header')`
  margin-bottom: ${pxToRem(40)};
`;

export const Newsletter = styled('article')`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${vars.white};
`;

export const Category = styled('p')`
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
  margin-bottom: ${pxToRem(16)};
  text-transform: uppercase;
  color: ${vars.gray40};
`;

export const Frequency = styled('p')`
  font-size: 10px;
  line-height: 10px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  color: ${vars.gray40};
`;

export const Image = styled('figure')`
  margin: 0 0 ${pxToRem(10)};
  background-color: fuchsia;
  min-height: 200px;

  img {
    object-fit: cover;
    display: block;
    height: ${pxToRem(200)};
    width: 100%;
  }

  @media (min-width: ${vars.tablet}) {
    img {
      height: ${pxToRem(100)};
    }
  } // end tablet

  @media (min-width: ${vars.desktop}) {
    img {
      height: ${pxToRem(163)};
    }
  } // end desktop
`;

export const Name = styled('h3')`
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
  margin: 0 0 ${pxToRem(8)};
  color: ${vars.gray20};
`;

export const Description = styled('p')`
  ${font({
    name: `${vars.bodyRegular}, ${vars.bodyFallback}`,
    size: 15,
    lineHeight: 19
  })};
  margin-bottom: ${pxToRem(16)};
  color: ${vars.gray40};
`;

export const Button = styled('button')`
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
  position: relative;
  display: block;
  width: 100%;
  height: ${pxToRem(40)};
  margin: auto 0 0;
  text-transform: capitalize;
  color: ${(props) => {
    return props.isSubscribed ? vars.white : vars.gray60;
  }};
  background-color: ${(props) => {
    return props.isSubscribed ? vars.aqua : vars.white;
  }};
  border-radius: 0;
  border: 1px solid
    ${(props) => {
      return props.isSubscribed ? vars.aqua : vars.gray60;
    }};
  transition: ${vars.easeOutAll};

  &:hover,
  &:focus {
    background-color: ${vars.white};
    color: ${vars.aqua};
    border: 1px solid ${vars.aqua};
  }
`;
