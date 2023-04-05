import { Event, WeekCalendarView } from "./";

export default function Home() {
  return (
    <main className={`bg-rose-50 relative min-h-screen flex flex-col gap-5`}>
      <div className="flex gap-10 p-10">
        <div className="w-full lg:hidden xl:w-1/5 flex flex-col gap-5">
          <div className="uppercase font-bold text-3xl text-center">
            May F2F Ba?!?
          </div>
          {/* <div>
            <Calendar />
          </div> */}
          <div>
            <Event />
          </div>
        </div>
        <div className="hidden lg:block w-full">
          <WeekCalendarView />
        </div>
      </div>
    </main>
  );
}
