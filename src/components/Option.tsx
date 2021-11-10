import React from "react";
import styles from "../styles/Options.module.scss";
import MenuContainer from "./utils/Menu";

const Options: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);
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
      <h1 onClick={() => setShowFilters((prev) => !prev)}>
        Filter your preferences
      </h1>
      {showFilters && (
        <section>
          <MenuContainer
            items={["WB", "AP", "GJ", "RJ", "JK", "SK", "NG", "KL"]}
            name="location"
            clickHandler={updateQueryHandler}
          />
        </section>
      )}
    </div>
  );
};

export default Options;
