import { Button } from "@/components/Button/Button";
import { CopyIcon } from "@/icons";
import cn from "classnames";
import { FC } from "react";
import { OrderSlider } from "./OrderSlider";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderForm: FC<Props> = ({ className }) => {
  return (
    <div className={cn(`${className}, ${styles.OrderForm}`)}>
      <select name="" id="" className={styles.OrderForm__selectContainer}>
        <option>Выберите тип системы</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <div className={styles.OrderForm__inputContainer}>
        <input
          type="text"
          placeholder="Ваш e-mail"
          className={styles.OrderForm__input}
        />
      </div>
      <div className={styles.OrderForm__inputContainer}>
        <input
          type="text"
          placeholder="Ваше имя"
          className={styles.OrderForm__input}
        />
      </div>
      <OrderSlider className={styles.OrderForm__rangeInput} />
      <button className={styles.OrderForm__addFileButton}>
        <CopyIcon />
        <span>Прикрепить файл</span>
      </button>
      <Button className={styles.OrderForm__pushButton}>Отправить</Button>
    </div>
  );
};

export { OrderForm };
