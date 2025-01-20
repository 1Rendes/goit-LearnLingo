import React from "react";
import Modal from "../Modal/Modal";
import css from "./LoginModal.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginModal {
  isOpen: boolean;
  handleClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Must contain at least 5 characters")
    .required("Password is required"),
});

interface IFormInput {
  email: string;
  password: string;
}

const LoginModal: React.FC<LoginModal> = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={css.loginModal}>
        <h1>Log In</h1>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input placeholder="Password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Log In</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
