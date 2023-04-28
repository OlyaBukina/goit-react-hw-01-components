import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  background-color: #fff;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px 12px;
  background-color: #4398ab;
  color: #fff;
  text-align: center;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  color: #414141;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TdType = styled(Td)`
  text-transform: capitalize;
`;
