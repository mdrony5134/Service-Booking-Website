import React from "react";
import Banner from "../components/Banner";
import AppSection from "../components/AppSection";
import AllService from "../components/AllService";
import OtherCard from "../components/OtherCard";
import Customer from "../components/Customer";
import WorkMangement from "../components/WorkMangement";
import Statics from "../components/Statics";
// import ServiceForm from "./ServiceForm";

const Home = () => {
  return (
    <>
      <Banner />
      <Statics/>
      <AppSection />
      <AllService />
      <OtherCard />
      <Customer />
      <WorkMangement/>
    </>
  );
};

export default Home;
