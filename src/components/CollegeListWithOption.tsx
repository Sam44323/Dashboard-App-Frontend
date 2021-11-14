import React, { useEffect } from "react";
import styles from "../styles/CollegeListWithOption.module.scss";
import MenuContainer from "./utils/Menu";
import { Button, Spin, Alert } from "antd";
import { useHistory } from "react-router";
import {
  DeleteOutlined,
  SearchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Axios from "../api/axios.config";

const currentQuery = new Map<string, any>();
const Options: React.FC = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [colleges, setColleges] = React.useState<any[]>([]);
  const [showError, setShowError] = React.useState<boolean>(false);
  const [state, setState] = React.useState<boolean>(false);
  const { push } = useHistory();

  const updateQueryHandler = (optionName: string, value: any) => {
    currentQuery.set(optionName, value);
    setState((prev) => !prev);
  };

  const submitQueryHandler = async () => {
    if (currentQuery.get("students")) {
      currentQuery.set("students", currentQuery.get("students").slice(2));
    }
    let [query, c] = ["", 0];
    currentQuery.forEach((value, key) => {
      query += `${c > 0 && c < currentQuery.size ? "&" : ""}${key}=${value}`;
      c++;
    });
    console.log(query);
    await getColleges(query);
  };

  const clearQueryHandler = async () => {
    currentQuery.clear();
    setState((prev) => !prev);
    getColleges();
  };

  const getColleges = async (params?: string) => {
    try {
      setLoading(true);
      console.log(params);
      const response = await Axios.get(
        `/${!params ? "colleges" : "college"}${params ? "?" + params : ""}`
      );
      setColleges(response.data.colleges);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setShowError(true);
      setTimeout(() => setShowError(false), 1800);
    }
  };

  useEffect(() => {
    getColleges();
  }, []);

  return (
    <div className={styles.OptionContainer}>
      {showError && (
        <Alert
          message="Network Error"
          description="Cant' fetch the data's at this moment. Please try again!"
          type="error"
          style={{
            width: "18%",
            maxWidth: "1000px",
            position: "absolute",
            top: "1%",
            right: "0%",
          }}
          showIcon
        />
      )}
      <h1 onClick={() => setShowFilters((prev) => !prev)}>
        Filter your preferences
      </h1>
      {showFilters && (
        <>
          <section className={styles.FilterSection}>
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
          <div className={styles.ButtonSection}>
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
            <div
              className={styles.Card}
              onClick={() => push(`/college/${college._id}`)}
            >
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
        <p
          style={{
            textAlign: "center",
            margin: "2.4rem 0",
            fontSize: "1.6rem",
          }}
        >
          No colleges found 😔
        </p>
      )}
    </div>
  );
};

export default Options;
