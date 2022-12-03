import * as React from "react";
import { MouseEventHandler } from 'react';

//button functionality will control the filtering of active/inactive containers
type Props = {
  isInactive: boolean, 
  active: MouseEventHandler,
  inactive: MouseEventHandler
}

//Props are passed down from YourContainers
//Purpose - To filter between Active & Inactive containers
export default function Active({ isInactive, active, inactive }: Props) {
  return (
    <div className="m-[12px]">
      <button
        className={`bg-green-500 w-[75px] h-[35px] rounded-l-lg ${isInactive ? 'opacity-60' : 'opacity-100'}`}
        onClick={active}
      >
        Active
      </button>
      <button
        className={`bg-red-400 w-[100px] h-[35px] rounded-r-lg ${isInactive ? 'opacity-100' : 'opacity-60'}`}
        onClick={inactive}
      >
        Inactive
      </button>
    </div>
  );
}
