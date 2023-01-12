import ContentArea from "../ContentArea";
import HeaderCell from "../HeaderCell";

import styled from "./style.module.css";

interface InterfaceDayWeekColumn {
  dayWeek: string;
} 

const DayWeekColumn = ({ dayWeek }: InterfaceDayWeekColumn) => {
  return (
    <div className={styled.body}>
      <HeaderCell title={dayWeek}/>
      <ContentArea />
    </div>
  );
};

export default DayWeekColumn;