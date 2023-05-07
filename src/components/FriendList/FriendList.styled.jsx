import styled from "styled-components";

export const FriendsList = styled.ul`
width:400px;
margin-left:auto;
margin-right:auto;
`;

export const FriendItem = styled.li`
margin: 10px auto;

display:flex;
background-color: aqua;
border-radius:8px;
`;

export const Status = styled.span`
display:block;
align-self:center;

width:16px;
height:16px;

margin-left:15px;

border-radius:50%;
background-color:${props => props.color};
`;

export const Avatar = styled.img`
width:50px;
margin-left:20px;
`;

export const Name = styled.p`
align-self:center;
margin-left:20px;
`;


