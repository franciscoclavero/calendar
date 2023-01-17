import { useDispatch } from "react-redux";
import { useAppSelector } from "src/redux/hooks/useAppSelector";
import { setThemeType } from "src/redux/reducers/themeReducer";
import styled from "./style.module.css";

const ToogleButton = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector(state => state.theme);
  
  const handleClick = () => {
    const newTheme = theme.type === "light" ? "dark" : 'light';

    dispatch( setThemeType(newTheme) );
  };

  return (
    <div className={styled.body} onClick={handleClick}>Toogle Button</div>
  )
};

export default ToogleButton;