"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = React.useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp Success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("SignUp faile", error.message);
    } finally {
      setLoading(false);
    }
  };
  const canSave = [...Object.values(user)].every(Boolean);
  return (
    <div>
      <h1>{loading ? "Processing" : "SignUp"}</h1>
      <label htmlFor="username">Username :</label>
      <input
        className=" text-black"
        type="text"
        id="username"
        value={user.username}
        // keep the user as he is it but change only username
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">Email :</label>
      <input
        className=" text-black"
        type="email"
        id="email"
        value={user.email}
        // keep the user as he is it but change only email
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password :</label>
      <input
        className=" text-black"
        type="password"
        id="password"
        value={user.password}
        // keep the user as he is it but change only password
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={onSignup} className="disabled:hidden" 
        disabled={!canSave}>Click</button>
    </div>
  );
};

export default Signup;
