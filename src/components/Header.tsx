import React from "react";
import styles from "../styles/Header.module.scss";
import { Button } from "antd";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const { push } = useHistory();

  return (
    <div className={styles.HeaderContainer}>
      <h1> Dashboard App</h1>

      <Button
        type="primary"
        shape="round"
        className={styles.button}
        onClick={() => push("/colleges")}
      >
        Show Colleges
      </Button>
    </div>
  );
};

export default Header;
