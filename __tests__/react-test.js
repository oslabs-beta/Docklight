import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
// import Container from '../Client/Components/Container';

// import App from '../Client/App';
// import YourContainers from '../Client/Containers/YourContainers';
// import DataOverview from '../Client/Containers/DataOverview';
import Container from '../Client/Components/Container';
// import renderer from 'react-test-renderer';

describe('Testing rendering of our components', () => {
  describe('YourContainers should render containers correctly', () => {
    const containers = [
      {
        State: 'running',
        ID: 'id1',
        Names: 'containername1',
      },
      {
        State: 'running',
        ID: 'id2',
        Names: 'containername2',
      },        
      {
        State: 'inactive',
        ID: 'id3',
        Names: 'containername3',
      },
    ];
    const activeArr = [];
    const inactiveArr = [];
    // beforeEach(() => {
    //   return containers;
    // }); 
    afterEach(() => {
      cleanup();
    })
    xit('sorts active and inactive containers', () => {
    //   const activeArr = [];
    //   const inactiveArr = [];
      containers.forEach(dataObj => {
        if (dataObj.State === 'running') activeArr.push(dataObj);
        else inactiveArr.push(dataObj);
      })
      expect(activeArr.length).toBe(2);
      expect(inactiveArr.length).toBe(1);
    });

    xit('should render active containers', () => {
      activeArr.forEach(container => {
        render(<Container key={`c${container.ID}`} info={container} dataID={container.ID} />);
      });
      const container1 = screen.getByTestId('id1');
      const container2 = screen.getByTestId('id2');
    });

    // xit('matches snapshot', () => {
            
    // });
  });
  // describe('Container', () => {
  //   let container;
  //   const props = {
  //     State: 'running',
  //     ID: '111',
  //     Names: 'Container1'
  //   };
  //   beforeEach(() => {
  //     container = render(<Container props={props}/>);
  //   });

  //   it('Displays a name and ID', () =>)that scared the shit out of me bitch{

  //   }

  //   xit('')
  // });
});