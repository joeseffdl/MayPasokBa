"use client";

export const WeekHeader = () => {
  const daysOfWeek = [
    "",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const renderTableHeaders = () => {
    return daysOfWeek.map((day, index) => (
      <th
        key={index}
        className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
      >
        <span className="xl:block lg:block md:block sm:block hidden">
          {day}
        </span>
        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
          {day.slice(0, 3)}
        </span>
      </th>
    ));
  };

  return (
    <thead>
      <tr>{renderTableHeaders()}</tr>
    </thead>
  );
};
