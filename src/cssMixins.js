import vars from './cssVars';

// fonts

/*
  `fontFamily()` and `fontSize()` can be used
  individually as needed for when you only need
  to set the family or size. `font()` is a shortcut
  function which calls both `fontFamily()` and `fontSize()`
*/

/**
 * Returns the specified font family css
 * @param {string} name - the name of the font
 * @param {string, number} weight - the weight of the font ('bold', 700)
 * @param {string} style - the style of the font (normal, italic etc)
 * @example
 * // ${fontFamily({ name: vars.bentonGothicMedium })};
 */
export const fontFamily = ({ name, weight = 'normal', style = 'normal' }) => {
  return `{
    font-family: ${name};
    font-weight: ${weight};
    font-style: ${style};
  }`;
};

/**
 * Returns the specified font size and line height css
 * note: edge only outputs to two decimal places: 0.87rem vs 0.875rem
 * @param {number} size - the size of the font - no unit is req'd
 * @param {number} lineHeight - the line-height of the font - no unit is req'd
 * @param {number} sizeBase - browser default (16) used as base for calculations
 * @example
 * // fontSize({ size: 30, lineHeight: 30 })
 */
export const fontSize = ({
  size,
  lineHeight,
  sizeBase = vars.baseFontSize
}) => {
  const newFontSize = size / sizeBase;
  const newLineHeight = lineHeight / sizeBase;
  return `{
    font-size: ${size}px;
    font-size: ${newFontSize}rem;
    line-height: ${lineHeight}px;
    line-height: ${newLineHeight}rem;
  }`;
};

/**
 * Returns the specified font-family and font-size/line-height css
 * @param {string} name - the name of the font
 * @param {number} size - the size of the font - no unit is req'd
 * @param {number} lineHeight - the line-height of the font - no unit is req'd
 * @param {string, number} weight - the weight of the font
 * @param {string} style - the style of the font (normal, italic etc)
 * @example
 * // font({ name: vars.bentonGothicRegular, size: 12, lineHeight: 22 })
 */
export const font = ({
  name,
  size,
  lineHeight,
  weight = 'normal',
  style = 'normal'
}) => {
  return `
    ${fontFamily({ name, weight, style })}
    ${fontSize({ size, lineHeight })}
  `;
};

/**
 * Returns the a rem value from a px value input
 * @param {number} size - the desired size in px, integer only
 * @returns { string } - size integer with rem unit
 * @example
 * // margin-right: pxToRem(8);
 * // returns 0.5rem
 */
export const pxToRem = (size) => {
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
    columnGap: '1.25rem'
  },
  tablet: {
    columns: 8,
    columnGap: '1.875rem'
  },
  desktop: {
    columns: 12,
    columnGap: '2.5rem'
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
export const repeat = (repetitions, expression = '1fr') => {
  const string = `${expression} `;
  return string.repeat(repetitions);
};

/**
 * @function grid - creates grid display rules per the defined spec
 * @param { string } breakpoint - mobile, tablet, desktop
 * @param { object } spec - grid definitions
 * @returns { string } - grid display rules
 */
export const grid = (breakpoint = 'mobile', spec = gridSpec) => {
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
  breakpoint = 'mobile',
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

/**
 * @function visuallyHidden - hides an element while remaining sreenreader accessible
 * @param { bool } hidden - true to hide an element, false to show a prev hidden element
 * @param { bool } focusable - allows element to be hidden but visible on active & focus states
 * @returns { string } - hidden, visible & focusable styles
 */
export const visuallyHidden = (hidden = true, focusable = false) => {
  const isHidden = `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
    `;
  const isVisible = `
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    clip: auto;
    overflow: visible;
    white-space: normal;
  `;
  // const isFocusable = `
  //   ${`:active,
  //     :focus {
  //       ${isVisible}
  //     }`}
  // `;
  /*
  unfortunately, i had to create this because i couldnt
  get a return that would work for both isHidden and isFocusable
  `return isHidden && isFocusable;
  i would only get isFocusable returned with the above.
  maybe something is wrong with my return logic or i am not able
  to join two template literals in the way i was attempting
 */
  const isHiddenisFocusable = `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
    :active,
    :focus {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      clip: auto;
      overflow: visible;
      white-space: normal;
    }
  `;

  if (hidden) {
    if (focusable) {
      return isHiddenisFocusable;
    }
    return isHidden;
  }
  return isVisible;
};
