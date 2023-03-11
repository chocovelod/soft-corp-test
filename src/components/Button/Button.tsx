import cn from "classnames";
import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  secondary?: boolean;
  ariaLabel?: string;
  prefetch?: boolean;
  children?: ReactNode;
  ref?: any;
}

const Button: FC<Props> = ({
  className,
  onClick,
  children,
  type,
  secondary,
  ariaLabel,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(`${className} ${styles.Button}`, {
        Button_primary: !secondary,
        Button_secondary: secondary,
      })}
      type={type}
    >
      {children && <span className={styles.Button__label}>{children}</span>}
    </button>
  );
};

export { Button };
export type { Props as ButtonProps };
