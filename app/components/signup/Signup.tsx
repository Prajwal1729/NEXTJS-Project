"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessMessage from "../successmessage/SuccessMessage";
import ErrorMessage from "../errormessage/ErrorMessage";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [SuccessMsg,setSuccessMsg] = useState("");
  const [ErrorMsg,setErrorMsg] = useState("");
  const router = useRouter();

   const checkUser = async () => {
      const res = await fetch("/api/checkuser", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

        const data = await res.json();

        if (data.exists) {
          setErrorMsg("User already exists!");
          setSuccessMsg("");
        }
    };


  const handleSignup = async () => {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMsg("Invalid email format!");
        setSuccessMsg("");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMsg("Passwords do not match!");
        setSuccessMsg("");
        return;
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

      if (!passwordRegex.test(password)) {
        setErrorMsg(
          "Password must be of atleast 11 Characters 8 alphabets, 1 symbol and 2 Integers!"
        );
        setSuccessMsg("");
        return;
      }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    //console.log(data,"response")

    if (res.ok) {
      setSuccessMsg("User Created Succesfully!");
      setErrorMsg("");
      setTimeout(()=>{
         router.push("/login");
      },2000);
    } else {
      setErrorMsg("Signup Failed!");
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="w-[400px] p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
        <SuccessMessage message={SuccessMsg}/>
        <ErrorMessage message={ErrorMsg}/>
        
        <h1 className="text-3xl text-white text-center mb-2">
          Sign up
        </h1>

        <p className="text-gray-400 text-sm text-center mb-6">
          Create your Orbix AI account 
        </p>

        <input
          type="email"
          onBlur={checkUser}
          placeholder="Enter email"
          className="w-full p-3 mb-4 rounded-full bg-black border border-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-6 rounded-full bg-black border border-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Confirm password"
          className="w-full p-3 mb-6 rounded-full bg-black border border-gray-700 text-white"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 rounded-full bg-gray-800 text-white"
        >
          Sign up
        </button>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}


