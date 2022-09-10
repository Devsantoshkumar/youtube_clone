import React, { useEffect, useState } from "react";
import styled from "styled-components";
import videoImage from "../images/search-bar.png";
import channelImg from "../images/profile.png";
import { Link } from "react-router-dom";
// import { format } from "timeago.js";
import axios from "axios";

const Container = styled.div`
  width: 325px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "20px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;
const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "70%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "100px" : "190px")};
  background-color: #eee;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${(props) => props.type !== "sm" && "5px"};
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  align-self: start;
  border-radius: 50%;
  background-color: #4d4d4d;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div`
  padding-left: ${(props) => props.type === "sm" && "8px"};
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "12px" : "15px")};
  font-weight: 500;
  padding: 0;
  margin: 0;
  color: #fff;
`;

const ChannelName = styled.h2`
  font-size: 13px;
  margin: 2px 0px;
  color: #757575;
`;

const Info = styled.div`
  font-size: 12px;
  color: #757575;
  font-weight: 500;
`;

const Card = ({ type, video }) => {
   const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchUser();
  }, [video.userId]);

  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image type={type} src={videoImage} />
        <Details type={type}>
          <ChannelImage type={type} src={channelImg} />
          <Texts type={type}>
            <Title type={type}>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} Views {video.createdAt}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
