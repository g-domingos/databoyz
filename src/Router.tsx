import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/accounts/:id" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
