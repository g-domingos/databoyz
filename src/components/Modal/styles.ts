import styled from "styled-components";

export const ModalFrame = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background: #1c2f41 !important;

  input {
    color: gray;
    background: #040f1a;
    border: none;
    height: 35px;
    padding: 10px;
    border-radius: 4px;
  }
`;

export const ButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  background: #3294f8;
  height: 30px;
  width: 90px;
  border: none;
  border-radius: 8px;
`;

export const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  background: #afc2d4;
  height: 30px;
  width: 90px;
  border: none;
  border-radius: 8px;
`;
