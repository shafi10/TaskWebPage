import React from "react";
import { _dateFormatter } from "../helper/_dateFormate";
import { Link } from "react-router-dom";

export default function Screen({ data }) {
  return (
    <div className="screen">
      <div className="details">
      { data?.imagesatus &&  <div>
          <img src={data?.photo} alt="Prothon alo section" /> 
          {_dateFormatter(data?.time).totaldays !== "00" && (
            <div className="timeFormet">
              {_dateFormatter(data?.time).totaldays !== "00" &&
                `${_dateFormatter(data?.time).totaldays} দিন `}
            </div>
          )}
          <div className="timeFormet">
            {" "}
            {_dateFormatter(data?.time).formet === "minutes"
              ? `${
                  _dateFormatter(data?.time).bangla_converted_number
                } মিনিট আগে`
              : `${
                  _dateFormatter(data?.time).bangla_converted_number
                } ঘণ্টা আগে`}
          </div>
        </div> }
        <div>
          <h2>
            <Link className="navbar-brand" className="links" to="/prothomalo">
              {data?.title}
            </Link>
          </h2>
         {data?.descriptionsatus &&  <p>{data?.description.slice(0,150) + "..."}</p> }
         { data?.imagesatus == false &&  <div className="timeforstatus">
          {_dateFormatter(data?.time).totaldays !== "00" && (
            <div className="timeFormet">
              {_dateFormatter(data?.time).totaldays !== "00" &&
                `${_dateFormatter(data?.time).totaldays} দিন `}
            </div>
          )}
          <div className="timeFormet">
            {" "}
            {_dateFormatter(data?.time).formet === "minutes"
              ? `${
                  _dateFormatter(data?.time).bangla_converted_number
                } মিনিট আগে`
              : `${
                  _dateFormatter(data?.time).bangla_converted_number
                } ঘণ্টা আগে`}
          </div>
        </div> } 
        </div>
      </div>
    </div>
  );
}
