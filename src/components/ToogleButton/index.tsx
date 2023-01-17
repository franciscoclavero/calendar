import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { setThemeType } from "../../redux/reducers/themeReducer";
import styled from "./style.module.css";

const ToogleButton = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector(state => state.theme);

  const buttonText = (theme.type === "light") ? "dark" : 'light';
  
  const handleClick = () => {
    const newTheme = (theme.type === "light") ? "dark" : 'light';

    dispatch( setThemeType(newTheme) );
  };

  return (
    <div className={styled.body} onClick={handleClick}>Theme {buttonText}</div>
  )
};

export default ToogleButton;