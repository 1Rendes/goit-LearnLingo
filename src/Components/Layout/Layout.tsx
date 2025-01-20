import { Suspense, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.layout}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
