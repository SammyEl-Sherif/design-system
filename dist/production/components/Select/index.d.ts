import React from 'react';
import { MarginProps } from '../Box';
interface Props extends Omit<React.ComponentPropsWithoutRef<'select'>, 'color'>, MarginProps {
    label: string;
    placeholder?: string;
    errorText?: string;
    helperText?: string;
    children: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSelectElement>>;
export default Select;
