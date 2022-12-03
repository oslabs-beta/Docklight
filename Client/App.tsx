import * as React from 'react';
import Navbar from './Containers/Navbar';
import YourContainers from './Containers/YourContainers';
import Homepage from './Containers/Homepage';
import { Route, Routes } from 'react-router-dom';
import './style.css';
import DataOverview from './Containers/DataOverview';
import Team from './Containers/Team';
import { themeChange } from 'theme-change';

//currently using font-inter site-wide
//will load containers -- nav bar on left stays persistent all throughout
export const App = () => {

  return (
    <div className="flex h-screen overflow-hidden font-inter">
      <Navbar/>
      <div className="testing w-screen overflow-auto" >
        <Routes>
          <Route path='/YourContainers' element={<YourContainers/>} />
          <Route path='/DataOverview' element={<DataOverview/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/*' element={<Homepage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;