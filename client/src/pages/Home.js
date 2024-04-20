import React from 'react';
import Header from "../components/Header/Header";
import Container1 from "../components/Container1/Container1";
import Construction from "../components/Construction/Construction";
import Container2 from "../components/Container2/Container2"; 
import Container4 from "../components/Container4/Container4";
import Container5 from "../components/Container5/Container5";
import Container6 from "../components/Container6/Container6";
import Container7 from "../components/Container7/Container7";
import Container8 from "../components/Container8/Container8";
import Construction3 from "../components/Construction3/Construction3";
import Construction4 from "../components/Construction4/Construction4";
import Construction5 from "../components/Construction5/Construction5";
import Construction6 from "../components/Construction6/Construction6"; 
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Container1 />
      <Construction />
      <Construction3 />
      <Container2 />
      <Construction4 />
      <Construction5 />
      <Container4 />
      <Construction3 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Construction6 /> 
      <Container8 />
    </div>
  );
};

export default Home;
