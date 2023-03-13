import { Button } from "@/components/Button/Button";
import { ArrowIcon, CopyIcon } from "@/icons";
import cn from "classnames";
import { FC, useState } from "react";
import { OrderSlider } from "./components";
import { OrderDropdown } from "./components/OrderDropdown";
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

  return (
    <div className={cn(`${className}, ${styles.Order__form}`)}>
      <button
        className={
          showDropDown
            ? `${styles.Order__form_select_active}`
            : `${styles.Order__form_select}`
        }
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className={styles.Order__form_selectLabel}>
          {selectOption ? selectOption : "Выберите тип системы"}
          <ArrowIcon />
        </div>
        {showDropDown && (
          <OrderDropdown
            className={styles.Order__form_selectContainer}
            options={options()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={optionSelection}
          />
        )}{" "}
      </button>
      <div className={styles.Order__form_inputContainer}>
        <input
          type="text"
          placeholder="Ваш e-mail"
          name="Email"
          className={styles.Order__form_input}
        />
      </div>
      <div className={styles.Order__form_inputContainer}>
        <input
          type="text"
          placeholder="Ваше имя"
          name="Name"
          className={styles.Order__form_input}
        />
      </div>
      <OrderSlider className={styles.Order__form_rangeInput} />
      <button className={styles.Order__form_addFileButton}>
        <CopyIcon />
        <span>Прикрепить файл</span>
      </button>
      <Button className={styles.Order__form_pushButton}>Отправить</Button>
    </div>
  );
};

export { OrderForm };
