import React from "react";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.HomeContainer}>
      <h1>Welcome to College Dashboard App</h1>
      <section>
        <p>Here you can see the list of all the colleges country.</p>
        <p>Along with their details and courses</p>
        <p>Enjoy!</p>
      </section>
    </div>
  );
};

export default Home;
