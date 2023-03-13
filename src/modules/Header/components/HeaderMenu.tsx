import cn from "classnames";
import Link from "next/link";
import { FC } from "react";
import containerStyles from "../../../styles/Home.module.scss";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const HeaderMenu: FC<Props> = ({ className }) => {
  return (
    <nav
      className={cn(
        `${styles.Header__menu} ${containerStyles.Color__white}`,
        className
      )}
    >
      <Link href="/" className={containerStyles.Color__blue}>
        Бизнес
      </Link>
      <Link href="/">О нас</Link>
      <Link href="/">Цены</Link>
      <Link href="/">Оформить заказ</Link>
    </nav>
  );
};

export { HeaderMenu };
