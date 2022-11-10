import * as React from 'react';
import Homepage from '../Components/Homepage';
import DataOverview from './DataOverview';
import YourContainers from './YourContainers';
import Team from '../Components/Team';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center text-3xl font-bold underlined bg-blue-800">
      <header className="mt-5">
        NAVBAR Docklight XDDD
      </header>
      <div className='flex h-screen flex-col place-content-center space-y-8'>
        <button className='bg-slate-200 rounded-md border-black border-2'>Your Containers</button>
        <button className='bg-slate-200 rounded-md border-black border-2'>Data Overview</button>
        <button className='bg-slate-200 rounded-md border-black border-2'>Some shit</button>
        <button className='bg-slate-200 rounded-md border-black border-2'>Team</button>
      </div>
    </div>
  );
}
