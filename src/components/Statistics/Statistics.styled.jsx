import styled from "styled-components";

export const StatisticsWrapper = styled.section`
margin: 0 auto;
padding: 30px;
width:400px;
text-align:center;
`;

export const StatisticsList = styled.ul`
list-style:none;
display:flex;
width:100%;
padding:0px;

justify-content:center;
`;

export const StatisticsItem = styled.li`
width:25%;
padding:20px;
display:flex;
flex-direction:column;

background-color:${props => props.color};
`;

