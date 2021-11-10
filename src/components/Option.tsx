import React from "react";
import styles from "../styles/Options.module.scss";
import MenuContainer from "./utils/Menu";

const Options: React.FC = () => {
  const [currentQuery, setCurrentQuery] = React.useState<
    {
      name: string;
      value: any;
    }[]
  >([{}] as any);

  const updateQueryHandler = (optionName: string, value: any) => {
    setCurrentQuery((prev) =>
      !prev.includes({ name: optionName, value })
        ? [...prev, { name: optionName, value }]
        : prev
    );
  };

  return (
    <div className={styles.OptionContainer}>
      <h1>Filter your preferences</h1>
      <section>
        <MenuContainer
          items={["WB", "AP", "GJ", "RJ", "JK", "SK", "NG", "KL"]}
          name="location"
          clickHandler={updateQueryHandler}
        />
      </section>
    </div>
  );
};

export default Options;
