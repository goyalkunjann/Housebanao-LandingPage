import Header from "../components/Header";
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";
import Container4 from "../components/Container4";
import Container5 from "../components/Container5";
import Container6 from "../components/Container6";
import Container7 from "../components/Container7";
import Container8 from "../components/Container8";


import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
     
    </div>
  );
};

export default Home;
