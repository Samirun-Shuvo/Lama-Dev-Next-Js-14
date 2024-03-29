"use client";
import React from "react";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" id="" value={userId} />
      <input type="text" name="title" id="" placeholder="Title" />
      <input type="text" name="slug" id="" placeholder="Slug" />
      <input type="text" name="img" id="" placeholder="Image" />
      <textarea
        type="text"
        name="desc"
        id=""
        placeholder="Description"
        rows="10"
      />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
