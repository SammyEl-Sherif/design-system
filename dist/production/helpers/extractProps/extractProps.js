import { __rest } from 'tslib';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractProps = props => {
  const {
      className,
      style,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft
    } = props,
    rest = __rest(props, ["className", "style", "margin", "marginX", "marginY", "marginTop", "marginRight", "marginBottom", "marginLeft"]);
  return [{
    className,
    style,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  }, rest];
};

export { extractProps as default };
//# sourceMappingURL=extractProps.js.map
