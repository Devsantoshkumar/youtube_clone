import React from 'react'
import styled from "styled-components";
import CommmentImg from "../images/profile.png";
import Comment from "../components/Comment";

const Container = styled.div`
   
`;

const NewComment = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`;

const Avatar = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 50%;
`;

const Input = styled.input`
   padding: 10px;
   background-color: transparent;
   outline: none;
   border: none;
   border-bottom: 1px solid #757575;
   width: 100%;
   color: #ffff;
`;

const CommentTitle = styled.div`
    color: #fff;
    font-size: 15px;
    padding-bottom: 10px;
`;




const Comments = () => {
  return (
    <Container>
         <CommentTitle>5483 Comments</CommentTitle>
         <NewComment>
            <Avatar src={CommmentImg} />
            <Input placeholder='Add a comment...' />
         </NewComment>
         <Comment />
         <Comment />
         <Comment />
         <Comment />
    </Container>
  )
}

export default Comments