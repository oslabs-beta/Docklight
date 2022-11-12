import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Homepage from '../Components/Homepage';
import DataOverview from './DataOverview';
import YourContainers from './YourContainers';
import Team from '../Components/Team';

export default function Navbar() {
  axios('cont/list')
    .then(res => console.log(res.data))

    const sse = new EventSource('http://localhost:3000/cont/constream');
    sse.onmessage = (event) => {
      console.log(JSON.parse(event.data))
    }
    sse.onerror = () => sse.close;

  return (
    <div className="flex flex-col items-center text-3xl font-bold underlined bg-blue-800 w-1/5 max-w-xs">
      <header className="mt-5">
       Docklight 
      </header>
      <div className='flex h-screen flex-col place-content-center space-y-8 text-center'>
        <Link to="/Homepage"className='bg-slate-200 rounded-md border-black border-2'> <button className=''>Home Page</button></Link>
        <Link to="/DataOverview"className='bg-slate-200 rounded-md border-black border-2'> <button className=''>Data Overview</button></Link>
        <Link to="/YourContainers"className='bg-slate-200 rounded-md border-black border-2' ><button className=''>Your Containers</button></Link>
        <Link to="/Team" className='bg-slate-200 rounded-md border-black border-2'> <button className=''> Team</button></Link>
      </div>
    </div>
  );
}
