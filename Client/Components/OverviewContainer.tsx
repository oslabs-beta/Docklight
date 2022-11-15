import * as React from "react";
// import React, {FC} from 'react';

const OverviewContainer = (props: any) => {
  return (
    <div className={props.className}>
      <div>
        <h6 className="">Container Name: {props.name}</h6>
        <span className="">Container Health: {props.health} </span>
      </div>
    </div>
  );
};
export default OverviewContainer;
