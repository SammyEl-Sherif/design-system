import Text from '../Text/index.js';
import React from 'react';

const HelperText = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(Text, {
    as: "div",
    variant: "body-sm",
    color: "neutral-600",
    marginTop: 50
  }, children);
};

export { HelperText as default };
//# sourceMappingURL=HelperText.js.map
