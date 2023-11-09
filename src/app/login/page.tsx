"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { set } from "mongoose";
const Login = () => {
  const router = useRouter();
  const [loading, setloading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {
    try {
      setloading(true);
      const res = await axios.post("api/users/login", user);
      console.log("LOGIN SUCCESSFUL", res.data);
      toast.success("login successful");
      router.push(`/${res.data.id}`);
    } catch (error: any) {
      console.log("login failed", error);
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  const canSave = [...Object.values(user)].every(Boolean);
  return (
    <div>
      <h1>{loading ? "Processing" : "LOGIN"}</h1>
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="disabled:hidden"
        disabled={!canSave}
        onClick = {onLogin}
      >
        Send
      </button>
    </div>
  );
};

export default Login;
