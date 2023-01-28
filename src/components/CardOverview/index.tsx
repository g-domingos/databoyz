import { priceFormatter } from "../../utils";
import { CardContainer } from "./styles";

interface CardOverviewProps {
  label?: string;
  value?: any;
  isCurrency?: boolean;
}

export const CardOverview = ({
  label,
  value,
  isCurrency,
}: CardOverviewProps) => {
  return (
    <CardContainer>
      <header>{label}</header>
      <div>
        <span>
          {isCurrency
            ? priceFormatter(value)
            : value?.toLocaleString('pt-BR')}
        </span>
      </div>
    </CardContainer>
  );
};
