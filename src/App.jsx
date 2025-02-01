import React, { useContext, useEffect, useState } from "react"; // Added useState import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import {
  About,
  ContactUs,
  FAQPage,
  Home,
  ProjectPage,
  Services,
  Training,
  TrainingInfo,
} from "./pages/pages";
import { TitleManager } from "./components/component";
import { themeContext } from "./Context/Context";
import "./App.css"


const App = () => {

  const {theme} = useContext(themeContext)

  return (
    
    <div className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>  
    <Router>
      <Layout>
        <TitleManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/traininginfo" element={<TrainingInfo />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
};

export default App;
