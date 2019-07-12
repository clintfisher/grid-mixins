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
