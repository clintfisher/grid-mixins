import React from 'react';
import { Global, css } from '@emotion/core';
import vars from './cssVars';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Open Sans', sans-serif;
          color: ${vars.gray40};
        }
      `}
    />
  );
};

export default GlobalStyles;
