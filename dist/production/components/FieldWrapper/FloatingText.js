import getStateColors from './getStateColors.js';
import styles from './FloatingText.module.scss.js';
import clsx from 'clsx';
import Text from '../Text/index.js';
import React from 'react';

const FloatingText = ({
  hasError = false,
  disabled,
  isFieldFocused,
  hasIcon = false,
  multiline = false,
  stayAfloat = false,
  floatAlign = 'left',
  children,
  isOptional = false,
  htmlFor
}) => {
  const floatingClasses = clsx(styles['floating-text'], multiline ? styles.multiline : styles['single-line'], {
    [styles['stay-afloat']]: stayAfloat,
    [styles.error]: hasError
  });
  const labelClasses = clsx(floatingClasses, styles[floatAlign]);
  const optionalClasses = clsx(floatingClasses, styles.optional, {
    [styles['has-icon']]: hasIcon
  });
  const colors = getStateColors({
    hasError,
    disabled,
    isFieldFocused
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    as: "label",
    htmlFor: htmlFor,
    id: `${htmlFor}-label`,
    variant: "body-md",
    paddingX: 50,
    className: labelClasses,
    color: colors.text
  }, children), isOptional && /*#__PURE__*/React.createElement(Text, {
    as: "label",
    htmlFor: htmlFor,
    "aria-hidden": true,
    variant: "body-md",
    color: colors.text,
    paddingX: 50,
    className: optionalClasses
  }, "Optional"));
};

export { FloatingText as default };
//# sourceMappingURL=FloatingText.js.map
