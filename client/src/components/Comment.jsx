import React from 'react'
import styled from 'styled-components';
import AvatarImg from "../images/profile.png";

const Container = styled.div`
   display: flex;
   gap: 10px;
   margin: 30px 0; 
`;

const Avatar = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 50%;
`;

const Details = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   color: #fff;
`;

const Name = styled.span`
   font-size: 13px;
   font-weight: 500;
`;
const Date = styled.span`
   font-size: 12px;
   font-weight: 400;
   color: #757575;
   padding-left: 10px;
`;
const Text = styled.span`
   font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src={AvatarImg} />
        <Details>
            <Name>
                Devsantosh <Date>1 day ago</Date>
            </Name>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non fugiat asperiores deleniti unde aperiam tempore ut possimus dicta vel? Sequi quisquam, mollitia quod doloremque et commodi quidem fugit eius quasi.
            </Text>
        </Details>
    </Container>
  )
}

export default Comment