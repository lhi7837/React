import React, { useState } from "react";
import styled from "styled-components";
import { signup } from "../../services/Member"; // 회원가입 API 함수 import

function SignUp({ onClose }) {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    studentNumber: "",
    major: "",
  });

  // 학번 드롭다운 옵션 생성 (10학번 ~ 24학번)
  const generateYearOptions = () => {
    const years = [];
    for (let year = 10; year <= 24; year++) {
      years.push(
        <option key={year} value={year}>
          {year}학번
        </option>
      );
    }
    return years;
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  // 회원가입 버튼 클릭 시 API 호출
  const handleSignUp = async () => {
    try {
      const response = await signup(signupData); // API 호출
      alert("회원가입 성공!");
      console.log("회원가입 성공:", response);
      onClose(); // 모달 닫기
    } catch (error) {
      alert(error.message || "회원가입 실패");
    }
  };

  return (
    <SignUpBox>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Welcome to Kworld</h2>

      <StyledInput
        type="text"
        name="email"
        placeholder="이메일"
        value={signupData.email}
        onChange={handleChange}
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="비밀번호"
        value={signupData.password}
        onChange={handleChange}
      />
      <StyledInput
        type="password"
        name="confirmPassword"
        placeholder="비밀번호 확인"
        value={signupData.confirmPassword}
        onChange={handleChange}
      />
      <Row>
        <LargeInput
          type="text"
          name="name"
          placeholder="이름"
          value={signupData.name}
          onChange={handleChange}
        />
        <SmallSelect
          name="gender"
          value={signupData.gender}
          onChange={handleChange}
        >
          <option value="MALE">남자</option>
          <option value="FEMALE">여자</option>
        </SmallSelect>
      </Row>
      <Row>
        <LargeInput
          type="text"
          name="major"
          placeholder="전공"
          value={signupData.major}
          onChange={handleChange}
        />
        <SmallSelect
          name="studentNumber"
          value={signupData.studentNumber}
          onChange={handleChange}
        >
          {generateYearOptions()}
        </SmallSelect>
      </Row>
      <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
    </SignUpBox>
  );
}

export default SignUp;

const SignUpBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 420px;
  position: relative;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

const LargeInput = styled.input`
  flex: 2;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const SmallSelect = styled.select`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: visible;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
