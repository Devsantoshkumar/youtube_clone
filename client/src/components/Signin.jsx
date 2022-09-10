import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginfailure, loginStart, loginSuccess } from '../redux/userSlice';
import {auth, provider} from "../firebase";
import { signInWithPopup } from 'firebase/auth';

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100vh - 56px);
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: #202020;
   padding: 10px 50px;
   padding-bottom: 20px;
   border: 1px solid #4d4d4d;
   gap: 10px;
`;

const Title = styled.h1`
   font-size: 24px;
   margin: 10px;
   color: #eee;
`;

const SubTitle = styled.h2`
   font-size: 18px;
   font-weight: 400;
   margin: 0;
   margin-bottom: 10px;
   color: #4d4d4d;
`;

const Input = styled.input`
   border: 1px solid #4d4d4d;
   outline: none;
   border-radius: 3px;
   padding: 10px;
   background-color: transparent;
   width: 100%;
   color: #fff;
`;

const Button = styled.button`
   border-radius: 3px;
   border: none;
   font-weight: 600;
   font-size: 16px;
   cursor: pointer;
   padding: 10px 40px;
   background-color: #4d4d4d;
`;


const Signin = () => {
   const [name, setUsername] = useState("")
   // const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const dispatch = useDispatch()
   
   const handleLogin = async(e) =>{
      e.preventDefault()
      dispatch(loginStart())
      try {
         const res = await axios.post("/auth/signin", {name,password})
         dispatch(loginSuccess(res.data))
      } catch (error) {
         dispatch(loginfailure()) 
      }
   }

   const signinWithGoogle = async() =>{
      dispatch(loginStart())
      signInWithPopup(auth,provider).then((result)=>{
         axios.post("/auth/google", {
            name:result.user.displayName,
            email:result.user.email,
            img:result.user.photoURL,
         }).then((res)=>{
            dispatch(loginSuccess(res.data))
         })
      }).catch((error)=>{ 
         dispatch(loginfailure())
      })
   }
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to DevTube</SubTitle>
            <Input name="name" placeholder='username' onChange={e=>setUsername(e.target.value)} />
            <Input name="password" type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
            <Button onClick={handleLogin}>Sign in</Button>
            <Button onClick={signinWithGoogle}>Signin with Google</Button>
            <Title>or</Title>
            <Input placeholder='username' onChange={e=>setUsername(e.target.value)}/>
            <Input placeholder='email'/>
            <Input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
            <Button>Sign up</Button>
        </Wrapper>
    </Container>
  )
}

export default Signin