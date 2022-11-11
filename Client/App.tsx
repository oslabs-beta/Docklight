import * as React from 'react';
import Navbar from './Containers/Navbar';
import YourContainers from './Containers/YourContainers'
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
// import './Styles/App.css';
import './style.css';
import DataOverview from './Containers/DataOverview';

//currently using font-inter site-wide
//will load containers -- nav bar on left stays persistent all throughout
export const App = () => {
  return (
    <div className="flex h-screen overflow-hidden font-inter">
      <Navbar/>
      <div className="w-screen">
        <Routes>
          <Route path='/' element={<YourContainers/>} />
          <Route path='/DataOverview' element={<DataOverview/>} />
        </Routes>
      </div>
    </div>
  );
}
// const onlyFunc = {
//   App,
// }

export default App;