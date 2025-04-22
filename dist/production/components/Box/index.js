import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import styles from './Box.module.scss.js';
import clsx from 'clsx';

function getPropClasses(value, prefix) {
  // if passed a single value
  if (typeof value === 'number' || typeof value === 'string') {
    return styles[`${prefix}-${value}`];
  }
  // otherwise return a class for each breakpoint
  if (value && typeof value === 'object') {
    return [styles[`${prefix}-sm-${value.sm}`], styles[`${prefix}-md-${value.md}`], styles[`${prefix}-lg-${value.lg}`]];
  }
  return undefined;
}
const Box = /*#__PURE__*/forwardRef(function Box(props, ref) {
  const {
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      color,
      borderColor,
      backgroundColor,
      children
    } = props,
    rest = __rest(props, ["margin", "marginX", "marginY", "marginTop", "marginRight", "marginLeft", "marginBottom", "padding", "paddingX", "paddingY", "paddingTop", "paddingRight", "paddingLeft", "paddingBottom", "color", "borderColor", "backgroundColor", "children"]);
  const Tag = rest.as || 'div';
  const pt = paddingTop || paddingY;
  const pb = paddingBottom || paddingY;
  const pl = paddingLeft || paddingX;
  const pr = paddingRight || paddingX;
  const mt = marginTop || marginY;
  const mb = marginBottom || marginY;
  const ml = marginLeft || marginX;
  const mr = marginRight || marginX;
  const propClassNames = [];
  // IF the prop exists add the corresponding classNames
  padding && propClassNames.push(getPropClasses(padding, 'pad'));
  pt && propClassNames.push(getPropClasses(pt, 'pad-t'));
  pb && propClassNames.push(getPropClasses(pb, 'pad-b'));
  pl && propClassNames.push(getPropClasses(pl, 'pad-l'));
  pr && propClassNames.push(getPropClasses(pr, 'pad-r'));
  margin && propClassNames.push(getPropClasses(margin, 'mar'));
  mt && propClassNames.push(getPropClasses(mt, 'pad-t'));
  mb && propClassNames.push(getPropClasses(mb, 'pad-b'));
  ml && propClassNames.push(getPropClasses(ml, 'pad-l'));
  mr && propClassNames.push(getPropClasses(mr, 'pad-r'));
  color && propClassNames.push(getPropClasses(color, 'color'));
  backgroundColor && propClassNames.push(getPropClasses(backgroundColor, 'bgc'));
  borderColor && propClassNames.push(getPropClasses(borderColor, 'bdc'));
  const className = clsx(rest.className, ...propClassNames);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    ref: ref,
    className: className
  }), children);
});

export { Box as default };
//# sourceMappingURL=index.js.map
