import cn from "classnames";
import { FC, useState } from "react";
import containerStyles from "../../../../styles/Home.module.scss";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

const OrderSlider: FC<Props> = ({ className }) => {
  const [width, setWidth] = useState(0);

  const changeWidth = (event: any) => {
    setWidth(event.target.value);
  };

  return (
    <div className={className}>
      <div
        className={cn(
          `${styles.OrderSlider__head} ${containerStyles.Color__white}`
        )}
      >
        <span>Sed ut perspiciatis, unde omnis iste natus</span>
        <output>{width} %</output>
      </div>

      <input
        type="range"
        onChange={changeWidth}
        min={1}
        max={100}
        step={1}
        value={width}
        className={styles.OrderForm__rangeInput_range}
      ></input>
    </div>
  );
};

export { OrderSlider };
