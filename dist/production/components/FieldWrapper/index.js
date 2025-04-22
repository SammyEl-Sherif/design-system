import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import clsx from 'clsx';
import styles from './FieldWrapper.module.scss.js';
import Box from '../Box/index.js';
import getStateColors from './getStateColors.js';
import Icon from './Icon.js';
import React from 'react';

const FieldWrapper = _a => {
  var {
      hasError = false,
      disabled,
      isFieldFocused = false,
      multiline = false,
      children,
      icon
    } = _a,
    rest = __rest(_a, ["hasError", "disabled", "isFieldFocused", "multiline", "children", "icon"]);
  const fielldClassName = clsx(styles.field, rest.className, {
    [styles.focused]: isFieldFocused && !hasError,
    [styles['error-focused']]: isFieldFocused && hasError,
    [styles['has-icon']]: Boolean(icon),
    [styles.multi]: multiline
  });
  const colors = getStateColors({
    hasError,
    disabled,
    isFieldFocused
  });
  return /*#__PURE__*/React.createElement(Box, _extends({}, rest, {
    borderColor: colors.border,
    backgroundColor: colors.background,
    className: fielldClassName
  }), children, icon && /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    multiline: multiline
  }));
};

export { FieldWrapper as default };
//# sourceMappingURL=index.js.map
