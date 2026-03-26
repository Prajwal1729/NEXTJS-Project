// import Image from "next/image";
import Login from "./login/page";
import Signup from "./signup/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
     <div>
      <Login/>
      <Signup/>
      <Dashboard/>
    
     </div>
   

  );
}
