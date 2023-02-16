import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import axios from 'axios';
import { allUsersRoute } from "../utils/APIRoutes";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
    getUser()
  }, []);


  const getUser = async () => {
    try{
        const response = await axios.get(allUsersRoute,{withCredentials: true});
        if(response.data.success){
          setUserName(response.data.user.username);
        }
    }catch(error){
        console.log('Error: ', error);
    }
}

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
