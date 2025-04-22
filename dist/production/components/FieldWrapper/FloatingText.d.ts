import React from 'react';
interface Props {
    hasError: boolean;
    disabled?: boolean;
    htmlFor: string;
    isFieldFocused: boolean;
    isOptional?: boolean;
    hasIcon?: boolean;
    multiline?: boolean;
    stayAfloat?: boolean;
    floatAlign?: 'left' | 'center';
    children: React.ReactNode;
}
declare const FloatingText: ({ hasError, disabled, isFieldFocused, hasIcon, multiline, stayAfloat, floatAlign, children, isOptional, htmlFor, }: Props) => React.JSX.Element;
export default FloatingText;
