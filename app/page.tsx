import { WeekCalendarView } from "./";

export default function Home() {
  return (
    <main className={`bg-rose-50 min-h-screen`}>
      <div className="p-10">
        <WeekCalendarView />
      </div>
    </main>
  );
}
