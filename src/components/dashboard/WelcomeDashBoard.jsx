import React from "react";
import styled from "styled-components";

function WelcomeDashboard({ member, onLogout }) {
  if (!member) {
    return <p>유저 정보를 불러오는 중...</p>;
  }

  return (
    <Container>
      <DashboardContainer>
        <ProfileSection>
          <Avatar src="/miniroom1.gif" alt="User Avatar" />
          <WelcomeMessage>{member.name}님 반갑습니다!</WelcomeMessage>
        </ProfileSection>

        <ButtonGroup>
          <Button>프로필 편집</Button>
          <Button>도토리 충전 🌰</Button>
          <Button>파도타기 🌊</Button>
          <Button>내 미니홈피 바로가기 🏠</Button>
          <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
        </ButtonGroup>
      </DashboardContainer>
    </Container>
  );
}

export default WelcomeDashboard;

// 부모 컨테이너: 화면 중앙에 배치
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 화면 전체 높이를 차지 */
  background-color: #f7f7f7; /* 배경 색상 */
`;

// 대시보드 컨테이너 스타일
const DashboardContainer = styled.div`
  background-color: #e8f4fa;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const WelcomeMessage = styled.h2`
  margin-top: 10px;
  font-size: 24px;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

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
