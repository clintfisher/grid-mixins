import vars from "./cssVars";

/**
 * Returns the a rem value from a px value input
 * @param {number} size - the desired size in px, integer only
 * @returns { string } - size integer with rem unit
 * @example
 * // margin-right: pxToRem(8);
 * // returns 0.5rem
 */
export const pxToRem = size => {
  const sizeBase = vars.baseFontSize;
  const remSize = size / sizeBase;
  return `${remSize}rem`;
};

/**
 * @object gridSpec - define our grid at the following breakpoints
 * mobile
 * tablet
 * desktop
 */
export const gridSpec = {
  mobile: {
    columns: 6,
    columnGap: "1.25rem"
  },
  tablet: {
    columns: 8,
    columnGap: "1.875rem"
  },
  desktop: {
    columns: 12,
    columnGap: "2.5rem"
  }
};

export const repeat = () => {};

export const grid = () => {};

export const gridColumn = () => {};

export const gridRow = () => {};
