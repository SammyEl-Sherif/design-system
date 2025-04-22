const getStateColors = ({
  disabled,
  hasError,
  isFieldFocused
}) => {
  let background = 'neutral-white';
  let border = 'neutral-600';
  let text = 'neutral-600';
  if (disabled) {
    background = 'neutral-100';
    border = 'neutral-200';
  } else if (hasError) {
    border = 'urgent-600';
  } else if (isFieldFocused) {
    border = 'active-800';
    text = 'active-800';
  }
  return {
    border,
    text,
    background
  };
};

export { getStateColors as default };
//# sourceMappingURL=getStateColors.js.map
