export interface DataType {
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  week_number: number;
}

const Information = (props: DataType) => {
  return (
    <div>
      <div>
        <div>
          <span>Current Timezone</span>
          <span>{props.timezone}</span>
        </div>
        <div>
          <span>Day of the year</span>
          <span>{props.day_of_year}</span>
        </div>
      </div>
      <div>
        <div>
          <span>Day of the week</span>
          <span>{props.day_of_week}</span>
        </div>
        <div>
          <span>Day of the week</span>
          <span>{props.week_number}</span>
        </div>
      </div>
    </div>
  );
};
export default Information;
