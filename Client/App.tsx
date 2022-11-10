import * as React from 'react';
import Navbar from './Containers/Navbar';
import Homepage from './Components/Homepage';
import { Route, Routes } from 'react-router-dom';
// import './Styles/App.css';
import './style.css';

//will load containers -- nav bar on left stays persistent all throughout
export const App = () => {
  return (
    <div className="flex h-screen">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
}
// const onlyFunc = {
//   App,
// }

export default App;