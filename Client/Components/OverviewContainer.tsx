import * as React from "react";

//Props passed from DataOverview - Dropped feature that rendered small containers to have a look at container data from
  //a glance. Future intention was to implement this as a simple vs advanced toggle within YourContainers.
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
