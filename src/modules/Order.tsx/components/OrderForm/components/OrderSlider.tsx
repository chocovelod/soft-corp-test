import cn from "classnames";
import { FC, useState } from "react";
import containerStyles from "../../../../../styles/Home.module.scss";
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
    <div className={styles.Order__form_rangeInput}>
      <div
        className={cn(
          `${styles.Order__form_slider_head} ${containerStyles.Color__white}`
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
        className={styles.Order__form_rangeInput_range}
      ></input>
    </div>
  );
};

export { OrderSlider };
