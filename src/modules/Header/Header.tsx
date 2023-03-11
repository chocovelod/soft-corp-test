import { Logo } from "@/icons";
import { HeaderMenu } from "./components";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__container}>
        <div>
          <Logo />
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export { Header };
