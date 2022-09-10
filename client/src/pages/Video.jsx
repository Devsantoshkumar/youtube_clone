import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ProfileImg from "../images/profile.png";
import Comments from '../components/Comments';
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

const Content = styled.div`
   flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
   font-size: 16px;
   font-weight: 500;
   margin-top: 10px;
   margin-bottom: 5px;
   color: #fff;
`;

const Details = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 14px;
`;
const Info = styled.span`
   color: #757575;
`;
const Buttons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 25px;
   color: #757575;
`;
const Button = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   cursor: pointer;
   font-size: 14px;
`;

const Recommendation = styled.div`
   flex: 2;
`;

const Hr = styled.span`
   display: block;
   margin: 15px 0px;
   border-bottom: 1px solid #757575;
`;

const Channel = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const Subscribe = styled.button`
   align-self: start;
   padding: 8px;
   color: #fff;
   background-color: red;
   border: none;
   outline: none;
   border-radius: 3px;
   cursor: pointer;
`;

const ChannelInfo = styled.div`
   display: flex;
`;

const Image = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
`;

const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    color: #757575;
`;

const ChannelName = styled.span`
    font-size: 14px;
    padding-bottom: 3px;
    font-weight: 500;
    color: #eee;
`;

const ChannelCounter = styled.span`
    font-size: 13px;
`;

const Description = styled.p`
    font-size: 14px;
    color: #eeee;
`;

const Video = () => {
  return (
    <Container>
        <Content>
           <VideoWrapper>
           <iframe width="100%" height="380" src="https://www.youtube.com/embed/yIaXoop8gl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </VideoWrapper>
           <Title>Test video for the day</Title>
           <Details>
              <Info>23,56,67 views Jun 22, 2022</Info>
              <Buttons>
                  <Button><ThumbUpOutlinedIcon style={{fontSize: '18px'}}/> 34,24</Button>
                  <Button><ThumbDownOffAltOutlinedIcon style={{fontSize: '18px'}}/> Dislike</Button>
                  <Button><ReplyOutlinedIcon style={{fontSize: '18px'}}/> Share</Button>
                  <Button><LibraryAddOutlinedIcon style={{fontSize: '18px'}}/> Save</Button>
              </Buttons>
           </Details>
           <Hr/>
           <Channel>
              <ChannelInfo>
                  <Image  src={ProfileImg}/>
                  <ChannelDetails>
                     <ChannelName>Devsantosh</ChannelName>
                     <ChannelCounter>235K subscribers</ChannelCounter>
                     <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias accusamus unde laboriosam ullam distinctio eum nam voluptatum non earum.
                     </Description>
                  </ChannelDetails>
              </ChannelInfo>
              <Subscribe>SUBSCRIBE</Subscribe>
           </Channel>
           <Hr/>
           <Comments />
        </Content>
        <Recommendation>
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
         <Card type="sm" />
        </Recommendation>
    </Container>
  )
}

export default Video