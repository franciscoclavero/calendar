import { headerTitle } from "../constans/headerTitle";
import HeaderCell from "../HeaderCell";
import styled from "./style.module.css";

const HeaderArea = () => {
  return (
    <div className={styled.body}>
      {
        headerTitle.map((item) => {
          return <HeaderCell title={item}/>
        })
      }
    </div>
  );
};

export default HeaderArea;