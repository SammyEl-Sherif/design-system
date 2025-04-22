import React from 'react';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../polymorphic-component-types';
import { Breakpoints } from '../../breakpoints';
export type SpacingRange = 25 | 50 | 75 | 100 | 125 | 150 | 200 | 250 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type ColorValue = 'neutral-100' | 'neutral-200' | 'neutral-400' | 'neutral-600' | 'neutral-800' | 'neutral-black' | 'neutral-white' | 'urgent-600' | 'urgent-900' | 'moderate-900' | 'passive-800' | 'active-800';
export type Spacing = SpacingRange | Breakpoints<SpacingRange | undefined> | undefined;
export type Color = ColorValue | Breakpoints<ColorValue | undefined> | undefined;
export interface BaseBoxProps {
    margin?: Spacing;
    marginX?: Spacing;
    marginY?: Spacing;
    marginTop?: Spacing;
    marginRight?: Spacing;
    marginBottom?: Spacing;
    marginLeft?: Spacing;
    padding?: Spacing;
    paddingX?: Spacing;
    paddingY?: Spacing;
    paddingTop?: Spacing;
    paddingRight?: Spacing;
    paddingBottom?: Spacing;
    paddingLeft?: Spacing;
    color?: Color;
    borderColor?: Color;
    backgroundColor?: Color;
    children?: React.ReactNode;
}
export type MarginProps = Pick<BaseBoxProps, 'margin' | 'marginX' | 'marginY' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'>;
export type PaddingProps = Pick<BaseBoxProps, 'padding' | 'paddingX' | 'paddingY' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'>;
type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, BaseBoxProps>;
type BoxComponent = <C extends React.ElementType = 'div'>(props: BoxProps<C> & {
    ref?: PolymorphicRef<C>;
}) => React.ReactElement | null;
declare const Box: BoxComponent;
declare const _default: typeof Box;
export default _default;
