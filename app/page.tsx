import Image from "next/image";
import { Inter } from "next/font/google";
import { Calendar, Event } from "./";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-orange-200 min-h-screen flex p-10 gap-10`}>
      <div className="w-1/5 flex flex-col gap-5">
        <div className="h-fit">
          <Calendar />
        </div>
        <div className="h-full">
          <Event />
        </div>
      </div>
      <div className="border-2 border-blue-300 w-full">Schedule goes here</div>
    </main>
  );
}
