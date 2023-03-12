import { Logo } from "@/icons";
import cn from "classnames";
import containerStyles from "../../styles/Home.module.scss";
import { HeaderMenu, HeaderMobileMenu } from "./components";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div
        className={cn(
          `${styles.Header__container} ${containerStyles.Container}`
        )}
      >
        <div>
          <Logo className={styles.Header__logo} />
        </div>
        <HeaderMenu className={styles.Header__navigation} />
        <HeaderMobileMenu className={styles.Header__navigationMobile} />
      </div>
    </header>
  );
};

export { Header };
