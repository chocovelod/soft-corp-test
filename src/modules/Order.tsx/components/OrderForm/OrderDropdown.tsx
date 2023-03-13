import { FC, useEffect, useState } from "react";
import styles from "./test.module.scss";
type Props = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
  className?: string;
};

const OrderDropdown: FC<Props> = ({
  options,
  optionSelection,
  className,
}: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <div className={className}>
      <div
        className={
          showDropDown
            ? `${styles.Dropdown__menu}`
            : `${styles.Dropdown__menu_active}`
        }
      >
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(option);
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export { OrderDropdown };
