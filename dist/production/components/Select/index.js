import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef, useState } from 'react';
import Box from '../Box/index.js';
import useWdgsId from '../../hooks/useWdsId.js';
import extractProps from '../../helpers/extractProps/extractProps.js';
import FieldWrapper from '../FieldWrapper/index.js';
import Text from '../Text/index.js';
import styles from './Select.module.scss.js';
import FloatingText from '../FieldWrapper/FloatingText.js';
import VisuallyHidden from '../VisuallyHidden/index.js';
import FieldError from '../FieldError/index.js';
import HelperText from '../FieldWrapper/HelperText.js';
import IconArrowDown from '../Icons/_icons/IconArrowDown.js';

const Select = /*#__PURE__*/forwardRef(function Select(_a, ref) {
  var {
      label,
      placeholder,
      errorText,
      helperText,
      children
    } = _a,
    rest = __rest(_a, ["label", "placeholder", "errorText", "helperText", "children"]);
  const id = useWdgsId();
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = event => {
    setIsFocused(true);
    if (rest.onFocus) {
      rest.onFocus(event);
    }
  };
  const onBlur = event => {
    setIsFocused(false);
    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };
  const [containerStyleProps, selectProps] = extractProps(rest);
  const hasError = Boolean(rest['aria-invalid']) || rest['aria-invalid'] === undefined && Boolean(errorText);
  return /*#__PURE__*/React.createElement(Box, containerStyleProps, /*#__PURE__*/React.createElement(FieldWrapper, {
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled
  }, /*#__PURE__*/React.createElement(Text, _extends({
    as: "select"
  }, selectProps, {
    ref: ref,
    id: id,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-labelledby": `${id}-label`,
    "aria-invalid": hasError,
    variant: 'body-md',
    color: rest.disabled ? 'neutral-600' : 'neutral-black',
    paddingY: 125,
    paddingLeft: 200,
    className: styles.select
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    className: styles.placeholder,
    value: ""
  }, placeholder), children), /*#__PURE__*/React.createElement(FloatingText, {
    htmlFor: id,
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    isOptional: !rest.required,
    stayAfloat: true
  }, label), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: styles.icon
  }, /*#__PURE__*/React.createElement(IconArrowDown, {
    className: isFocused ? styles['icon-arrow'] : undefined,
    color: rest.disabled ? 'neutral-400' : 'active-800',
    variant: "lg"
  }))), hasError && errorText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-error-text`
  }, /*#__PURE__*/React.createElement(FieldError, {
    marginTop: 75
  }, errorText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")), helperText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-helper-text`
  }, /*#__PURE__*/React.createElement(HelperText, null, helperText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")));
});

export { Select as default };
//# sourceMappingURL=index.js.map
