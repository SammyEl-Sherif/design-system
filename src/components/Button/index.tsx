import styles from './button.module.scss';
import cn from 'classnames';

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  label: string;
  onClick: () => void;
};

/** Primary UI component for user interaction */
const Button = ({
  primary = false,
  backgroundColor = '#FFF',
  size = 'medium',
  label = 'Click Me',
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={cn(styles.button, styles.buttonLarge, mode)}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button as typeof Button;
