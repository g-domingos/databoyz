import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Chart } from "../../components/Chart";
import { ChartsDiv, Container, MainBody, OverviewBar } from "./styles";
import { priceFormatter } from "../../utils";
import { LineChart } from "../../components/LineChart";
import { ButtonDate } from "../../components/ButtonDate";

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

  const accessTokenId = localStorage.getItem("access_token");
  //time_range={'since':'2022-01-01','until':'2022-01-30'}
  const url = `https://graph.facebook.com/v15.0/${id}/insights?fields=conversion_values,impressions,reach,conversions,spend,website_purchase_roas,cpm,cpc,cpp,ctr,clicks,frequency,objective&date_preset=${timeRange}&access_token=${accessTokenId}`;
  const urlByDay = `https://graph.facebook.com/v15.0/${id}/insights?fields=conversion_values,impressions,reach,conversions,spend,website_purchase_roas,cpm,cpc,cpp,ctr,clicks,frequency,objective&date_preset=${timeRange}&time_increment=1&access_token=${accessTokenId}`;
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
  useEffect(() => {
    getAdAccountData(url);
    getAdAccountByDay(urlByDay);
  }, [timeRange]);

  return (
    <Container>
      <div className="title">
        {client}
      </div>
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
        <ChartsDiv>
          <LineChart data={getChartData(apiDataByDay, "cpm")} label={"CPM"} />
          <LineChart
            data={getChartData(apiDataByDay, "impressions")}
            label={"Impressões"}
          />
          <LineChart
            data={getChartData(apiDataByDay, "spend")}
            label={"Valor Gasto"}
          />
          <LineChart data={getChartData(apiDataByDay, "cpc")} label={"CPC"} />
          <LineChart data={getChartData(apiDataByDay, "ctr")} label={"CTR"} />
          <LineChart
            data={getChartData(apiDataByDay, "clicks")}
            label={"Cliques"}
          />
          <LineChart
            data={getChartData(apiDataByDay, "reach")}
            label={"Alcance"}
          />
        </ChartsDiv>
      </MainBody>
    </Container>
  );
};
