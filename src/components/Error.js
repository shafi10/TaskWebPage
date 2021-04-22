import React from "react";

export default function Error({ history }) {
  return (
    <div className="errorSection">
      <div className="errorpage">
        <div>Details page is not develop</div>
        <button onClick={() => history.push("/")}>Back</button>
      </div>
    </div>
  );
}
