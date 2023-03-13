import { Button } from "@/components/Button/Button";
import { ArrowIcon, CopyIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import { OrderDropdown } from "./OrderDropdown";
import { OrderSlider } from "./OrderSlider";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderForm: FC<Props> = ({ className }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>("");
  const options = () => {
    return [
      "Sed ut perspiciatis",
      "Nemo enim ipsam",
      "Et harum quidem",
      " Temporibus autem",
      "Itaque earum rerum",
      "Sed ut perspiciatis",
      "Nemo enim ipsam",
      "Et harum quidem",
      " Temporibus autem",
      "Itaque earum rerum",
    ];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectOption(option);
  };

  console.log(selectOption);

  return (
    <div className={cn(`${className}, ${styles.OrderForm}`)}>
      <button
        className={
          showDropDown ? `${styles.OrderForm__selectActive}` : `${styles.test}`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className={styles.OrderForm__selectLabel}>
          {selectOption ? selectOption : "Выберите тип системы"}
          <ArrowIcon />
        </div>
        {showDropDown && (
          <OrderDropdown
            className={styles.OrderForm__selectContainer}
            options={options()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}{" "}
      </button>
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
