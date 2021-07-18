import React from "react";
import ProviderList from "../components/ProviderList";
import ServiceMenu from "../components/ServiceMenu";

const Home = () => {
  return (
    <div className="container">
      <ServiceMenu />
      <ProviderList />
    </div>
  );
};

export default Home;
