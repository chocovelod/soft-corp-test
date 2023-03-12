import { BurgerMenu, CloseIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import containerStyles from "../../../styles/Home.module.scss";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const HeaderMobileMenu: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={className}>
      <button onClick={handleClick} className={styles.Header__button}>
        <BurgerMenu />
      </button>

      {isOpen && (
        <div
          className={cn(
            `${styles.Header__menuMobile} ${containerStyles.Color__primary}`,
            className
          )}
        >
          <button onClick={handleClick}>
            <CloseIcon />
          </button>

          <nav>
            <a href="/" className={containerStyles.Color__blue}>
              Бизнес
            </a>
            <a href="/">О нас</a>
            <a href="/">Цены</a>
            <a href="/">Оформить заказ</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export { HeaderMobileMenu };
