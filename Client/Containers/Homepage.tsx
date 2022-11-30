import * as React from 'react';
import logo from '../assets/logo-nobg-noletters-preview.png'

export default function Homepage() {
  // console.log(data-theme)
  return (
    <div className='justify-center p-5'>      
      <h1 className='text-6xl text-center p-7 '>Welcome to Docklight </h1>
      <div className='justify-center'>
       <img className='content-center ml-auto mr-auto w-[32rem] h-[20rem]' src={logo} alt="Docklight Logo" />
       </div>
    <h2 className='text-center text-2xl p-2 '>Your Containers shows the individual CPU usage, memory usage, and Network I/O of currently active containers.</h2>
    <h2 className='text-center text-2xl p-2'>Once in Your Containers section, you'll have the option to Unmount/Stop each individual container or check your inactive containers clicking in the top left of the page.</h2>
    <section className='p-2'></section>
    <h2 className='text-center text-2xl p-2'>Data Overview shows the average CPU and memory usage of all containers in a quickly-digestible display.</h2>
    <section className='p-2'></section>
    <h2 className='text-center text-2xl p-2'>Lastly, checkout the Team section to see the wonderful engineers behind this masterpiece.</h2>
    </div>
  );
}
