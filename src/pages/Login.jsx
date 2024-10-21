import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("로그인 성공!");
  };

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <img
        src="/logo.webp"
        alt="Kworld Logo"
        style={{ width: "150px", height: "auto", marginBottom: "20px" }}
      />

      <form
        onSubmit={handleLogin}
        style={{ textAlign: "center", width: "100%", maxWidth: "400px" }}
      >
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "80%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "80%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          로그인
        </button>

        <button
          type="button"
          onClick={toggleSignUp}
          style={{
            width: "80%",
            padding: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          회원가입
        </button>
      </form>

      {isSignUpOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              textAlign: "center",
            }}
          >
            <h2>회원가입</h2>
            <input
              type="text"
              placeholder="이메일"
              style={{
                width: "80%",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="비밀번호"
              style={{
                width: "80%",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              style={{
                width: "80%",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              style={{
                width: "80%",
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              onClick={() => alert("회원가입 완료!")}
            >
              회원가입
            </button>

            <button
              onClick={toggleSignUp}
              style={{
                width: "80%",
                padding: "10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
