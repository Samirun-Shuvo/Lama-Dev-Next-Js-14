import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <form action="">
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
  );
};

export default RegisterPage;
