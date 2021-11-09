import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "antd";

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <h1> Dashboard App</h1>

      <Button type="primary" shape="round" className={styles.button}>
        Show Colleges
      </Button>
    </div>
  );
};

export default Header;
