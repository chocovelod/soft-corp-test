import cn from "classnames";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  secondary?: boolean;
  children?: ReactNode;
}

const Button: FC<Props> = ({ className, children, type }) => {
  return (
    <button
      className={cn(
        `${className} ${styles.Button}`,
        `${styles.Button_primary}`
      )}
      type={type}
    >
      {children && <span className={styles.Button__label}>{children}</span>}
    </button>
  );
};

export { Button };
export type { Props as ButtonProps };
