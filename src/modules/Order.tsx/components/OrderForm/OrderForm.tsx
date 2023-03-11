import { Button } from "@/components/Button/Button";
import { FC } from "react";
import style from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderForm: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <select name="" id="" className={style.OrderForm__selectContainer}>
        <option>Выберите тип системы</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <label htmlFor="">
        Ваш e-mail
        <input type="text" />
      </label>
      <label htmlFor="">
        Ваше имя
        <input type="text" />
      </label>
      <input
        type="range"
        name="range"
        id="range"
        className="range"
        min="1"
        max="20"
        step="1"
        value="1"
      />
      <output className="num">1</output>

      <Button>Отправить</Button>
    </div>
  );
};

export { OrderForm };
