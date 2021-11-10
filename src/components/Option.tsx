import React from "react";
import styles from "../styles/Options.module.scss";
import MenuContainer from "./utils/Menu";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const currentQuery = new Map<string, any>();
const Options: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [collegeName, setCollegeName] = React.useState<string>("");
  const [state, setState] = React.useState<boolean>(false);

  const updateQueryHandler = (optionName: string, value: any) => {
    currentQuery.set(optionName, value);
    setState((prev) => !prev);
  };

  const submitQueryHandler = () => {
    currentQuery.forEach((value, key) => {
      console.log(value, key);
    });
  };

  return (
    <div className={styles.OptionContainer}>
      <h1 onClick={() => setShowFilters((prev) => !prev)}>
        Filter your preferences
      </h1>
      {showFilters && (
        <>
          <section>
            <Input.Search
              placeholder="College Name"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              style={{
                width: "49%",
              }}
            />
            <MenuContainer
              items={["WB", "AP", "GJ", "RJ", "JK", "SK", "NG", "KL"]}
              name="location"
              clickHandler={updateQueryHandler}
              sideName={currentQuery.get("location")}
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
              sideName={currentQuery.get("students")}
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
              name="course"
              clickHandler={updateQueryHandler}
              sideName={currentQuery.get("course")}
            />
          </section>
          <div>
            <Button className={styles.SearchButton}>
              Search
              <SearchOutlined />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Options;
