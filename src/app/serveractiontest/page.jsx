import { addPost, deletePost } from "@/lib/action";
import React from "react";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" id="" placeholder="title" />
        <input type="text" name="desc" id="" placeholder="desc" />
        <input type="text" name="slug" id="" placeholder="slug" />
        <input type="text" name="userId" id="" placeholder="userId" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" name="id" id="" placeholder="postId"/>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
