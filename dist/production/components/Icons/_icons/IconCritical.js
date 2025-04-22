import { extends as _extends } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { __rest } from 'tslib';
import React, { forwardRef } from 'react';
import IconTemplate from '../Icon.js';

const Icon = /*#__PURE__*/forwardRef(function Icon(_a, ref) {
  var {
      title,
      titleId
    } = _a,
    props = __rest(_a, ["title", "titleId"]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "#c8102e",
    viewBox: "0 0 256 256",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12"
  }));
});
const IconCritical = /*#__PURE__*/forwardRef(function IconCritical(props, ref) {
  return /*#__PURE__*/React.createElement(IconTemplate, _extends({}, props, {
    Icon: Icon,
    ref: ref
  }));
});

export { IconCritical as default };
//# sourceMappingURL=IconCritical.js.map
