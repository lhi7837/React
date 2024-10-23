import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/auth/SignUp";
import { login } from "../services/Member";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password); // 로그인 API 호출

      // 응답에 accessToken과 member 정보가 있는지 확인
      if (response.accessToken && response.member) {
        localStorage.setItem("user", JSON.stringify(response.member));
        localStorage.setItem("accessToken", response.accessToken);

        navigate("/dashboard"); // 대시보드로 이동
      } else {
        throw new Error("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 오류:", error); // 에러 로그 확인
      alert(error.message || "로그인 실패");
    }
  };

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  return (
    <Container>
      <LoginBox>
        <Logo src="/kworld.png" alt="Kworld Logo" />
        <form onSubmit={handleLogin}>
          <StyledInput
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">로그인</LoginButton>
          <SignUpButton type="button" onClick={toggleSignUp}>
            회원가입
          </SignUpButton>
        </form>
      </LoginBox>

      {isSignUpOpen && (
        <Overlay>
          <SignUp onClose={toggleSignUp} /> {/* SignUp 모듈 사용 */}
        </Overlay>
      )}
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: calc(100% - 24px);
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: calc(100% - 24px);
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background-color: #45a049;
  }
`;

const SignUpButton = styled.button`
  width: calc(100% - 24px);
  padding: 12px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background-color: #1e88e5;
  }
`;

const Overlay = styled.div`
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

const SignUpBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  width: calc(100% - 24px);
  padding: 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background-color: #e53935;
  }
`;
