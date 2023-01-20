import { useEffect, useState } from "react";
import { ModalStyled } from "../Modal";
import { Container } from "./styles";

export const ConnectModal = ({ show, handleClose, children }: any) => {
  const [accessToken, setAccessToken] = useState("");
  const [storedAccessToken, setStoredAccessToken] = useState<any>();

  useEffect(() => {
    setStoredAccessToken(localStorage.getItem("access_token"))    
  }, []);

  const getInputValue = (e: any) => {
    setAccessToken(e.target.value);
  };
  const handleSave = () => {
    localStorage.setItem("access_token", accessToken);
  };
  return (
    <ModalStyled
      show={show}
      handleClose={handleClose}
      handleConfirm={handleSave}
    >
      <Container>
        <div>
          <label>Access Token FacebookAds</label>
          <input
            onChange={() => getInputValue(event)}
            value={storedAccessToken}
          ></input>
        </div>
      </Container>
    </ModalStyled>
  );
};
