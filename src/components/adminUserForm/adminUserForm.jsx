"use client";
import React from "react";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" id="" placeholder="username" />
      <input type="text" name="email" id="" placeholder="email" />
      <input type="password" name="img" id="" placeholder="password" />
      <input type="hidden" name="img" id="" placeholder="img" />
      <select name="isAdmin" id="">
        <option value="false">Is Admin ?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
