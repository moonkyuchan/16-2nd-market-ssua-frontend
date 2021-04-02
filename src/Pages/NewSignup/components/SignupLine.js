import React from "react";
import styled from "styled-components";
import "../../../Styles/Common.scss";

const SignupLine = () => {
  return (
    <SignupLineBack>
      <SignupName>아이디</SignupName>
      <SignupInput placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
      <SignupButton>중복확인</SignupButton>
    </SignupLineBack>
  );
};

const SignupLineBack = styled.div`
  display: flex;
  align-items: center;
  width: 640px;
  padding: 0 30px;
  margin-top: 20px;
`;

const SignupName = styled.div`
  width: 20%;
  font-size: 1.4rem;
  font-weight: 700;
`;

const SignupInput = styled.input`
  width: 60%;
  height: 42px;
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 4.5px;
  ::placeholder {
    color: #dedede;
  }
`;

const SignupButton = styled.button`
  width: 20%;
  height: 42px;
  border: 1px solid #5f0280;
  border-radius: 4.5px;
  color: #5f0280;
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 40px;
`;

export default SignupLine;
