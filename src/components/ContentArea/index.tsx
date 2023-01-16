import { timeDay } from "../constans/timeDay";
import HourCell from "../HourCell";
import styled from "./style.module.css";

interface InterfaceContentArea {
  dayWeek: string;
}

const ContentArea = ({ dayWeek }: InterfaceContentArea) => {
  return (
    <div className={styled.body}>
      {
        timeDay.map((hour) => {
          return <HourCell key={hour} dayWeek={dayWeek} hour={hour}/>;
        })
      }
    </div>
  )
};

export default ContentArea;