"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SuccessMessage from "../successmessage/SuccessMessage";
import ErrorMessage from "../errormessage/ErrorMessage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SuccessMsg,setSuccessMsg] = useState("");
  const [ErrorMsg,setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMsg("Invalid email format!");
        setSuccessMsg("");
        return;
      }
      
    const res = await signIn("credentials", {
      email: email,
      password,
      redirect: false,
    });

    if(res?.ok){
      setSuccessMsg("User LoggedIn Succesfully!");
      setErrorMsg("");
      setTimeout(()=>{
        router.push("/dashboard");
      },2000);
    }
    else {
      if (res?.error === "CredentialsSignin") {
        setErrorMsg("Invalid email or password!");
      } else {
        setErrorMsg("Something went wrong!");
      }
      setSuccessMsg("");
    }
    // setSuccessMsg("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      
      {/* Card */}
      <div className="w-[400px] p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl border border-gray-800">
        <SuccessMessage message={SuccessMsg}/>
        <ErrorMessage message={ErrorMsg}/>
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white text-center mb-2">
          Log in
        </h1>

        <p className="text-gray-400 text-sm text-center mb-6">
          Log in to your account and continue your journey with Orbix AI 
        </p>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Log in
        </button>

        {/* Social Buttons */}
        <div className="flex justify-between gap-2 mt-6">
          <button className="flex-1 py-2 rounded-full bg-black border border-gray-700 text-sm text-gray-300">
            Facebook
          </button>
          <button className="flex-1 py-2 rounded-full bg-black border border-gray-700 text-sm text-gray-300">
            Google
          </button>
          <button className="flex-1 py-2 rounded-full bg-black border border-gray-700 text-sm text-gray-300">
            Apple
          </button>
        </div>

        {/* Signup */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Didn’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}