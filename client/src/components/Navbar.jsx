import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import loginImg from "../images/profile.png";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #202020;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  heihgt: 100%;
  padding: 0px 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
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

const Search = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: -2px;
  margin: auto;
  display: flex;
  background-color: #131313;
  width: 49%;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  color: #fff;
  background-color: transparent;
  font-size: 16px;
`;

const User = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   gap: 10px;
   color: #fff;
`;

const Avatar = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   cursor: pointer;
`;

const size = {
   width: '30px',
   height: '30px',
   cursor: 'pointer'
}

const Navbar = () => {
   
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search video" />
          <SearchIcon
            style={{
              color: "#fff",
              backgroundColor: "#4d4d4d",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "0 3px 3px 0",
            }}
          />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallIcon style={size}/>
            <Avatar src={loginImg} />
          </User>
        ) : (
          <Link to="signin">
            <Button>
              <AccountCircleOutlinedIcon /> SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
