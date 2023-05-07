import styled from "styled-components";

export const ProfileWrapper = styled.div`
margin: 0 auto;

width:350px;
height:min-content;

background-color: rgb(238, 234, 234);

border-radius:10px;
`;

export const ProfileDescription = styled.div`
text-align:center;
padding-top:50px;
padding-bottom:10px;
`;

export const ProfileImg = styled.img`
width: 100px;
margin: 10px auto;
`;

export const ProfileTag = styled.p` 
color:rgb(141, 141, 141);
`;

export const ProfileLocation = styled.p` 
color:rgb(141, 141, 141);
`;

export const ProfileList = styled.ul`
list-style:none;
display:flex;

width:100%;
text-align:center;
justify-content:space-between;

margin:0;
padding:0px;
background-color: rgb(219, 223, 223);
`;

export const ProfileItem = styled.li`
display:flex;
flex-direction:column;
padding:15px;
width:33%;
border: 1px solid black;
`;

export const ProfileStatistics = styled.span`
color:rgb(141, 141, 141); 
`;

