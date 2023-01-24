import {
  ButtonDiv,
  CardOverViewContainer,
  CardsContainer,
  Container,
  MainBody,
  SummaryContainer,
  TitleDiv,
} from "./styles";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { ConnectModal } from "../../components/ConnectModal";
import axios from "axios";
import { OverallCard } from "../../components/OverallCard";
import { CardOverview } from "../../components/CardOverview";

export const Home = () => {
  const [accountIdList, setAccountIdList] = useState<any>();
  const [accountOverview, setAccountOverview] = useState<any>([]);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [apiData, setApiData] = useState<any>();

  const accessTokenId = localStorage.getItem("access_token");
  const path = `https://graph.facebook.com/v15.0/me?fields=adaccounts{name,amount_spent,business_name,insights{impressions,reach,campaign_id,spend},campaigns{status,daily_budget}}&filtering=[{'field':'status','operator':'IN','value':['ACTIVE']}]&access_token=${accessTokenId}`;

  const handleOpenConnectAccount = () => {
    setShowConnectModal(true);
  };

  const handleCloseConnectAccount = () => {
    setShowConnectModal(false);
  };

  const getAdAccountData = async (path: string) => {
    axios.get(path).then((response) => {
      const sortedArray = response.data.adaccounts.data.sort(
        (a: any, b: any) => b.amount_spent - a.amount_spent
      );
      const accountIdArray = sortedArray.map((item: any) => item.id);

      setAccountIdList(accountIdArray);
      setApiData(sortedArray);
      getAdAccountInsights(accountIdArray);
    });
  };

  const getAdAccountInsights = async (array: any) => {
    const overviewData: any = [];
    for (let id in array) {
      const url = `https://graph.facebook.com/v15.0/${array[id]}/insights?fields=impressions,reach,conversions,spend,website_purchase_roas&date_preset=last_year&access_token=${accessTokenId}`;
      await axios.get(url).then((response) => {
        if (response.data.data.length) {
          overviewData.push(response.data.data[0]);
        }
      });
    }
    console.log(overviewData.length);
    console.log(overviewData);

  };
  useEffect(() => {
    const fetchData = async () => {
      await getAdAccountData(path);
    };

    fetchData();
  }, []);
  // console.log(accountOverview)
  return (
    <>
      <Container>
        <SummaryContainer>
          <div>
            <label>Overview</label>
          </div>
          <CardOverViewContainer>
            <CardOverview />
          </CardOverViewContainer>
        </SummaryContainer>

        <MainBody>
          <ButtonDiv onClick={handleOpenConnectAccount}>
            <VscDebugDisconnect size={35} />
          </ButtonDiv>
          <TitleDiv>Painel de Clientes</TitleDiv>
          <CardsContainer>
            {apiData?.map((client: any) => (
              <OverallCard data={client} />
            ))}
          </CardsContainer>
          <ConnectModal
            show={showConnectModal}
            handleClose={handleCloseConnectAccount}
          />
        </MainBody>
      </Container>
    </>
  );
};
