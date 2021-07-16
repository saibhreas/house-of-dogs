import React from "react";
import ProductList from "../components/ProductList";
import ServiceMenu from "../components/ServiceMenu";

const Home = () => {
  return (
    <div className="container">
      <ServiceMenu />
      <ProductList />
    </div>
  );
};

export default Home;
