/**
 * This file was automatically generated and should not be edited.
 */
import React, { forwardRef } from 'react';
import IconTemplate, { IconProps, SVGIconProps } from '../Icon';
const Icon = forwardRef<SVGSVGElement, SVGIconProps>(function Icon(
  { title, titleId, ...props },
  ref,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="#c8102e"
      viewBox="0 0 256 256"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
    </svg>
  );
});
type Props = Omit<IconProps, 'Icon'>;
const IconCritical = forwardRef<SVGSVGElement, Props>(function IconCritical(props, ref) {
  return <IconTemplate {...props} Icon={Icon} ref={ref} />;
});
export default IconCritical;
