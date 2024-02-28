import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.detail}>
            <Image
              src={post.img || "noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          <form action="">
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
