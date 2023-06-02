import Information from "./Infomation";
import QuoteContainer from "./QuoteContainer";
import { useState } from "react";
export interface DataType {
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  week_number: number;
}

const TimeContainer = (props: DataType) => {
  let currentTime: string = props.datetime.slice(11, 16);
  let hours: number = parseInt(props.datetime.slice(11, 13));

  //defines it is daytime or night
  let dayTime: Boolean;
  if (hours > 5 && hours < 18) {
    dayTime = true;
  } else {
    dayTime = false;
  }

  //greeting text for the different part of the day
  let dayInterval: string;
  if (hours > 5 && hours < 12) {
    dayInterval = "Good Morning";
  } else if (hours > 12 && hours < 18) {
    dayInterval = "Good Afternoon";
  } else if (hours > 18 && hours < 23) {
    dayInterval = "Good Evening";
  } else {
    dayInterval = "Good Night";
  }

  const [hideInfo, setHideInfo] = useState<boolean>(true);

  return (
    <div className="fontInter bg-red-600 w-[100vw] h-[100vh] px-[26px] pt-8 pb-10">
      {hideInfo && <QuoteContainer />}
      <div className="">
        <img
          src={
            dayTime
              ? "./assets/images/icon-sun.svg"
              : "./assets/images/icon-moon.svg"
          }
          alt="moon-sun"
        />
        <span>{dayInterval}</span>
      </div>
      <div className="clock">
        {currentTime}
        <span>BST</span>
      </div>
      {props.timezone.replace("Asia/Tbilisi", "Europe/Tbilisi")}
      <div
        onClick={() => {
          setHideInfo(!hideInfo);
        }}
        className="button"
      >
        <span>{hideInfo ? "MORE" : "LESS"}</span>
        <img
          src={
            hideInfo
              ? "./assets/images/icon-arrow-up.svg"
              : "./assets/images/icon-arrow-down.svg"
          }
          alt=""
        />
      </div>
      {!hideInfo && (
        <Information
          day_of_week={props.day_of_week}
          day_of_year={props.day_of_year}
          week_number={props.week_number}
          timezone={props.timezone}
        />
      )}
    </div>
  );
};

export default TimeContainer;
