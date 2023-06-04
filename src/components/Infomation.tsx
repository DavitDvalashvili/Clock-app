export interface DataType {
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  week_number: number;
  dayTime: Boolean;
}

const Information = (props: DataType) => {
  return (
    <div className={props.dayTime ? "infoBoxStyle infoBgDay text-[#303030]" : "infoBoxStyle infoBgNight text-[#ffffff] "}>
      <div className="md:flex md:flex-col md:gap-[49px] lg:gap-[42px]">
        <div className="infoStyle ">
          <span>Current Timezone</span>
          <span className="infoPropsStyle">{props.timezone.replace("Asia/Tbilisi", "Europe/Tbilisi")}</span>
        </div>
        <div  className="infoStyle">
          <span>Day of the year</span>
          <span className="infoPropsStyle">{props.day_of_year}</span>
        </div>
      </div>
      <div className="lg:h-[252px] lg:w-[2px] lg:bg-[#303030]"></div>
      <div className="md:flex md:flex-col md:gap-[49px] lg:gap-[42px]">
        <div  className="infoStyle">
          <span>Day of the week</span>
          <span className="infoPropsStyle">{props.day_of_week === 0 ? 7 : props.day_of_week}</span>
        </div>
        <div  className="infoStyle">
          <span>Week number</span>
          <span className="infoPropsStyle">{props.week_number}</span>
        </div>
      </div>
    </div>
  );
};
export default Information;
