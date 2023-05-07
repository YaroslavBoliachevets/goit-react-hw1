import styled from "styled-components";

export const TransactionTable = styled.table`
width:500px;
margin: 0 auto;
`;

export const TableTh = styled.th`
width:33%;
background-color:aqua;
padding: 0 45px;
`;

export const TableTr = styled.tr`
background-color:white;
:nth-child(2n) {
  background-color: rgb(238, 234, 234);
}
`;

export const TableTd = styled.td`
text-align:center;
`;