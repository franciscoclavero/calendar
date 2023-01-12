import HourCell from "../HourCell";
import styled from "./style.module.css";

const ContentArea = () => {
  return (
    <div className={styled.body}>
      <HourCell />
    </div>
  )
};

export default ContentArea;