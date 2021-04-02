import React from "react";
import styled from "styled-components";
import "../../Styles/Common.scss";
import SignupLine from "./components/SignupLine";

const NewSignup = () => {
  return (
    <SignupBack>
      <SignupTitle>
        <h1>회원가입</h1>
        <span>필수입력사항</span>
      </SignupTitle>
      <SignupLine />
    </SignupBack>
  );
};

const SignupBack = styled.div`
  width: 640px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto;
`;

const SignupTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 640px;
  h1 {
    color: #333;
    font-weight: 900;
    font-size: 3rem;
    margin: 10px 0 50px 0;
  }
  span {
    position: relative;
    top: 70px;
    left: 240px;
  }
  border-bottom: 2px solid #333;
`;

export default NewSignup;
