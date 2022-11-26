import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import Container from '../Client/Components/Container';

// import App from '../Client/App';
// import YourContainers from '../Client/Containers/YourContainers';
// import DataOverview from '../Client/Containers/DataOverview';
import InactiveContainers from '../Client/Components/InactiveContainers';
import TestContainer from './TestContainer';
// import renderer from 'react-test-renderer';
const jestdom = require('@testing-library/jest-dom');
const jsdom = require('jest-environment-jsdom');

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

    afterEach(() => {
      cleanup();
    })


    it('sorts active and inactive containers', () => {
      containers.forEach(dataObj => {
        if (dataObj.State === 'running') activeArr.push(dataObj);
        else inactiveArr.push(dataObj);
      })
      expect(activeArr.length).toBe(2);
      expect(inactiveArr.length).toBe(1);
    });

    it('should render active containers', () => {
      activeArr.forEach(container => {
        render(<TestContainer key={`c${container.ID}`} info={container} testID={container.ID} />);
      });
      const container1 = screen.getByTestId('id1');
      const container2 = screen.getByTestId('id2');
      expect(container1).toBeInTheDocument();
      expect(container1).toHaveTextContent(`Container Name: ${activeArr[0].Names}`);
      expect(container1).toHaveTextContent(`Container ID: ${activeArr[0].ID}`);
      expect(container2).toBeInTheDocument();
      expect(container2).toHaveTextContent(`Container Name: ${activeArr[1].Names}`);
      expect(container2).toHaveTextContent(`Container ID: ${activeArr[1].ID}`);
    });

    it('should render active containers', () => {
      inactiveArr.forEach(container => {
        render(<InactiveContainers key={`c${container.ID}`} info={container} testID={container.ID} />);
      });
      const container3 = screen.getByTestId('id3');
      expect(container3).toBeInTheDocument();
      expect(container3).toHaveTextContent(`Container Name: ${inactiveArr[0].Names}`);
      expect(container3).toHaveTextContent(`Container ID: ${inactiveArr[0].ID}`);
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