import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
`;

export const List = styled.ul`
  display: flex;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 20px;
`;

export const Item = styled.li`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px 20px;
  color: #fff;
  background-color: ${props => props.backgroundColor};
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
