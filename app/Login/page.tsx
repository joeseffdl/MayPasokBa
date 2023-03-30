"use client";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  // Router
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithRedirect(auth, googleProvider);
      if (user) {
        toast.success("Successfully signed in with your Google account! 🎉");
        router.push("/");
      }
    } catch (err) {
      toast.error(
        "There was an error while signing in with your Google account ☹️"
      );
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-8 sm:px-16 lg:px-32">
      <form className="w-full md:w-[512px] md:h-[206px] bg-white shadow-md rounded-xl p-8 flex flex-col justify-around">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4 ">
          Login
        </h2>
        <div className="w-full flex justify-center items-center border-2 border-slate-900 rounded-xl">
          <button
            onClick={GoogleLogin}
            className="w-full flex items-center justify-center font-semibold text-sm md:text-lg p-2 rounded-md bg-white text-gray-900 "
          >
            <FcGoogle className="text-2xl md:text-3xl mr-2" />
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}
