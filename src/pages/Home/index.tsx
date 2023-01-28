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
import { Spinner } from "../../components/Spinner";
import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  const [accountIdList, setAccountIdList] = useState<any>();
  const [accountOverview, setAccountOverview] = useState<any>([]);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [apiData, setApiData] = useState<any>();
  const [summaryValues, setSummaryValues] = useState<any>();
  const [processing, setProcessing] = useState(true);

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
    setProcessing(true);
    const overviewData: any = [];
    for (let id in array) {
      const url = `https://graph.facebook.com/v15.0/${array[id]}/insights?fields=impressions,reach,conversions,spend,website_purchase_roas&date_preset=last_year&access_token=${accessTokenId}`;
      await axios.get(url).then((response) => {
        overviewData.push(response.data.data[0]);
      });
    }

    setAccountOverview(overviewData);
    getSummaryValues(
      overviewData.filter((item: any) => item?.hasOwnProperty("impressions"))
    );
    setProcessing(false);
  };

  const getSummaryValues = (arrayData: any) => {
    const impressions = arrayData?.reduce((acc: number, currentValue: any) => {
      return (acc += Number(currentValue?.impressions));
    }, 0);

    const reach = arrayData?.reduce((acc: number, currentValue: any) => {
      return (acc += Number(currentValue?.reach));
    }, 0);

    const spend = arrayData?.reduce((acc: number, currentValue: any) => {
      return (acc += Number(currentValue?.spend));
    }, 0);
    setSummaryValues(Object.assign({}, { spend, reach, impressions }));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAdAccountData(path);
    };

    fetchData();
  }, [showConnectModal]);

  return (
    <>
      <Container>
        <SummaryContainer>
          <div>
            <label>Overview</label>
          </div>
          <CardOverViewContainer>
            {!processing ? (
              <>
                <CardOverview
                  label={"Total Investido"}
                  value={summaryValues?.spend}
                  isCurrency
                />
                <CardOverview
                  label={"Contas Administadas"}
                  value={accountOverview.length}
                />
                <CardOverview
                  label={"Impressões"}
                  value={summaryValues?.impressions}
                />
                <CardOverview label={"Alcance"} value={summaryValues?.reach} />
              </>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </CardOverViewContainer>
        </SummaryContainer>

        <MainBody>
          <ButtonDiv onClick={handleOpenConnectAccount}> 
            <VscDebugDisconnect size={35} />
          </ButtonDiv>
          <TitleDiv>Painel de Clientes</TitleDiv>
          <CardsContainer>
            {apiData?.map((client: any, index: number) => (
              <NavLink
                to={"/accounts/" + client.id}
                style={{ textDecoration: "none" }}
                state={{"client" : client.name + " - " + client.business_name}}
              >
                <OverallCard data={client} key={index} />
              </NavLink>
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
