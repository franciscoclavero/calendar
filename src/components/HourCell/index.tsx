import { Fragment } from "react";
import { timeDay } from "../constans/timeDay";
import DescriptionArea from "../DescriptionArea";
import HourArea from "../HourArea";
import styled from "./style.module.css";

const HourCell = () => {
  return (
    <div className={styled.body}> 
      <HourArea />
      <DescriptionArea />
    </div>
  )
};

export default HourCell;