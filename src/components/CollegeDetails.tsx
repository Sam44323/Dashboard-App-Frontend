import React from "react";
import styles from "../styles/CollegeDetails.module.scss";
import { useParams } from "react-router";

const CollegeDetails: React.FC = () => {
  const params = useParams();
  console.log(params);
  return <></>;
};

export default CollegeDetails;
