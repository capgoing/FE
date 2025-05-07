import * as s from "../../../styles/list/list";
import Delete from "../../../assets/images/list/delete.png";
import { useState } from "react";
import usePost from "../../../hooks/usePost";

const Modal = ({ onClose }) => {
    const [projectName, setProjectName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const { post, loading } = usePost("/upload");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!selectedFile || !projectName) {
            alert("파일 선택과 제목 입력을 해주세요.");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("title", projectName);
    
        // for (const pair of formData.entries()) {
        //     console.log(pair[0], pair[1]);
        // }

        try {
            const response = await post(formData);
            alert("업로드 되었습니다.");
            console.log(response);
            onClose();
            window.location.reload();
        } catch (err) {
            alert("업로드를 실패하였습니다.");
        }
    };
      

    return (
        <s.Overlay>
            <s.ModalContainer>
                <s.CloseContainer>
                    <s.CloseButton onClick={onClose}><s.CloseImg src={Delete} alt="delete" /></s.CloseButton>
                </s.CloseContainer>

                <s.InnerForm onSubmit={handleSubmit}>
                    <s.ModalP>파일 추가</s.ModalP>
                    <s.ModalBar />

                    <s.FileContainer>
                        <s.FileName type="text" value={selectedFile ? selectedFile.name : "선택된 파일이 없습니다."} readOnly />
                        <s.FileLabel htmlFor="file-upload">파일 선택</s.FileLabel>
                    </s.FileContainer>
                    <s.FileInput type="file" id="file-upload" onChange={handleFileChange} />

                    <s.TextInput id="title" type="text" placeholder="자료 제목을 입력하세요." value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            
                    <s.AddButton type="submit" disabled={loading}>
                        {loading ? "업로드 중..." : "추가하기"}
                    </s.AddButton>
                </s.InnerForm>
            </s.ModalContainer>
        </s.Overlay>
    )
}

export default Modal;