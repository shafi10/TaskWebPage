import React, { useEffect, useState } from "react";
import axios from "axios";
import Screen from "./Screen";
import ProthonAlo from "../images/prothomalo.png";

function LandingPage() {
  const [landingData, setLandingData] = useState([]);

  // Fetch Data with axios from data.json file
  const getData = async () => {
    const response = await axios.get("data.json");
    let newData = response.data.sort((a,b) => {
      if ( a.sort < b.sort ){
        return -1;
      }
      if ( a.sort > b.sort ){
        return 1;
      }
      return 0;
    } )
    let newDatas =  newData.map((data,index)=>{
      if(index > 4 ){
        return {
          ...data,
          descriptionsatus:false
        }
      }else{
        return{
          ...data,
          descriptionsatus:true
        }
      }
    }).map((data,index)=>{
      if( index == 0 || index > 4 ){
        return {
          ...data,
          imagesatus:true
        }
      }else{
        return{
          ...data,
          imagesatus:false
        }
      }
    })
    

    return newDatas;
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
        {landingData && landingData?.map((data) => <Screen data={data} />)}
      </div>
    </div>
  );
}

export default LandingPage;
