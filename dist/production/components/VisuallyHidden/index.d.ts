import React from 'react';
import { PolymorphicComponentPropsWithRef } from '../../polymorphic-component-types';
interface Props {
    children?: React.ReactNode;
}
type VisuallyHiddenProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;
type VisuallyHiddenComponent = <C extends React.ElementType = 'span'>(props: VisuallyHiddenProps<C>) => React.ReactElement<VisuallyHiddenProps<C>> | null;
declare const VisuallyHidden: VisuallyHiddenComponent;
declare const _default: typeof VisuallyHidden;
export default _default;
