import styles from './button.module.scss';
import cn from 'classnames';

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

export default Button as typeof Button;
