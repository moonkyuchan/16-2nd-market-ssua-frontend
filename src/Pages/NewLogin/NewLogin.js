import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LoginBack = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 25px 0 25px 0;
`;

const IdInput = styled.input`
  width: 328px;
  height: 52px;
  padding: 0 19px;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin: 5px 0;
  :hover {
    border: 1px solid black;
  }
  &::placeholder {
    color: gray;
  }
`;

const PwInput = styled.input`
  width: 328px;
  height: 52px;
  padding: 0 19px;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin: 5px 0;
  :hover {
    border: 1px solid black;
  }
`;

const Contents = styled.div`
  width: 328px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const CheckWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const FindWrap = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
    margin-left: 5px;
  }
`;

const LoginButton = styled.button`
  width: 338px;
  height: 52px;
  border: 1px solid #5f0280;
  border-radius: 4px;
  background-color: #5f0280;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;
`;

const SignupButton = styled.button`
  width: 338px;
  height: 52px;
  border: 1px solid #5f0280;
  border-radius: 4px;
  background-color: #ffffff;
  color: #5f0280;
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;
`;

const NewLogin = () => {
  const [IdValue, setIdValue] = useState("");
  const [PwValue, setPwValue] = useState("");

  const onChangeId = (e) => {
    setIdValue(e.target.value);
  };

  const onChangePw = (e) => {
    setPwValue(e.target.value);
  };

  const history = useHistory();

  const onClickSignup = () => {
    history.push("/signup");
  };

  useEffect(() => {
    console.log({ IdValue, PwValue });
  });

  return (
    <>
      <LoginBack>
        <Title>로그인</Title>
        <IdInput placeholder="아이디를 입력하시오." onChange={onChangeId} />
        <PwInput
          placeholder="비밀번호를 입력하시오."
          type="password"
          onChange={onChangePw}
        />
        <Contents>
          <CheckWrap>
            <input type="checkbox" />
            <p>보안 접속</p>
          </CheckWrap>
          <FindWrap>
            <p>아이디 찾기</p>
            <p>비밀번호 찾기</p>
          </FindWrap>
        </Contents>
        <LoginButton>로그인</LoginButton>
        <SignupButton onClick={onClickSignup}>회원가입</SignupButton>
      </LoginBack>
    </>
  );
};

export default NewLogin;
