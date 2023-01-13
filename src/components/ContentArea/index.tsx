import { timeDay } from "../constans/timeDay";
import HourCell from "../HourCell";
import styled from "./style.module.css";

const ContentArea = () => {
  return (
    <div className={styled.body}>
      {
        timeDay.map((hour) => {
          return <HourCell key={hour} hour={hour}/>;
        })
      }
    </div>
  )
};

export default ContentArea;