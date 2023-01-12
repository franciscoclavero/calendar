import HeaderArea from "src/components/HeaderArea";
import ContentArea from "../ContentArea";

import styled from "./style.module.css";

const BodyCalendar = () => {
  return (
    <div className={styled.body}>
      <HeaderArea />
      <ContentArea />
    </div>
  );
};

export default BodyCalendar;