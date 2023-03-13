import { BurgerMenu, CloseIcon } from "@/icons";
import cn from "classnames";
import Link from "next/link";
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
      {isOpen ? (
        <button onClick={handleClick} className={styles.Header__button}>
          <CloseIcon />
        </button>
      ) : (
        <button onClick={handleClick} className={styles.Header__button}>
          <BurgerMenu />
        </button>
      )}

      {isOpen && (
        <div
          className={cn(
            `${styles.Header__menuMobile} ${containerStyles.Color__primary} ${containerStyles.Font__13_16}`,
            className
          )}
        >
          <nav>
            <Link href="/">Бизнес</Link>
            <Link href="/">О нас</Link>
            <Link href="/">Цены</Link>
            <Link href="/">Оформить заказ</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export { HeaderMobileMenu };
