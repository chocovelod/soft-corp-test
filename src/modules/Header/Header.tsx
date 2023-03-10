import { Logo } from "@/icons";
import { HeaderMenu } from "./components";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Logo />
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export { Header };
