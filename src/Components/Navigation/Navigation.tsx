import { Link, NavLink } from "react-router";
import css from "./Navigation.module.css";
import icons from "../../assets/icons.svg";
import LoginModal from "../LoginModal/LoginModal";
import { useState } from "react";

const Navigation = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  function handleLoginModalClose() {
    setIsLoginModalOpen(false);
  }
  function handleLoginModalOpen() {
    setIsLoginModalOpen(true);
  }
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
        <button
          className={css.loginButton}
          onClick={() => {
            handleLoginModalOpen();
          }}
        >
          <svg className={css.loginIcon}>
            <use href={`${icons}#icon-login`}></use>
          </svg>
          Log in
        </button>
        <button className={css.registrationButton}>Registration</button>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        handleClose={handleLoginModalClose}
      />
    </div>
  );
};

export default Navigation;
