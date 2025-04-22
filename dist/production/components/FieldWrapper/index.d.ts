import React from 'react';
interface Props extends Omit<React.ComponentPropsWithoutRef<'div'>, 'color'> {
    hasError: boolean;
    disabled?: boolean;
    isFieldFocused: boolean;
    multiline?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}
declare const FieldWrapper: ({ hasError, disabled, isFieldFocused, multiline, children, icon, ...rest }: Props) => React.JSX.Element;
export default FieldWrapper;
