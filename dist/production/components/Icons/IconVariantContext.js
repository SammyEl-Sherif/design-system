import { useContext, createContext } from 'react';
import 'tslib';

const IconVariantContext = /*#__PURE__*/createContext({});
function useIconVariantContext(variantPropValue) {
  const {
    variantOverride,
    variantProvider
  } = useContext(IconVariantContext);
  return variantOverride !== null && variantOverride !== void 0 ? variantOverride : variantPropValue;
}

export { IconVariantContext as default, useIconVariantContext };
//# sourceMappingURL=IconVariantContext.js.map
