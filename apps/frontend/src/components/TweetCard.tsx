import React from "react";

export interface TweetCard {
  day: string;
  checkList: string[];
}
const TweetCard = ({ day, checkList }: TweetCard) => {
  return (
    <div className="font-mono flex flex-col gap-2 bg-gradient-to-r from-neutral-900 p-6">
      <h1 className="">
        <span className="font-bold bg-gradient-to-br from-red-500 to-red-700 px-2 py-1 opacity-75">
          Day {day}
        </span>{" "}
        of
        <span className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-100 to-neutral-300 ">
          {" "}
          Building a SaaS
        </span>
      </h1>
      <div className="flex flex-col text-sm text-neutral-400 font-semibold">
        {checkList.map((item) => (
          <li key={item} className="">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default TweetCard;
