import React, { useEffect, useState } from "react";
import WelcomeDashboard from "../components/dashboard/WelcomeDashBoard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      console.log("저장된 User 정보:", storedUser); // 디버깅용 로그

      if (!storedUser) {
        navigate("/login"); // 유저 정보가 없으면 로그인 페이지로 이동
      } else {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // 유저 정보 삭제
    navigate("/login"); // 로그인 페이지로 이동
  };

  if (!user) return <p>유저 정보를 불러오는 중...</p>; // user가 없을 때 안전한 렌더링

  return <WelcomeDashboard member={user} onLogout={handleLogout} />;
}

export default Dashboard;
