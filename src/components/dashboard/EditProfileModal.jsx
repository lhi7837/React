import React, { useState } from "react";
import styled from "styled-components";
import api from "../../services/Api";

function EditProfileModal({ member, onClose }) {
  const [formData, setFormData] = useState({
    name: member.name || "",
    profileImage: member.profileImage || "",
    gender: member.gender || "MALE",
    studentNumber: member.studentNumber || "",
    major: member.major || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await api.put("/mypage", formData);
      alert("프로필이 업데이트되었습니다.");
      onClose();
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
      alert("프로필 업데이트 실패!");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>프로필 편집</h2>
        <Form>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>프로필 이미지 URL</label>
          <input
            type="text"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
          />
          <label>성별</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="MALE">남자</option>
            <option value="FEMALE">여자</option>
          </select>
          <label>학번</label>
          <input
            type="text"
            name="studentNumber"
            value={formData.studentNumber}
            onChange={handleChange}
          />
          <label>전공</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
          />
        </Form>
        <ButtonGroup>
          <button onClick={handleSave}>저장</button>
          <button onClick={onClose}>닫기</button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}

export default EditProfileModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  input,
  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
