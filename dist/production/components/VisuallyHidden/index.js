import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './VisuallyHidden.module.scss.js';
import Box from '../Box/index.js';

const VisuallyHidden = /*#__PURE__*/forwardRef(function VisuallyHidden(_a, ref) {
  var {
      as,
      children
    } = _a,
    rest = __rest(_a, ["as", "children"]);
  const asComponent = as || 'span';
  const className = clsx(rest.className, styles['visually-hidden']);
  return /*#__PURE__*/React.createElement(Box, _extends({
    as: asComponent
  }, rest, {
    className: className,
    ref: ref
  }), children);
});

export { VisuallyHidden as default };
//# sourceMappingURL=index.js.map
