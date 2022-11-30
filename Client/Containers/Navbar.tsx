import * as React from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import DataOverview from './DataOverview';
import YourContainers from './YourContainers';
import Team from './Team';
import { themeChange } from 'theme-change';
import logo from '../assets/docklightlogo-removebg.png'

export default function Navbar() {

  useEffect(() => {
    themeChange(false);
  }, [])
  return (
    <div className="flex flex-col items-center text-3xl font-bold underlined w-[375px] max-w-[425px] border-r-4 shadow-lg">
      <img className="logo" src={logo} alt="cute whale with lantern strapped to head" />
      {/* <header className="mt-5 text-5xl">
       Docklight 
      </header> */}
      {/* added shadow to home page button, adjusting colors  */}
      <div className='flex h-screen flex-col space-y-8 text-center mt-[150px]'>
        <Link to="/"className='btn btn-primary hover:bg-blue-500 text-white text-[20px] font-medium py-2 px-4 drop-shadow-xl rounded'> <button className=''>Home Page</button></Link>
        <Link to="/DataOverview"className='btn btn-primary hover:bg-blue-500 text-white text-[20px] font-medium py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded'> <button className=''>Data Overview</button></Link>
        <Link to="/YourContainers"className='btn btn-primary hover:bg-blue-500 text-white text-[20px] font-medium py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded' ><button className=''>Your Containers</button></Link>
        <Link to="/Team" className='btn btn-primary hover:bg-blue-500 text-white text-[20px] font-medium py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded'> <button className=''> Team</button></Link>
      </div>
      <select className="select select-bordered w-full max-w-xs" data-choose-theme>
  <option disabled defaultChecked>Theme</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
{/* <div className="dropdown dropdown-top">
  <label tabIndex={0} className="btn m-1 bg-blue-100 hover:bg-blue-200 border-bg-blue-100 hover:border-blue-200">Theme</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
    </div>
  );
}