import { Button } from "@/components/Button/Button";
import cn from "classnames";
import { FC } from "react";
import { OrderSlider } from "./OrderSlider";
import style from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderForm: FC<Props> = ({ className }) => {
  return (
    <div className={cn(`${className}, ${style.OrderForm}`)}>
      <select name="" id="" className={style.OrderForm__selectContainer}>
        <option>Выберите тип системы</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <div className={style.OrderForm__inputContainer}>
        <input
          type="text"
          placeholder="Ваш e-mail"
          className={style.OrderForm__input}
        />
      </div>
      <div className={style.OrderForm__inputContainer}>
        <input
          type="text"
          placeholder="Ваше имя"
          className={style.OrderForm__input}
        />
      </div>
      <OrderSlider className={style.OrderForm__rangeInput} />

      <Button>Отправить</Button>
    </div>
  );
};

export { OrderForm };
