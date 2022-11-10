import * as React from 'react';
import Active from '../Components/Active'
import Container from '../Components/Container';
import SearchContainers from '../Components/SearchContainers';

//cpuUsage is a percentage already, as is mem
const dummyContainer = {
  name: 'Test',
  id: 't1e3s3t7',
  cpuUsage: 40.3,
  memUsage: 13.5,
  limit: 7475,
  mem: 0.17,
  netIO: 29,
  netIOB: 1000
}

//should render the active/inactive filter buttons/component (will leave functionality for when we have components rendering)
//should render the search for container component
//should render each individual Container, for now will render a dummy container with data being passed in

export default function YourContainers() {
  return (
    <>
      <header className='flex h-1/5'>
        <Active />
        <SearchContainers />
      </header>
      <div className='grid overflow-auto h-4/5'>
      <Container />
        <Container />
        <Container />
        <Container /><Container />
        <Container />
        <Container />
        <Container /><Container />
        <Container />
        <Container />
        <Container /><Container />
        <Container />
        <Container />
        <Container /><Container />
      </div>
    </>
    
  )
}
