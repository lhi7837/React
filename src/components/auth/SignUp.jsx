import React from "react";
import styled from "styled-components";

function SignUp({ onClose }) {
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

  return (
    <SignUpBox>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>회원가입</h2>
      <StyledInput type="text" placeholder="이메일" />
      <StyledInput type="password" placeholder="비밀번호" />
      <StyledInput type="password" placeholder="비밀번호 확인" />
      <Row>
        <LargeInput type="text" placeholder="이름" />
        <SmallSelect>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </SmallSelect>
      </Row>
      <Row>
        <LargeInput type="text" placeholder="전공" />
        <SmallSelect>{generateYearOptions()}</SmallSelect>
      </Row>
      <SignUpButton onClick={() => alert("회원가입 완료!")}>
        회원가입
      </SignUpButton>
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
