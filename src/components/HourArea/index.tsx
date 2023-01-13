import styled from "./style.module.css";

interface InterfaceHourArea {
  hour: string;
}

const HourArea = ({ hour }: InterfaceHourArea) => {
  return (
    <div className={styled.body}>
      {hour}
    </div>
  )
};

export default HourArea;