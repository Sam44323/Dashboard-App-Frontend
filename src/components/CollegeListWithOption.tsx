import React, { useEffect } from "react";
import styles from "../styles/CollegeListWithOption.module.scss";
import MenuContainer from "./utils/Menu";
import { Button, Input, Spin } from "antd";
import {
  DeleteOutlined,
  SearchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Axios from "../api/axios.config";

const currentQuery = new Map<string, any>();
const Options: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [collegeName, setCollegeName] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [colleges, setColleges] = React.useState<any[]>([]);
  const [state, setState] = React.useState<boolean>(false);

  const updateQueryHandler = (optionName: string, value: any) => {
    currentQuery.set(optionName, value);
    setState((prev) => !prev);
  };

  const submitQueryHandler = () => {
    currentQuery.set("students", currentQuery.get("students").slice(1));
    let [query, c] = ["", 0];
    if (collegeName !== "") query += `name=${collegeName}&`;
    currentQuery.forEach((value, key) => {
      query += `${c > 0 && c < currentQuery.size ? "&" : ""}${key}=${value}`;
      c++;
    });
    console.log(query);
  };

  const clearQueryHandler = () => {
    currentQuery.clear();
    setCollegeName("");
    setState((prev) => !prev);
  };

  const getColleges = async () => {
    setLoading(true);
    const response = await Axios.get("/colleges");
    console.log(response.data.colleges);
    setColleges(response.data.colleges);
    setLoading(false);
  };

  useEffect(() => {
    getColleges();
  }, []);

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
                "<=100",
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
            <Button
              className={styles.SearchButton}
              onClick={submitQueryHandler}
              disabled={currentQuery.size === 0}
            >
              Search
              <SearchOutlined />
            </Button>
            <Button
              className={styles.SearchButton}
              onClick={clearQueryHandler}
              disabled={currentQuery.size === 0}
            >
              Clear Query
              <DeleteOutlined />
            </Button>
          </div>
        </>
      )}
      {loading ? (
        <Spin
          style={{
            width: "100%",
            marginTop: "70px",
          }}
          indicator={
            <LoadingOutlined
              style={{
                fontSize: "30px",
              }}
            />
          }
        />
      ) : colleges.length ? (
        <section className={styles.CollegeListContainer}>
          {colleges.map((college) => (
            <div className={styles.Card}>
              <h1>{college.college_name}</h1>
              <p>Founded On: {college.founded_on}</p>
              <p>Students Count: {college.no_students}</p>
              <p>
                State: {college.state_name} | City: {college.city_name}
              </p>
              <ul>
                {college.courses_offered.map((course: any, index: any) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ) : (
        <p>No colleges found 😔</p>
      )}
    </div>
  );
};

export default Options;
