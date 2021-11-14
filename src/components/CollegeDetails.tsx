import React from "react";
import styles from "../styles/CollegeDetails.module.scss";
import { useParams } from "react-router";
import Axios from "../api/axios.config";

const CollegeDetails: React.FC = () => {
  const params = useParams();
  const [collegeData, setCollegeData] = React.useState<any>();
  React.useEffect(() => {
    const getCollege = async () => {
      const response = await Axios.get(`/college?id=${(params as any).id}`);
      console.log(response.data.colleges[0]);
      setCollegeData(response.data.colleges[0]);
    };

    getCollege();
  }, []);

  return (
    <div className={styles.DetailsContainer}>
      {collegeData && (
        <>
          <section className={styles.TopContainer}>
            <h1>{collegeData.college_name}</h1>
            <p className={styles.Details}>Details</p>
            <section className={styles.SubDetails}>
              <p>State: {collegeData.state_name}</p>
              <p>City: {collegeData.city_name}</p>
              <p>Student Count: {collegeData.no_students}</p>
            </section>
          </section>
          <section className={styles.CoursesContainer}>
            <p className={styles.Title}>Courses Offered</p>
            <div>
              {collegeData.courses_offered.map((item: any, index: any) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CollegeDetails;
