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
      viewBox="0 0 256 256"
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32" />
    </svg>
  );
});
type Props = Omit<IconProps, 'Icon'>;
const IconArrowDown = forwardRef<SVGSVGElement, Props>(function IconArrowDown(props, ref) {
  return <IconTemplate {...props} Icon={Icon} ref={ref} />;
});
export default IconArrowDown;
