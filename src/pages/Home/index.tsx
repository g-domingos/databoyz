import { ButtonDiv, CardsContainer, Container, MainBody, TitleDiv } from "./styles";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { ConnectModal } from "../../components/ConnectModal";
import axios from "axios"
import { OverallCard } from "../../components/OverallCard";

export const Home = () => {
  const [accessToken, setAccessToken] = useState("");
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [apiData, setApiData] = useState<any>()

  const accessTokenId = localStorage.getItem("access_token")
  const path = `https://graph.facebook.com/v15.0/me?fields=adaccounts{name,amount_spent,business_name,insights{impressions,campaign_id,spend},campaigns{status,daily_budget}}&access_token=${accessTokenId}`

  const handleOpenConnectAccount = () => {
    setShowConnectModal(true);
  };

  const handleCloseConnectAccount = () => {
    setShowConnectModal(false);
  };

  const requestAPI = (path: string) => {
    axios.get(path).then((response) => setApiData(response.data))
  }

  useEffect(() => {
    requestAPI(path)
  },[])

  return (
    <>
      <Container>
        <MainBody>
          <ButtonDiv onClick={handleOpenConnectAccount}>
            <VscDebugDisconnect size={35} />
          </ButtonDiv>
          <TitleDiv>
            Painel de Clientes
          </TitleDiv>
          <CardsContainer>
            {apiData?.adaccounts?.data.map((client: any) => <OverallCard data={client}/>)}
          </CardsContainer>
          <ConnectModal show={showConnectModal} handleClose={handleCloseConnectAccount}/>
        </MainBody>
      </Container>
    </>
  );
};
