import React from 'react';
import { MarginProps } from '../Box';
export interface Props extends React.ComponentPropsWithoutRef<'input'>, MarginProps {
    label?: React.ReactNode;
    icon?: React.ReactNode;
    errorText?: React.ReactNode;
    helperText?: React.ReactNode;
}
declare const InputField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default InputField;
