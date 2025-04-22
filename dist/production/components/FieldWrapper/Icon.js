import clsx from 'clsx';
import Box from '../Box/index.js';
import styles from './Icon.module.scss.js';
import React from 'react';

const Icon = ({
  multiline,
  icon
}) => {
  return /*#__PURE__*/React.createElement(Box, {
    marginRight: 200,
    marginTop: multiline ? 200 : undefined,
    className: clsx({
      [styles.multiline]: multiline
    })
  }, icon);
};

export { Icon as default };
//# sourceMappingURL=Icon.js.map
