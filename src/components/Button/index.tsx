import React, { forwardRef } from "react";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "../../polymorhpic-component-types";
import { ColorValue, MarginProps } from "../Box";
import Text, { ButtonTextVariant } from '../Text'
import { Breakpoints, mapBreakpointValues } from "../../breakpoints";
import styles from './Button.module.scss';
import clsx from "clsx";

type Variant =
  | "commerce-primary"
  | "commerce-secondary"
  | "default-primary"
  | "default-secondary"
  | "default-tertiary"
  | "utility-default"
  | "utility-small";


export interface Props extends MarginProps {
  children: React.ReactNode;
  variant?: Variant | Breakpoints<Variant>
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>,
) => React.ReactElement<ButtonProps<C>> | null;


function getVariantClasses(value?: Variant | Breakpoints<Variant>) {
  if (typeof value === "string") {
    return styles[`${value}`];
  }

  if (value && typeof value === "object") {
    return [
      value.sm && styles[`${value.sm}-sm`],
      value.md && styles[`${value.md}-md`],
      value.lg && styles[`${value.lg}-lg`],
    ]
  }

  return undefined
}


const Button: ButtonComponent = forwardRef(function Button<
  C extends React.ElementType = "button",
>(
  { as, children, variant = 'commerce-primary', ...rest }: ButtonProps<C>,
  ref?: PolymorphicRef<C>,
) {
  const asComponent: React.ElementType = as || "button";

  const className = clsx(
    rest.className,
    styles.button,
    getVariantClasses(variant)
  )

  const backgroundColor = mapBreakpointValues<Variant, ColorValue>(
    variant,
    (variant) => {
      return rest.disabled
        ? "neutral-200"
        : variant === "default-primary" || variant === "default-secondary"
          ? "neutral-800"
          : variant === "default-tertiary"
            ? "neutral-white"
            : variant === "utility-default" || variant === "utility-small"
              ? "neutral-200" : "urgent-600"
    }
  )
  const borderColor = mapBreakpointValues<Variant, ColorValue>(
    variant,
    (variant) => {
      return rest.disabled
        ? "neutral-200"
        : variant === "default-primary" || variant === "default-secondary"
          ? "neutral-800"
          : variant === "default-tertiary"
            ? "neutral-white"
            : variant === "utility-default" || variant === "utility-small"
              ? "neutral-200" : "urgent-600"
    }
  )
  const color = mapBreakpointValues<Variant, ColorValue>(
    variant,
    (variant) => {
      return rest.disabled
        ? "neutral-400"
        : variant === "commerce-secondary"
          ? "urgent-600"
          : variant === "default-secondary"
            ? "neutral-800"
            : variant === "utility-default" || variant === "utility-small"
              ? "active-800" : "neutral-white"
    }
  )

  const paddingX = mapBreakpointValues<Variant, 100 | 200>(
    variant,
    (variant) => {
      return variant === "utility-small" ? 100 : 200
    }
  )

  const textVariant = mapBreakpointValues<Variant, ButtonTextVariant>(
    variant,
    (variant) => {
      return variant === "utility-default" ? "button-md"
        : variant === "utility-small" ? "button-sm" : "button-md-emphasis"
    }
  )

  return (
    <Text
      as={asComponent}
      className={className}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      paddingX={paddingX}
      variant={textVariant}
      ref={ref}
      {...rest}>
      {children}
    </Text>
  )
}
)

export default Button as typeof Button;



/* 

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick?: () => void;
};

const Button = ({
  primary = false,
  backgroundColor,
  size = 'large',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.buttonPrimary : styles.buttonSecondary;
  const sz = size === 'large' ? styles.buttonLarge : styles.buttonSmall
  return (
    <button
      type='button'
      className={cn(styles.button, mode, sz)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button as typeof Button; */
