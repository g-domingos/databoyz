import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Navbar/styles";
import { DefaultLayoutStyle } from "./styles";

export const DefaultLayout = () => {
  return (
    <DefaultLayoutStyle>
      <Navbar />
      <Outlet />
    </DefaultLayoutStyle>
  );
};
