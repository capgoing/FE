import * as H from "../../styles/header/header";
import { useEditMode } from "../../contexts/editModeContext";
import { useNavigate, useLocation } from "react-router-dom";
import Close from "../../assets/images/header/close.png";
import DarkClose from "../../assets/images/header/darkClose.png";

const Toggle = () => {
  const { isEditMode, setIsEditMode } = useEditMode();
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setIsEditMode((prev) => !prev);
  };

  const handleCloseClick = () => {
    navigate("/list");
  };

  return (
    <H.ToggleContainer>
      {!location.pathname.startsWith("/quiz") && (
        <H.ToggleBox onClick={handleToggle}>
          <H.LabelText>
            <H.Label>수정모드</H.Label>
            <H.Label>학습모드</H.Label>
          </H.LabelText>
          <H.ToggleButton active={!isEditMode}>
            {isEditMode ? "수정모드" : "학습모드"}
          </H.ToggleButton>
        </H.ToggleBox>
      )}

      <H.CloseImg
        src={isEditMode ? DarkClose : Close}
        alt="closeButton"
        onClick={handleCloseClick}
      />
    </H.ToggleContainer>
  );
};

export default Toggle;
