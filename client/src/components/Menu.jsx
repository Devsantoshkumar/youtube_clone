import React from "react";
import styled from "styled-components";
import TubeLogo from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 1.5;
  background-color: #202020;
  height: 100vh;
  color: #ffff;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  color: #eeee;
  font-size: 14px;

  &:hover {
    background-color: #131313;
  }
`;

const Hr = styled.span`
  display: block;
  margin: 15px 0px;
  border-bottom: 0.1px solid #4d4d4d;
`;

const Login = styled.div`
  font-size: 14px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = () => {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <Img src={TubeLogo} alt="" />
            DevTube
          </Logo>
        </Link>
        <Link to="/">
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Link to="trend">
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link to="subscriptions">
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscription
          </Item>
        </Link>
        <Hr></Hr>
        { !currentUser &&
          <>
            <Login>
              <Link to="signin">
                <Button>
                  <AccountCircleOutlinedIcon /> SIGN IN
                </Button>
              </Link>
            </Login>
            <Hr></Hr>{" "}
          </>
        }
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr></Hr>
        <Item>
          <AccessTimeIcon />
          Watch Letter
        </Item>
        <Item>
          <LightbulbOutlinedIcon />
          Learning
        </Item>
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Hr></Hr>
        <Item>
          <ContentCutOutlinedIcon />
          Clips
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <PodcastsOutlinedIcon />
          Live
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
