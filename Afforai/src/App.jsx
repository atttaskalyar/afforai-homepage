import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/UseCaseComponents/Navbar";
import Layout from "./components/Layout";
import HeadingSection from "./components/UseCaseComponents/HeadingSection";
import LovedBySection from "./components/UseCaseComponents/LovedBySection";
import IntroductionSection from "./components/UseCaseComponents/IntroductionSection";
import SaveYourselfSection from "./components/UseCaseComponents/SaveYourselfSection";
import WhyChooseUsSection from "./components/UseCaseComponents/WhyChooseUsSection";
import MultipleChatBotsSection from "./components/UseCaseComponents/MultipleChatBotsSection";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <HeadingSection />
        <LovedBySection />
        <IntroductionSection />
        <SaveYourselfSection />
        <WhyChooseUsSection />
        <MultipleChatBotsSection />
      </Layout>
    </>
  );
}

export default App;
