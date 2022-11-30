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
    <div className="flex flex-col bg-base-200 dark:bg-base-100 items-center text-3xl font-bold underlined w-[375px] max-w-[425px] shadow-lg">
      <img className="logo" src={logo} alt="cute whale with lantern strapped to head" />
      {/* added shadow to home page button, adjusting colors  */}
      <div className='flex h-screen flex-col space-y-8 text-center mt-[150px]'>
        <Link to="/"className='btn btn-primary hover:bg-secondary hover:border-secondary antialiased text-white text-[20px] font-medium py-2 px-4 drop-shadow-md rounded'> <button className=''>Home</button></Link>
        <Link to="/DataOverview"className='btn btn-primary hover:bg-secondary hover:border-secondary antialiased text-white text-[20px] font-medium py-2 px-4 rounded'> <button className=''>Data Overview</button></Link>
        <Link to="/YourContainers"className='btn btn-primary hover:bg-secondary hover:border-secondary antialiased text-white text-[20px] font-medium py-2 px-4 drop-shadow-md rounded' ><button className=''>Your Containers</button></Link>
        <Link to="/Team" className='btn btn-primary hover:bg-secondary hover:border-secondary antialiased text-white text-[20px] font-medium py-2 px-4 drop-shadow-md rounded'> <button className=''>Team</button></Link>
      </div>
      <select className="select select-bordered w-half btn-ghost max-w-xs" data-choose-theme>
  <option disabled defaultChecked>Theme</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="synthwave">Synthwave</option>
  <option value="cyberpunk">Cyberpunk</option>
  <option value="valentine">Valentine</option>
  <option value="autumn">Autumn</option>
  <option value="lofi">Lofi</option>
  <option value="dracula">Dracula</option>
  <option value="forest">Forest</option>
  <option value="night">Night</option>
</select>
    </div>
  );
}