import axios from "axios";
import { useEffect, useState } from "react";
import { CardContainer, ClientTitle, Table } from "./styles";

export const OverallCard = ({ data }: any) => {
  const [accountDetails, setAccountDetails] = useState<any>([]);

  const { id } = data;
  const accessTokenId = localStorage.getItem("access_token");

  const path = `https://graph.facebook.com/v15.0/${id}/ads?fields=effective_status,insights{actions}&filtering=[{'field':'effective_status','operator':'IN','value':['ACTIVE']}]&access_token=${accessTokenId}`;

  const requestAPI = (path: string) => {
    axios.get(path).then((response) => {
      setAccountDetails([...accountDetails, response.data]);
    });
  };

  useEffect(() => {
    requestAPI(path);
  }, []);

  return (
    <CardContainer>
      <ClientTitle>
        <label>{data.business_name}</label>
        <label>{data.name}</label>
      </ClientTitle>
      <Table>
        <tbody>
          <tr>
            <td>Valor Total Gasto:</td>
            <td>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(data.amount_spent / 100)}
            </td>
          </tr>
          <tr>
            <td>Campanhas Ativas:</td>
            {/* <td>{accountDetails}</td> */}
          </tr>
        </tbody>
      </Table>
    </CardContainer>
  );
};
