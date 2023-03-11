import {
  DragDropIcon,
  MailIcon,
  PercentIcon,
  PriceIcon,
  SearchIcon,
} from "@/icons";
import cn from "classnames";
import { FC } from "react";
import containerStyles from "../../../../styles/Home.module.scss";
import style from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderHead: FC<Props> = ({ className }) => {
  return (
    <div className={cn(`${containerStyles.Container}`, className)}>
      <h2 className={style.OrderHead__title}>
        Оформление <span>Заказа</span>
      </h2>
      <p className={style.OrderHead__subTitle}>
        Перед заполнением формы ознакомьтесь с нашей схемой работы!
      </p>
      <ul className={style.OrderHead__iconsList}>
        <li>
          <SearchIcon />
          <p>Lorem ipsum dolor sit amet</p>
        </li>
        <li>
          <PercentIcon />
          <p>Сonsecteturadipiscing elit</p>
        </li>
        <li>
          <DragDropIcon />
          <p>Sed do eiusmod tempor</p>
        </li>
        <li>
          <MailIcon />
          <p>Esse cillum dolore eu fugiat</p>
        </li>
        <li>
          <PriceIcon />
          <p>Excepteur sint occaecat cupidatat non proident</p>
        </li>
      </ul>
    </div>
  );
};

export { OrderHead };
