import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AttendanceCard = () => {
  const user = useSelector((state) => state.user);
  const date = new Date();

  return (
    <div
      className="hidden lg:inline-block col-span-2 shadow-base hover:shadow-medium dark:shadow-none dark:hover:shadow-none
    rounded-xl transition-all duration-300 dark:bg-card pb-10 lg:hover:scale-[1.02]"
    >
      <div className="grid grid-cols-2 h-full">
        <div className="h-full scrollbar-hide space-y-1 p-5 overflow-scroll">
          <h1 className="text-base-text-light dark:text-primary-text-dark text-lg font-semibold">
            Check In
          </h1>
          {user.checkIn?.map((data, idx) => (
            <h1
              key={idx}
              className="text-lg text-secondary-text-light dark:text-primary-text-dark dark:text-secondary-text"
            >
              {moment(data.toNumber() * 1000).format("MMMM Do YYYY") ===
                moment(date).format("MMMM Do YYYY") &&
                moment(data.toNumber() * 1000).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
            </h1>
          ))}
        </div>
        <div className="h-[90%] scrollbar-hide space-y-1 p-5 overflow-scroll">
          <h1 className="text-base-text-light dark:text-primary-text-dark text-lg font-semibold">
            Check Out
          </h1>
          {user.checkOut?.map((data, idx) => (
            <h1
              key={idx}
              className="text-lg text-secondary-text-light dark:text-primary-text-dark dark:text-secondary-text"
            >
              {moment(data.toNumber() * 1000).format("MMMM Do YYYY") ===
                moment(date).format("MMMM Do YYYY") &&
                moment(data.toNumber() * 1000).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
