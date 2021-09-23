// import React from "react";
// @ts-ignore
import styled from "styled-components";
import useStore from "../store";
import LoginErrorModal from "./LogInErrorModal";
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: rgb(173, 216, 230, 0.5);
  z-index: 1000;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }
`;

export default function ModalContainer() {
  // @ts-ignore
  const modal = useStore((store) => store.modal);
  if (modal === "") {
    return null;
  }
  return (
    <StyledContainer>
      <div className="modal">
        {modal === "logIn" ? <LogInModal /> : null}
        {modal === "signUp" ? <SignUpModal /> : null}
        {modal === "loginError" ? <LoginErrorModal /> : null}
      </div>
    </StyledContainer>
  );
}
