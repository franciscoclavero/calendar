import { dayWeek } from "../constans/dayWeek";
import DayWeekColumn from "../DayWeekColumn";

import styled from "./style.module.css";

const BodyCalendar = () => {
  return (
    <div className={styled.body}>
      {
        dayWeek.map((day) => {
          return <DayWeekColumn dayWeek={day}/>
        })
      }
    </div>
  );
};

export default BodyCalendar;