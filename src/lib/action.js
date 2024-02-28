"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};


export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const addUser = async (prevState,formData) => {
  const { username,email,password,img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({ username,email,password,img });
    await newUser.save();
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteUser({userId: id});
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
