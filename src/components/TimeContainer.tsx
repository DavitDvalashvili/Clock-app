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
  if (hours >= 5 && hours < 12) {
    dayInterval = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    dayInterval = "Good Afternoon";
  } else if (hours >= 18 && hours < 23) {
    dayInterval = "Good Evening";
  } else {
    dayInterval = "Good Night";
  }

  const [hideInfo, setHideInfo] = useState<boolean>(true);

  return (
    <div
      className={
        true ? "timeContainerStyle bgDay" : "timeContainerStyle bgNight"
      }
    >
      {hideInfo && <QuoteContainer />}
      <div className="lg:flex lg:justify-between lg:max-w-[1110px] lg:items-end">
        <div>
          <div
            className="flex gap-[16.44px] font-normal text-[15px] leading-[25px] md:text-[18px] md:leading-[28px]
            uppercase tracking-[3px] mt-[68px] md:mt-[73px] lg:mt-[0px] items-center lg:text-5 lg:tracking-1"
          >
            <img
              className="w-6 h-6"
              src={
                dayTime
                  ? "./assets/images/icon-sun.svg"
                  : "./assets/images/icon-moon.svg"
              }
              alt="moon-sun"
            />
            <p>
              {dayInterval}
              <span className="hidden md:inline-block">IT IS CURRENTLY</span>
            </p>
          </div>
          <div
            className=" md:my-[0px] my-4 text-[100px] leading-[100px] md:text-[175px] md:leading-[175px] 
            md:tracking-[-4.375px] font-bold tracking-[-2.5px] lg:text-[200px] lg:leading-[200px] lg:tracking-[-5px]
            lg:my-[16px]"
          >
            <span className="h-[175px]">{currentTime}</span>
            <span
              className="font-light text-[15px] leading-[28px] tracking-normal ml-[13px] md:text-[32px] 
              md:leading-[28px] lg:text-[40px]"
            >
              BST
            </span>
          </div>
          <div
            className="text-[15px] leading-[28px] md:text-[18px] font-bold tracking-[3px] md:tracking-[3.6px] 
            md:mb-20 mb-[48px] lg:text-[24px] lg:mb-[0px] "
          >
            {props.timezone.replace("Asia/Tbilisi", "Europe/Tbilisi")}
          </div>
        </div>
        <div
          onClick={() => {
            setHideInfo(!hideInfo);
          }}
          className="w-[115px] md:w-[146px] h-[39px] md:h-[56px] rounded-[28px] bg-white flex justify-between items-center 
                    gap-[15px] p-1 pl-[17px]  md:p-2 md:pl-[21px]"
        >
          <span className="font-bold text-3 md:text-4 leading-[14px] md:leading-[28px] text-black  opacity-[50%] uppercase">
            {hideInfo ? "MORE" : "LESS"}
          </span>
          <img
            className="w-8 h-8m md:w-10 md:h-10"
            src={
              hideInfo
                ? "./assets/images/icon-arrow-up.svg"
                : "./assets/images/icon-arrow-down.svg"
            }
            alt=""
          />
        </div>
      </div>
      {!hideInfo && (
        <Information
          day_of_week={props.day_of_week}
          day_of_year={props.day_of_year}
          week_number={props.week_number}
          timezone={props.timezone}
          dayTime={dayTime}
        />
      )}
    </div>
  );
};

export default TimeContainer;
