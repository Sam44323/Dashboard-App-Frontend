import React from "react";
import styles from "../styles/CollegeDetails.module.scss";
import { useParams } from "react-router";
import Axios from "../api/axios.config";

const CollegeDetails: React.FC = () => {
  const params = useParams();
  const [collegeData, setCollegeData] = React.useState<any>();
  React.useEffect(() => {
    const getCollege = async () => {
      console.log(params);
      const response = await Axios.get(`/college?id=${(params as any).id}`);
      console.log(response.data.colleges[0]);
    };

    getCollege();
  }, [params]);

  return <></>;
};

export default CollegeDetails;
