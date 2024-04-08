import Container2 from "../components/Container2";
import Container3 from "../components/Container3";
import Container5 from "../components/Container5";
import Container6 from "../components/Container6";

import styles from "../components/Container6.module.css";

const Connect = () => {
  return (
    <div className={styles.home}>
      <Container2 />
      <Container3 />
      <Container5 />
      <Container6 />
    </div>
  );
};

export default Connect;
