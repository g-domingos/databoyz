import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Chart } from "../../components/Chart";
import {
  ChartsDiv,
  Container,
  MainBody,
  OverviewBar,
  Table,
  TableContainer,
  Unavailable,
} from "./styles";
import { priceFormatter } from "../../utils";
import { LineChart } from "../../components/LineChart";
import { ButtonDate } from "../../components/ButtonDate";
import { arrayBuffer } from "stream/consumers";

export const Dashboard = () => {
  const location = useLocation();
  const params = useParams();
  const { id } = params;
  const { state } = location;
  const { client } = state;

  const [apiData, setApiData] = useState<any>();
  const [apiDataByDay, setApiDataByDay] = useState<any>();
  const [timeRange, setTimeRange] = useState<any>("this_month");
  const [proccessing, setProccessing] = useState(false);
  const [adsIdList, setAdsIdList] = useState<any>();
  const [adInsightList, setAdInsightList] = useState<any>();

  const accessTokenId = localStorage.getItem("access_token");
  //time_range={'since':'2022-01-01','until':'2022-01-30'}
  const url = `https://graph.facebook.com/v15.0/${id}/insights?fields=conversion_values,impressions,reach,conversions,spend,website_purchase_roas,cpm,cpc,cpp,ctr,clicks,frequency,objective&date_preset=${timeRange}&access_token=${accessTokenId}`;
  const urlByDay = `https://graph.facebook.com/v15.0/${id}/insights?fields=conversion_values,impressions,reach,conversions,spend,website_purchase_roas,cpm,cpc,cpp,ctr,clicks,frequency,objective&date_preset=${timeRange}&time_increment=1&access_token=${accessTokenId}`;
  const urlAdsIds = `https://graph.facebook.com/v15.0/${id}/ads?effective_status=["ACTIVE"]&access_token=${accessTokenId}`;

  const getAdAccountData = async (path: string) => {
    setProccessing(true);
    axios.get(path).then((response) => {
      setApiData(response.data?.data[0]);
      setProccessing(false);
    });
  };

  const getAdAccountByDay = async (path: string) => {
    setProccessing(true);
    axios.get(path).then((response) => {
      setApiDataByDay(response.data?.data);
      setProccessing(false);
    });
  };

  const getListOfAdsId = async (path: string) => {
    setProccessing(true);
    axios.get(path).then((response) => {
      setAdsIdList(response.data?.data?.map((item: any) => item.id));
      setProccessing(false);
    });
  };

  const getChartData = (array: any, field: any) => {
    const filteredInfo = [];
    for (let item in array) {
      let object: any = {};
      object["value"] = array[item][field];
      object["date"] = array[item]["date_start"];
      filteredInfo.push(object);
    }

    return filteredInfo;
  };

  const renderCharts = () => {
    return (
      <>
        <LineChart
          data={getChartData(apiDataByDay, "reach")}
          label={"Alcance"}
        />
        <LineChart
          data={getChartData(apiDataByDay, "impressions")}
          label={"Impressões"}
        />
        <LineChart data={getChartData(apiDataByDay, "cpm")} label={"CPM"} />
        <LineChart
          data={getChartData(apiDataByDay, "clicks")}
          label={"Cliques"}
        />
        <LineChart data={getChartData(apiDataByDay, "cpc")} label={"CPC"} />
        <LineChart data={getChartData(apiDataByDay, "ctr")} label={"CTR"} />
        <LineChart
          data={getChartData(apiDataByDay, "spend")}
          label={"Valor Gasto"}
        />
      </>
    );
  };

  const renderUnavailable = () => {
    return (
      <Unavailable>
        <label>Não há dados para o período selecionado</label>
      </Unavailable>
    );
  };

  const renderInfo = (array: string | any[]) => {
    if (array?.length) {
      return renderCharts();
    }
    return renderUnavailable();
  };

  useEffect(() => {
    getAdAccountData(url);
    getAdAccountByDay(urlByDay);
    getListOfAdsId(urlAdsIds);
  }, [timeRange]);

  return (
    <Container>
      <div className="title">{client}</div>
      <OverviewBar>
        <div>
          <label>Investimento</label>
          <label>{priceFormatter(apiData?.spend)}</label>
        </div>
        <div>
          <label>CTR</label>
          <label>{apiData?.ctr}</label>
        </div>
        <div>
          <label>CPM</label>
          <label>{apiData?.cpm}</label>
        </div>
        <div>
          <label>Alcance</label>
          <label>{apiData?.reach}</label>
        </div>

        <ButtonDate proccessing={proccessing} setTimeRange={setTimeRange} />
      </OverviewBar>
      <MainBody>
        <ChartsDiv>{!proccessing && renderInfo(apiDataByDay)}</ChartsDiv>
        <TableContainer>
          <Table></Table>
        </TableContainer>
      </MainBody>
    </Container>
  );
};
