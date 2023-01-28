import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Button, ButtonDiv } from "./styles";

export const ButtonDate = ({ setTimeRange, proccessing }: any) => {
  const [selectedButton, setSelectedButton] = useState("this_month");

  const handleClick = (dateSelected: string) => {
    setTimeRange(dateSelected);
    setSelectedButton(dateSelected);
  };

  return (
    <ButtonDiv>
      {proccessing ? <Spinner size="sm" /> : null}

      <Button
        selected={selectedButton === "today"}
        onClick={() => handleClick("today")}
      >
        Dia
      </Button>
      <Button
        selected={selectedButton === "this_week_mon_today"}
        onClick={() => handleClick("this_week_mon_today")}
      >
        Semana
      </Button>
      <Button
        selected={selectedButton === "this_month"}
        onClick={() => handleClick("this_month")}
      >
        Mês
      </Button>
      <Button
        selected={selectedButton === "this_year"}
        onClick={() => handleClick("this_year")}
      >
        Ano
      </Button>
    </ButtonDiv>
  );
};
