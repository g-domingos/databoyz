import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Dashboard = () => {
  const params = useParams();
  const { id } = params;

  const [apiData, setApiData] = useState<any>();

  const accessTokenId = localStorage.getItem("access_token");

  const url = `https://graph.facebook.com/v15.0/${id}/insights?fields=impressions,reach,conversions,spend,website_purchase_roas,cpm,cpc,cpp,ctr,clicks,frequency,objective&date_preset=last_year&access_token=${accessTokenId}`;

  const getAdAccountData = async (path: string) => {
    axios.get(path).then((response) => {
      setApiData(response.data);
    });
  };

  useEffect(() => {
    getAdAccountData(url);
  }, []);
  console.log(apiData)
  return <h1>tchau</h1>;
};
