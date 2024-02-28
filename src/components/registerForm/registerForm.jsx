"use client";
import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" id="" placeholder="username" />
      <input type="email" name="email" id="" placeholder="email" />
      <input type="password" name="password" id="" placeholder="password" />
      <input
        type="password"
        name="passwordRepeat"
        id=""
        placeholder="password again"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account ? <b> Login </b>
      </Link>
    </form>
  );
};

export default RegisterForm;
