import { ReactNode } from "react";
import css from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
