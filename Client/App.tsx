import * as React from 'react';
import Navbar from './Containers/Navbar';
import YourContainers from './Containers/YourContainers.jsx'
import Homepage from './Containers/Homepage';
import { Route, Routes } from 'react-router-dom';
// import './Styles/App.css';
import './style.css';
import DataOverview from './Containers/DataOverview';
import Team from './Containers/Team';

//currently using font-inter site-wide
//will load containers -- nav bar on left stays persistent all throughout
export const App = () => {
  return (
    <div className="flex h-screen overflow-hidden font-inter">
      <Navbar/>
      <div className="w-screen">
        <Routes>
          <Route path='/YourContainers' element={<YourContainers />} />
          <Route path='/DataOverview' element={<DataOverview/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/*' element={<Homepage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;