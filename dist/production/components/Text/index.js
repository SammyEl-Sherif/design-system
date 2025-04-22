import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import Box from '../Box/index.js';
import styles from './Text.module.scss.js';
import clsx from 'clsx';

function getParsedClassNames(value, prefix = '') {
  const variant = value.split('-emphasis')[0];
  const variantClassName = styles[`${prefix}${variant}`];
  const emphasisClassName = value.includes('emphasis') ? styles[`${prefix}emphasis`] : undefined;
  return [variantClassName, emphasisClassName];
}
function getVariantClasses(value) {
  if (typeof value == 'undefined') {
    return '';
  }
  if (typeof value === 'string') {
    return getParsedClassNames(value);
  }
  if (value && typeof value === 'object') {
    return [value.sm && getParsedClassNames(value.sm, 'sm-'), value.md && getParsedClassNames(value.md, 'md-'), value.lg && getParsedClassNames(value.lg, 'lg-')];
  }
  return undefined;
}
const Text = /*#__PURE__*/forwardRef(function Text(_a, ref) {
  var {
      as,
      children,
      variant,
      emphasis = false
    } = _a,
    rest = __rest(_a, ["as", "children", "variant", "emphasis"]);
  const component = as || 'span';
  const className = clsx(rest.className, getVariantClasses(variant), {
    [styles.font]: variant,
    [styles.emphasis]: emphasis
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    as: component,
    ref: ref
  }, rest, {
    className: className
  }), children);
});

export { Text as default };
//# sourceMappingURL=index.js.map
