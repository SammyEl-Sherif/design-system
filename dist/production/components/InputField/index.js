import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef, useState } from 'react';
import Box from '../Box/index.js';
import useWdgsId from '../../hooks/useWdsId.js';
import extractProps from '../../helpers/extractProps/extractProps.js';
import styles from './InputField.module.scss.js';
import FieldWrapper from '../FieldWrapper/index.js';
import FloatingText from '../FieldWrapper/FloatingText.js';
import VisuallyHidden from '../VisuallyHidden/index.js';
import FieldError from '../FieldError/index.js';
import HelperText from '../FieldWrapper/HelperText.js';

const InputField = /*#__PURE__*/forwardRef(function InputField(_a, ref) {
  var {
      label,
      icon,
      errorText,
      helperText
    } = _a,
    rest = __rest(_a, ["label", "icon", "errorText", "helperText"]);
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
  const [containerStyleProps, inputProps] = extractProps(rest);
  const hasError = Boolean(rest['aria-invalid']) || rest['aria-invalid'] === undefined && Boolean(errorText);
  return /*#__PURE__*/React.createElement(Box, containerStyleProps, /*#__PURE__*/React.createElement(FieldWrapper, {
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    icon: icon
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    className: styles.input,
    placeholder: " "
  }, inputProps, {
    id: id,
    ref: ref,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-labelledby": `${id}-label`,
    "aria-invalid": hasError
  })), /*#__PURE__*/React.createElement(FloatingText, {
    htmlFor: id,
    hasError: hasError,
    isFieldFocused: isFocused,
    disabled: rest.disabled,
    hasIcon: Boolean(icon),
    isOptional: !rest.required
  }, label)), hasError && errorText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-error-text`
  }, /*#__PURE__*/React.createElement(FieldError, {
    marginTop: 75
  }, errorText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")), helperText && /*#__PURE__*/React.createElement("div", {
    id: `${id}-helper-text`
  }, /*#__PURE__*/React.createElement(HelperText, null, helperText), /*#__PURE__*/React.createElement(VisuallyHidden, null, ".")));
});

export { InputField as default };
//# sourceMappingURL=index.js.map
