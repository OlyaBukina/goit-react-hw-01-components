import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  color: #7e7e7e;
`;

export const Discription = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  border: 1px solid #c8c8c8;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #fcead4;
  width: 80px;
  height: 80px;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #e3f2e4;
  border-radius: 0 0 10px 10px;
  border: 1px solid #a2aca3;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 15px;
  align-items: center;

  &:nth-child(2) {
    border: 1px solid #a2aca3;
    border-bottom: none;
    border-top: none;
  }
`;

export const StatsValue = styled.span`
  font-weight: 500;
  color: #000000;
`;
