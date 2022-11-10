import * as React from 'react';
import Navbar from './Containers/Navbar';
import YourContainers from './Containers/YourContainers'
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
// import './Styles/App.css';
import './style.css';

//will load containers -- nav bar on left stays persistent all throughout
export const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar/>
      <div className="w-screen">
        <Routes>
          <Route path='/' element={<YourContainers/>} />
        </Routes>
      </div>
    </div>
  );
}
// const onlyFunc = {
//   App,
// }

export default App;