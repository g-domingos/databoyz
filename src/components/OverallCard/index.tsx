import { CardContainer, ClientTitle, Table } from "./styles";

export const OverallCard = ({ data }: any) => {
  return (
    <CardContainer>
      <ClientTitle>
        <label>{data.business_name}</label>
        <label>{data.name}</label>
      </ClientTitle>
      <Table>
        <tr>
          <td>Valor Total Gasto</td>
          <td>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(data.amount_spent / 100)}
          </td>
        </tr>
      </Table>
    </CardContainer>
  );
};
