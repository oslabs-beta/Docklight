import * as React from "react";
// import React, {FC} from 'react';

const OverviewContainer = (props: any) => {
  return (
    <div className="grid m-2 justify-self-center min-w-[850px]">
    <div className={props.className}>
      <div>
        <h6 className="">Container Name: {props.name}</h6>
        <span className="">Container Health: {props.health} </span>
      </div>
    </div>
    </div>
  );
};
export default OverviewContainer;
