import React from "react";
import styles from "../styles/Options.module.scss";
import MenuContainer from "./utils/Menu";
import { Input } from "antd";

const currentQuery = new Map<string, any>();
const Options: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [collegeName, setCollegeName] = React.useState<string>("");

  const updateQueryHandler = (optionName: string, value: any) =>
    currentQuery.set(optionName, value);

  return (
    <div className={styles.OptionContainer}>
      <h1 onClick={() => setShowFilters((prev) => !prev)}>
        Filter your preferences
      </h1>
      {showFilters && (
        <section>
          <Input.Search
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            style={{
              width: "60%",
            }}
          />
          <MenuContainer
            items={["WB", "AP", "GJ", "RJ", "JK", "SK", "NG", "KL"]}
            name="location"
            clickHandler={updateQueryHandler}
          />
          <MenuContainer
            items={[
              "<100",
              ">=100",
              ">=500",
              ">=900",
              ">=1000",
              ">=1500",
              ">=3000",
            ]}
            name="students"
            clickHandler={updateQueryHandler}
          />
          <MenuContainer
            items={[
              "CS",
              "BCOM",
              "BBA",
              "MPhiL",
              "DPhil",
              "MSC",
              "MBA",
              "MCOM",
            ]}
            name="Course"
            clickHandler={updateQueryHandler}
          />
        </section>
      )}
    </div>
  );
};

export default Options;
