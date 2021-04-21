import React, { useEffect, useState } from "react";
import axios from "axios";
import Screen from "./Screen";
import ProthonAlo from "../images/prothomalo.png";

function LandingPage() {
  const [landingData, setLandingData] = useState([]);
  const getData = async () => {
    const response = await axios.get("data.json");
    return response.data;
  };
  useEffect(() => {
    getData()
      .then((res) => {
        setLandingData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
          <div className="header">
            <img src={ProthonAlo} alt="Prothom alo" />
          </div>
          <hr></hr>
          <div className="landingData">
            {landingData.map((data) => (
              <Screen data={data} />
            ))}
          </div>
    </div>
  );
}

export default LandingPage;
