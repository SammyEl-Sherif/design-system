import React from 'react';
import { Breakpoints } from '../../breakpoints';
import { BaseBoxProps } from '../Box';
export type Variants = 'sm' | 'md' | 'lg';
export interface IconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'color'>, Omit<BaseBoxProps, 'as'> {
    title?: string;
    variant?: Variants | Breakpoints<Variants>;
    Icon: React.ElementType;
}
export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
    title?: string;
    titleId?: string;
}
declare const IconTemplate: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
export default IconTemplate;
