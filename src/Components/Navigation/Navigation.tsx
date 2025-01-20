import { Link, NavLink } from "react-router";
import css from "./Navigation.module.css";
import icons from "../../assets/icons.svg";

const Navigation = () => {
  return (
    <div className={css.appbar}>
      <Link to="/" className={css.logoLink}>
        <div className={css.logo}></div>
        LearnLingo
      </Link>
      <nav className={css.navigation}>
        <NavLink to="/" end className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/teachers" end className={css.navLink}>
          Teachers
        </NavLink>
      </nav>
      <div className={css.authBlock}>
        <button className={css.loginButton}>
          <svg className={css.loginIcon}>
            <use href={`${icons}#icon-login`}></use>
          </svg>
          Log in
        </button>
        <button className={css.registrationButton}>Registration</button>
      </div>
    </div>
  );
};

export default Navigation;
