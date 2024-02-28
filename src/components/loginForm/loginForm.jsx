"use client";
import React from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" id="" placeholder="username" />
      <input type="password" name="password" id="" placeholder="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account ?"} <b> Register </b>
      </Link>
    </form>
  );
};

export default LoginForm;
