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
    viewBox: "0 0 256 256",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32"
  }));
});
const IconArrowDown = /*#__PURE__*/forwardRef(function IconArrowDown(props, ref) {
  return /*#__PURE__*/React.createElement(IconTemplate, _extends({}, props, {
    Icon: Icon,
    ref: ref
  }));
});

export { IconArrowDown as default };
//# sourceMappingURL=IconArrowDown.js.map
