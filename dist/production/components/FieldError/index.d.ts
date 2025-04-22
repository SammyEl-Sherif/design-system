import React from 'react';
import { PolymorphicComponentPropsWithRef } from '../../polymorphic-component-types';
import { MarginProps } from '../Box';
export interface Props extends MarginProps {
    children?: React.ReactNode;
}
export type FieldErrorProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;
type FieldErrorComponent = <C extends React.ElementType = 'div'>(props: FieldErrorProps<C>) => React.ReactElement<FieldErrorProps<C>> | null;
declare const FieldError: FieldErrorComponent;
declare const _default: typeof FieldError;
export default _default;
