import {
  DragDropIcon,
  MailIcon,
  PercentIcon,
  PriceIcon,
  SearchIcon,
} from "@/icons";
import cn from "classnames";
import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderHead: FC<Props> = ({ className }) => {
  return (
    <div className={cn(`${styles.OrderHead}`, className)}>
      <h2 className={styles.OrderHead__title}>
        Оформление <span>Заказа</span>
      </h2>
      <p className={styles.OrderHead__subTitle}>
        Перед заполнением формы ознакомьтесь с нашей схемой работы!
      </p>
      <ul className={styles.OrderHead__iconsList}>
        <li className={styles.OrderHead__iconsList_container}>
          <div>
            <SearchIcon />
            <img
              src="./Dots.svg"
              alt=""
              className={styles.OrderHead__iconsList_container_dots}
            />
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </li>
        <li className={styles.OrderHead__iconsList_container}>
          <div>
            <PercentIcon />
            <img
              src="./Dots.svg"
              alt=""
              className={styles.OrderHead__iconsList_container_dots}
            />
          </div>
          <p>Сonsecteturadipiscing elit</p>
        </li>
        <li className={styles.OrderHead__iconsList_container}>
          <div>
            <DragDropIcon />
            <img
              src="./Dots.svg"
              alt=""
              className={styles.OrderHead__iconsList_container_dots}
            />
          </div>
          <p>Sed do eiusmod tempor</p>
        </li>
        <li className={styles.OrderHead__iconsList_container}>
          <div>
            <MailIcon />
            <img
              src="./Dots.svg"
              alt=""
              className={styles.OrderHead__iconsList_container_dots}
            />
          </div>
          <p>Esse cillum dolore eu fugiat</p>
        </li>
        <li className={styles.OrderHead__iconsList_container}>
          <PriceIcon />
          <p>Excepteur sint occaecat cupidatat non proident</p>
        </li>
      </ul>
    </div>
  );
};

export { OrderHead };
