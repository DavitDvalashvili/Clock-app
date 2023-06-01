import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TimeContainer from "./components/TimeContainer";
import { DataType } from "./components/TimeContainer";

function App() {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [timeData, setTimeData] = useState<DataType | null>(null);

  useEffect(() => {
    const WordTime = async () => {
      const response = await axios.get(
        "http://worldtimeapi.org/api/timezone/Asia/Tbilisi"
      );
      const data = await response.data;
      setTimeData(data);
    };
    WordTime();
  }, [currentTime]);

  const timeIntervalId = setInterval(() => {
    setCurrentTime(currentTime + 1);
    clearInterval(timeIntervalId);
  }, 1000);
  return (
    <div className="app">
      {timeData && (
        <TimeContainer
          timezone={timeData.timezone}
          datetime={timeData.datetime}
          day_of_week={timeData.day_of_week}
          day_of_year={timeData.day_of_year}
          week_number={timeData.week_number}
        />
      )}
    </div>
  );
}

export default App;
