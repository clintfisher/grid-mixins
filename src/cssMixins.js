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

/**
 * @function repeat - repeats an expression
 * @param { number } repetitions
 * @param { string } expression - expression to repeat (fr, px, rem etc)
 * @returns { string } - expression repeated
 * @example
 * repeat(4, '3fr');
 * // returns 3fr 3fr 3fr 3fr
 */
export const repeat = (repetitions, expression = "1fr") => {
  const string = `${expression} `;
  return string.repeat(repetitions);
};

/**
 * @function grid - creates grid display rules per the defined spec
 * @param { string } breakpoint - mobile, tablet, desktop
 * @param { object } spec - grid definitions
 * @returns { string } - grid display rules
 */
export const grid = (breakpoint = "mobile", spec = gridSpec) => {
  const getGridSpec = () => {
    const specItem = spec[breakpoint];
    return `
      grid-template-columns: 1px ${repeat(specItem.columns)} 1px;
      grid-column-gap: ${specItem.columnGap};
    `;
  };
  return `
    display: grid;
    ${getGridSpec(breakpoint)};
  `;
};

/**
 * @function gridColumn - places a grid item on a column
 * @param { number } start - grid line column starts at
 * @param { number } end - grid line column ends at
 * @param { bool } span - false to use grid line end (see example 2)
 * @param { string } breakpoint - grid line column ends at
 * @param { string } spec - grid line column ends at
 *
 * @returns { string } - grid-column declarations
 * @example
 * ${gridColumn(2, 6)};
 * // grid-column-start: 2;
 * // grid-column-end: span 6;
 * @example
 * ${gridColumn(1, -1, false, 'desktop')};
 * // breakpoint is only req'd when passing false
 * // for fullwidth
 * // grid-column-start: 1;
 * // grid-column-end: -1;
 */
export const gridColumn = (
  start,
  end,
  span = true,
  breakpoint = "mobile",
  spec = gridSpec
) => {
  return `
    grid-column: ${start} / ${span ? `span ${end}` : end};
  `;
};

/**
 * @function gridRow - places a grid item on a row. follows the source-order implicit grid
 * @param { number } start - grid line row starts at
 * @param { number } end - grid line row ends at
 * @param { bool } span - false to use grid line end rather than span
 * @returns { string } - grid-row values
 */
export const gridRow = (start, end, span = true) => {
  return `
    grid-row: ${start} / ${span ? `span ${end}` : end};
  `;
};
