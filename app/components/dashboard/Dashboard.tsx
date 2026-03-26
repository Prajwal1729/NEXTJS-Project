"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white p-5">
      <h1>Welcome to Dashboard</h1>
      {/* <p>User: {session?.user?.email}</p> */}
    </div>
  );
}