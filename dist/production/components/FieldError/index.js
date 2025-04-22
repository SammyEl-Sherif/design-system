import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import Text from '../Text/index.js';
import clsx from 'clsx';
import styles from './FieldError.module.scss.js';
import VisuallyHidden from '../VisuallyHidden/index.js';
import IconCritical from '../Icons/_icons/IconCritical.js';

const FieldError = /*#__PURE__*/forwardRef(function FieldError(_a, ref) {
  var {
      as,
      children
    } = _a,
    rest = __rest(_a, ["as", "children"]);
  const className = clsx(rest.className, styles['field-error']);
  const asComponent = as || 'div';
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: asComponent
  }, rest, {
    color: "urgent-600",
    className: className,
    ref: ref,
    variant: "body-sm"
  }), /*#__PURE__*/React.createElement(IconCritical, {
    className: styles['error-icon'],
    variant: "md",
    "aria-hidden": "true",
    marginRight: 50
  }), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Error:"), children);
});

export { FieldError as default };
//# sourceMappingURL=index.js.map
