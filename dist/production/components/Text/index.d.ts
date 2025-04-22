import React from 'react';
import { PolymorphicComponentPropsWithRef } from '../../polymorphic-component-types';
import { BaseBoxProps } from '../Box';
import { Breakpoints } from '../../breakpoints';
export type ButtonTextVariant = 'button-md' | 'button-md-emphasis' | 'button-sm';
export type HeadlineVariants = 'headline-display' | 'headline-display-emphasis' | 'headline-lg' | 'headline-lg-emphasis' | 'headline-md' | 'headline-md-emphasis' | 'headline-sm' | 'headline-sm-emphasis';
export type Variant = HeadlineVariants | 'body-lg' | 'body-lg-emphasis' | 'body-lg-paragraph' | 'body-lg-paragraph-emphasis' | 'body-md' | 'body-md-emphasis' | 'body-md-paragraph' | 'body-md-paragraph-emphasis' | 'body-sm' | 'body-sm-emphasis' | 'body-sm-paragraph' | 'body-sm-paragraph-emphasis' | 'body-xs' | 'body-xs-emphasis' | 'body-xs-paragraph' | 'body-xs-paragraph-emphasis' | ButtonTextVariant;
export interface BaseTextProps extends BaseBoxProps {
    /** Write a prop description. */
    variant?: Variant | Breakpoints<Variant>;
    /** When set to true, the text is bolded. */
    emphasis?: boolean;
}
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, BaseTextProps>;
type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement<TextProps<C>> | null;
declare const Text: TextComponent;
declare const _default: typeof Text;
export default _default;
