import styled from 'styled-components';

export const Item = styled.li`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? `#24a902` : `#ff2a00`)};
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  padding: 10px;
  background-color: #ffdada;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
`;
