import React from "react";
import styles from "../styles/CollegeContainer.module.scss";
import Options from "./CollegeListWithOption";

const CollegeContainer: React.FC = () => {
  return (
    <div className={styles.CollegeContainer}>
      <h1>Here are all the institutions we could find!</h1>
      <Options />
    </div>
  );
};

export default CollegeContainer;
