import styled from "styled-components";
import colors from "../common/colors";

// quiz.jsx
export const QuizContainer = styled.div`
  width: 100%;
  margin-top: 4.9vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizP = styled.p`
  font-size: 1.8vw;
  font-weight: 700;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";
`;

export const ListQuizContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.75vw;
  width: 100%;
  margin-top: 4.5vw;
`;

export const ItemQuizContainer = styled.div`
  width: 20.7vw;
  height: 25.2vw;
  border-radius: 2.5vw;
  box-shadow: 0.25vw 0.2vw 0.59vw rgba(0, 0, 0, 0.25),
    0.15vw 0.4vw 0.5vw rgba(254, 143, 0, 0.2);
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ItemQuizP = styled.p`
  font-size: 2vw;
  font-weight: 700;
  color: ${colors.brown};
  margin-top: 3vw;
  font-family: "Ownglyph_meetme-Rg";
`;

export const ItemQuizP2 = styled(ItemQuizP)`
  font-size: 1.25vw;
  font-weight: 400;
  color: ${colors.gray3};
  text-align: center;
  width: 80%;
  margin-top: 1vw;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ItemQuizImg = styled.img`
  width: 11.75vw;
  height: 11.75vw;
  margin-top: 2vw;
`;

export const ItemQuizImg2 = styled.img`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: -1vw;
  left: 10vw;
`;

// 인서 안 씀
export const ButtonContainer = styled.div`
  display: flex;
  gap: 3vw;
`;

export const StageButton = styled.button`
  width: 10vw;
  height: 5vw;
  border-radius: 2.5vw;
  background: ${colors.white};
  font-family: "Ownglyph_meetme-Rg";
  font-size: 2vw;
  font-weight: 400;
  color: ${colors.brown};
`;

// modal.jsx
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  min-height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.2vw 5vw 1.75vw 5vw;
  background: ${colors.white};
  border-radius: 2vw;
`;

export const ModalP = styled.p`
  font-size: 2vw;
  font-weight: 400;
  color: ${colors.black};
  font-family: "Ownglyph_meetme-Rg";
`;

export const ModalImg = styled.img`
  width: 7.3vw;
  height: 7.1vw;
  margin: 1.25vw 0 2vw 0;
`;

export const ModalP2 = styled(ModalP)`
  font-size: 1.5vw;
  color: ${colors.gray4};
  font-weight: 400;
  font-family: "Ownglyph_meetme-Rg";
  line-height: 175%;
  text-align: center;
  margin-bottom: 2vw;
  white-space: pre-line;
`;

export const CloseButton = styled.button`
  width: 6.5vw;
  height: 3vw;

  border-radius: 1.7vw;
  background: ${colors.orange};
  font-size: 1.5vw;
  font-weight: 400;
  color: ${colors.white};
  font-family: "Ownglyph_meetme-Rg";
  margin-bottom: 1vw;
`;

// result.jsx
export const ResultContainer = styled.div`
  position: relative;
  width: 100%;
  height: 33.5vw;
  border-radius: 3vw;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vw 0 3vh 0;
`;

export const InnerResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
`;

export const ResultP = styled.p`
  font-size: 3.5vw;
  font-weight: 400;
  color: ${colors.brown};
  font-family: "Ownglyph_meetme-Rg";
  text-align: center;
`;

export const ResultButtonContainer = styled.div`
  display: flex;
  gap: 3vw;
`;

export const ResultButton = styled.button`
  width: 15.7vw;
  height: 5vw;
  border-radius: 2.5vw;
  outline: 0.2vw solid ${colors.orange2};
  background: ${colors.white};
  font-size: 2vw;
  font-weight: 400;
  color: ${colors.orange2};
  font-family: "Ownglyph_meetme-Rg";
`;

// qna.jsx
export const QnaMainContainer = styled.div`
  width: 100%;
  height: 33.5vw;
  margin: 2vw 0 3vh 0;
`;
export const QuizCount = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.brown};
  font-size: 3.5vw;
  font-family: "Ownglyph_meetme-Rg";
`;

export const QnaBottomContainer = styled.div`
  width: ${(props) => (props.$mode === "picture" ? "60%" : "100%")};
  height: ${(props) => (props.$mode === "picture" ? "100%" : "6vw")};
  background-color: ${colors.white};
  border-radius: 3vw;
  margin-top: 2.5vh;
  padding: 1vw 3vw;
  display: flex;
  justify-content: space-around;
  gap: 2vw;
  margin-left: ${({ $mode }) => ($mode === "picture" ? "20%" : null)};
  max-height: 25vw; /* 원하는 최대 높이로 조정 */
  overflow-y: auto;
`;

export const AswerOptionItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: ${({ $mode }) => ($mode === "picture" ? "column" : "row")};
  align-items: ${({ $mode }) =>
    $mode === "picture" ? "center" : "flex-start"};
  gap: 2vw;
`;

export const DraaggableItem = styled.div`
  width: auto;
  height: 100%;
  border-radius: 50px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 1.5vw;
  padding: 1.2vw;
  cursor: grabbing;
`;

export const DropItemContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${colors.white};
  border-radius: 2vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: ${({ mode }) => (mode === "hard" ? "column" : "row")};
  justify-content: center;
  align-items: center;
  padding: 0 3vw;
  gap: 2vw;
`;

export const DropItem = styled.div`
  min-width: 8vw;
  border-radius: 50px;
  border: 3px solid ${colors.orange2};

  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 1.5vw;
  padding: 1.2vw;
  cursor: pointer;
`;

// ListenUp.jsx
export const QnaModeLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const QnaQuestionContainer = styled.div`
  width: 100%;
  height: ${({ $height }) => $height || "60%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const QuestionText = styled.div`
  color: ${colors.brown};
  font-size: 3.5rem;
  font-family: "Ownglyph_meetme-Rg";
`;

export const ListenupImg = styled.img`
  width: 10.2vw;
  height: 10.2vw;
  margin-top: 2vw;
`;

export const ListenAgainButton = styled.button`
  color: ${colors.brown};
  font-size: 3rem;
  font-family: "Ownglyph_meetme-Rg";
`;

export const ConfirmButton = styled.button`
  width: 6.5vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 1.7vw;
  background: ${colors.orange};
  font-size: 1.5vw;
  font-weight: 400;
  color: ${colors.white};
  font-family: "Ownglyph_meetme-Rg";
`;

// Connect.jsx
export const ConnectQuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const GraphContainer = styled.div`
  width: 50vw;
  height: 30vw;
  margin-top: 2vw;
`;

export const OptionItem = styled.div`
  cursor: pointer;
  width: auto;
  height: 100%;
  border-radius: 50px;
  background: ${({ $isSelected }) => ($isSelected ? "#FE8F00" : "#f0f0f0")};
  color: ${({ $isSelected }) => ($isSelected ? "#ffffff" : "#000000")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ownglyph_meetme-Rg";
  font-size: 1.5vw;
  padding: 1.2vw;
`;

// Picture.jsx
export const PictureImg = styled.img`
  width: 20.2vw;
  height: 20.2vw;
  margin-top: 2vw;
`;
export const PictureContainer = styled.div`
  width: 100%;
  margin-top: 5vw;
  display: flex;
`;

// Loading.jsx
export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
