import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
//import axios from 'axios';
import Homepage from '../Components/Homepage';
import DataOverview from './DataOverview';
import YourContainers from './YourContainers';
import Team from '../Components/Team';

export default function Navbar() {
    // const sse = new EventSource('http://localhost:3000/cont/constream');
    // sse.onmessage = (event) => {
    //   console.log(JSON.parse(event.data))
    // }
    // sse.onerror = () => sse.close;

  return (
    <div className="flex flex-col items-center text-3xl font-bold underlined bg-blue-400 w-[375px] max-w-[425px] border-r-4">
      <p>this is a logo</p>
      <header className="mt-5 text-5xl">
       Docklight 
      </header>
      <div className='flex h-screen flex-col space-y-8 text-center mt-[150px]'>
        <Link to="/"className='bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'> <button className=''>Home Page</button></Link>
        <Link to="/DataOverview"className='bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'> <button className=''>Data Overview</button></Link>
        <Link to="/YourContainers"className='bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' ><button className=''>Your Containers</button></Link>
        <Link to="/Team" className='bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'> <button className=''> Team</button></Link>
      </div>
    </div>
  );
}
