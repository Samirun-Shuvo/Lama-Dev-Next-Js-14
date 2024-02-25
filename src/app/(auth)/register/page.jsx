import { register } from "@/lib/action";
import React from "react";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" name="username" id="" placeholder="username" />
          <input type="text" name="email" id="" placeholder="email" />
          <input type="text" name="password" id="" placeholder="password" />
          <input
            type="text"
            name="passwordRepeat"
            id=""
            placeholder="password again"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
