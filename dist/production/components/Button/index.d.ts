import React from 'react';
import { PolymorphicComponentPropsWithRef } from '../../polymorphic-component-types';
import { MarginProps } from '../Box';
import { Breakpoints } from '../../breakpoints';
type Variant = 'brand-primary' | 'brand-secondary' | 'default-primary' | 'default-secondary';
export interface Props extends MarginProps {
    children: React.ReactNode;
    variant?: Variant | Breakpoints<Variant>;
}
export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;
type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactElement<ButtonProps<C>> | null;
declare const Button: ButtonComponent;
declare const _default: typeof Button;
export default _default;
