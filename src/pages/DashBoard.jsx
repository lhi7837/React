import React, { useEffect, useState } from "react";
import WelcomeDashboard from "../components/dashboard/WelcomeDashBoard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  // 로그인 후 저장된 유저 정보를 가져옴
  useEffect(() => {
    const loggedInMember = JSON.parse(localStorage.getItem("user"));
    if (!loggedInMember) {
      navigate("/login"); // 로그인 안 된 경우 로그인 페이지로 리다이렉트
    } else {
      setMember(loggedInMember);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // 유저 정보 삭제
    navigate("/login");
  };

  if (!member) return null; // 유저 정보가 없을 때 아무것도 렌더링하지 않음

  return <WelcomeDashboard member={member} onLogout={handleLogout} />;
}

export default Dashboard;
