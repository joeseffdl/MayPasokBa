import Image from "next/image";
import { Inter } from "next/font/google";
import { Calendar, Event, WeekCalendarView } from "./";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-orange-200 min-h-screen flex flex-col p-10 gap-5`}>
      <div className="uppercase font-bold text-3xl text-center">
        May F2F Ba?!?
      </div>
      <div className="flex gap-10">
        <div className="hidden w-1/5 xl:flex flex-col gap-5">
          <div>
            <Calendar />
          </div>
          <div>
            <Event />
          </div>
        </div>
        <div className=" w-full">
          <WeekCalendarView />
        </div>
      </div>
    </main>
  );
}
