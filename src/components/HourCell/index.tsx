import DescriptionArea from "../DescriptionArea";
import HourArea from "../HourArea";

import styled from "./style.module.css";

interface InterfaceHourCell {
  hour: string;
}

const HourCell = ({ hour }: InterfaceHourCell) => {
  return (
    <div className={styled.body}> 
      <HourArea hour={hour}/>
      <DescriptionArea />
    </div>
  )
};

export default HourCell;