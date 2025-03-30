import styled from "styled-components";
import colors from "../common/colors";

// list.jsx
export const ListContainer = styled.div`
    width: 75.6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// notList.jsx
export const NotListP = styled.p`
    font-size: 2vw;
    font-weight: 400;
    color: ${colors.black};
    font-family: 'Ownglyph_meetme-Rg';
    text-align: center;
    margin-top: 19.5vw;
`

// list-work.jsx
export const ListWorkContainer = styled.div`
    width: 95%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4vw;
    gap: 2vw;
`;

// item-work.jsx
export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

export const InnerItemContainer = styled.div`
    width: 100%;
    height: 12.85vw;
    padding: 1vw;
    background: ${colors.white};
    border-radius: 1.25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const QuizP = styled.p`
    font-size: 1.5vw;
    font-family: "Ownglyph_meetme-Rg";
    color: ${colors.green};
`

export const DeleteButton = styled.button`
    width: 1.8vw;
    height: 1.8vw;
    background: ${colors.green};
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DeleteImg = styled.img`
    width: 0.7vw;
    height: 0.7vw;
`

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 1vw;
`

export const BottomButton = styled.button`
    padding: 0.4vw 1vw;
    background: ${colors.gray};
    font-size: 1vw;
    color: ${colors.black};
    font-weight: 400;
    font-family: 'Ownglyph_meetme-Rg';
    border-radius: 0.5vw;
`

export const ItemP = styled.p`
    font-size: 1.5vw;
    font-weight: 400;
    font-family: 'Ownglyph_meetme-Rg';
    color: ${colors.black};
    margin-bottom: 2vw;
`

// modal.jsx
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.28);
    z-index: 998;
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    height: 30vw;
    background: ${colors.white};
    border-radius: 1.5vw;
    padding: 2vw;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CloseContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`

export const CloseButton = styled.button`
    width: 1.8vw;
    height: 1.8vw;
    background: ${colors.green};
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseImg = styled.img`
    width: 0.7vw;
    height: 0.7vw;
`

export const InnerForm = styled.form`
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ModalP = styled.p`
    font-size: 1.5vw;
    font-weight: 400;
    color: ${colors.black};
    font-family: 'Ownglyph_meetme-Rg';
`

export const ModalBar = styled.hr`
    width: 100%;
    border-top: 0.15vw dashed ${colors.green};
    margin: 3vw 0;
`

export const FileContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25vw;
`

export const FileInput = styled.input`
    display: none;
`;

export const FileLabel = styled.label`
    border: 0.1vw solid ${colors.green};
    color: ${colors.green};
    padding: 0.8vw 1.15vw;
    border-radius: 1.5vw;
    font-size: 1.2vw;
    font-weight: 400;
    cursor: pointer;
    font-family: 'Ownglyph_meetme-Rg';
`;

export const TextInput = styled.input`
    width: 100%;
    height: 3vw;
    padding: 0.8vw 1vw;
    box-sizing: border-box;
    font-size: 1vw;
    border-radius: 0.5vw;
    background: ${colors.gray2};
    font-family: 'Ownglyph_meetme-Rg';
    font-size: 1.2vw;
    font-weight: 400;
    color: ${colors.black};

    &::placeholder {
        color: ${colors.black};
    }
`;

export const FileName = styled(TextInput)`
    width: 22.5vw;
`;

export const AddButton = styled.button`
    width: 20vw;
    height: 3.2vw;
    border-radius: 1.6vw;
    background: ${colors.green};
    color: ${colors.white};
    font-size: 1.2vw;
    font-weight: 400;
    font-family: 'Ownglyph_meetme-Rg';
    margin-top: 5.8vw;
`