import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import Box from '../Box/index.js';
import styles from './Icon.module.scss.js';
import clsx from 'clsx';
import useWdgsId from '../../hooks/useWdsId.js';
import { useIconVariantContext } from './IconVariantContext.js';

function getVariantClasses(value) {
  if (typeof value === 'string') {
    return styles[`icon-variant-${value}`];
  }
  if (value && typeof value === 'object') {
    return [value.sm && styles[`icon-sm-variant-${value.sm}`], value.md && styles[`icon-md-variant-${value.md}`], value.lg && styles[`icon-lg-variant-${value.lg}`]];
  }
  return undefined;
}
const IconTemplate = /*#__PURE__*/forwardRef(function IconTemplate(_a, ref) {
  var _b;
  var {
      Icon,
      title,
      variant: variantPropValue
    } = _a,
    rest = __rest(_a, ["Icon", "title", "variant"]);
  const variant = (_b = useIconVariantContext(variantPropValue)) !== null && _b !== void 0 ? _b : 'md';
  const titleId = useWdgsId();
  const className = clsx(rest.className, styles.icon, getVariantClasses(variant));
  return /*#__PURE__*/React.createElement(Box, _extends({
    titleId: title ? titleId : undefined,
    title: title
  }, rest, {
    className: className,
    as: Icon,
    ref: ref,
    "aria-hidden": title ? false : true
  }));
});

export { IconTemplate as default };
//# sourceMappingURL=Icon.js.map
