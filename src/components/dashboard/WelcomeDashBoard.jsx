import React, { useState } from "react";
import styled from "styled-components";
import EditProfileModal from "./EditProfileModal";

function WelcomeDashboard({ member, onLogout }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  return (
    <DashboardContainer>
      <Card>
        <Header>
          <Logo src="/kworld.png" alt="Kworld Logo" />
          <WelcomeMessage>{member.name}님 반갑습니다!</WelcomeMessage>
        </Header>

        <Content>
          <LeftSection>
            <Avatar src={member.profileImage || "/1.png"} alt="User Avatar" />
            <MiniHomeButton>내 미니홈피 바로가기 🏠</MiniHomeButton>
          </LeftSection>

          <RightSection>
            <Button onClick={handleEditOpen}>프로필 편집 ✏️</Button>
            <Button>도토리 충전 🌰</Button>
            <Button>파도타기 🌊</Button>
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
          </RightSection>
        </Content>

        {isEditOpen && (
          <EditProfileModal member={member} onClose={handleEditClose} />
        )}
      </Card>
    </DashboardContainer>
  );
}

export default WelcomeDashboard;

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8; /* 더 부드러운 배경색 */
`;

const Card = styled.div`
  background-color: #ffffff; /* 카드 배경을 흰색으로 변경 */
  border: 2px solid #b0c4de; /* 경계선 색상을 약간 더 진하게 */
  border-radius: 16px;
  width: 600px;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 0 8px rgba(0, 0, 0, 0.05); /* 외부와 내부 그림자 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 100%; /* 로고 크기 조정 */
  height: auto;
  margin-bottom: 8px;
`;

const WelcomeMessage = styled.h2`
  font-size: 35px;
  font-weight: bold;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  gap: 16px; /* 좌우 섹션 간격 */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1; /* 왼쪽 섹션 크기 */
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #a4c3da;
`;

const MiniHomeButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: 75%;

  &:hover {
    background-color: #45a049;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1; /* 오른쪽 섹션 크기 */
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  width: 80%;

  &:hover {
    background-color: #45a049;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
`;
