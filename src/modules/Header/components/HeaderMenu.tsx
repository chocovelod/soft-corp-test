import cn from "classnames";
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
      <a href="/" className={containerStyles.Color__blue}>
        Бизнес
      </a>
      <a href="/">О нас</a>
      <a href="/">Цены</a>
      <a href="/">Оформить заказ</a>
    </nav>
  );
};

export { HeaderMenu };
