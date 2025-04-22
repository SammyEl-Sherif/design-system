import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import Text from '../Text/index.js';
import { mapBreakpointValues } from '../../breakpoints.js';
import styles from './Button.module.scss.js';
import clsx from 'clsx';

function getVariantClasses(value) {
  if (typeof value === 'string') {
    return styles[`${value}`];
  }
  if (value && typeof value === 'object') {
    return [value.sm && styles[`${value.sm}-sm`], value.md && styles[`${value.md}-md`], value.lg && styles[`${value.lg}-lg`]];
  }
  return undefined;
}
const Button = /*#__PURE__*/forwardRef(function Button(_a, ref) {
  var {
      as,
      children,
      variant = 'brand-primary'
    } = _a,
    rest = __rest(_a, ["as", "children", "variant"]);
  const asComponent = as || 'button';
  const className = clsx(rest.className, styles.button, styles.inheritfont, getVariantClasses(variant));
  const backgroundColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-200';
    switch (variant) {
      case 'default-primary':
        return 'neutral-black';
      case 'default-secondary':
        return 'neutral-white';
      case 'brand-primary':
        return 'active-800';
      case 'brand-secondary':
        return 'neutral-white';
      default:
        return 'neutral-black';
    }
  });
  const borderColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-200';
    switch (variant) {
      case 'brand-secondary':
        return 'active-800';
      case 'default-primary':
      case 'default-secondary':
      case 'brand-primary':
      default:
        return 'neutral-black';
    }
  });
  const textColor = mapBreakpointValues(variant, variant => {
    if (rest.disabled) return 'neutral-400';
    switch (variant) {
      case 'default-primary':
        return 'neutral-white';
      case 'default-secondary':
        return 'neutral-black';
      case 'brand-primary':
        return 'neutral-white';
      case 'brand-secondary':
        return 'neutral-black';
      default:
        return 'neutral-white';
    }
  });
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: asComponent,
    className: className,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: textColor,
    paddingX: 200,
    variant: "button-md-emphasis",
    ref: ref
  }, rest), children);
});

export { Button as default };
//# sourceMappingURL=index.js.map
