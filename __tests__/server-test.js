const request = require('supertest');
const server = 'http://localhost:3000';
const express = require('express');
import { MockEvent, EventSource } from 'mocksse';
import { EventEmitter } from 'events';

const { Readable } = require('stream');

describe('Testing GET request', () => {

it('Testing DockerStatRequest', async () => {
  const response = await request(server)
  .get('/cont/fullstream')
  console.log('response :', response)
  expect(response.header)
  server.close()

})



})














// describe("GET /my-events", () => {
//   let events;
//   // let server;
//   beforeEach(function (done) {
//     events = new EventEmitter()
  
//   })

//   // afterEach(function (done) {
//   //   server.close(done)
//   // })
//   it('should send events', done => {
//     const es = new EventSource('http://localhost:3000/cont/fullstream');
    
//     events.emit('test', 'test message')
//     es.onmessage = e => {
//       console.log('e :', e)
//       expect(e.data).toBe(test)
//       es.close()
//       done()
//     }
//   })
// });



// describe('Mock EventSource', () => {
//   // before((flags) => {
//   //   // eslint-disable-next-line no-param-reassign
//   //   flags.context.incrementCallCount = (eventType, handlerCallCounts) => {
//   //     handlerCallCounts.find(cntr => Object.keys(cntr)[0] === eventType)[eventType] += 1; // eslint-disable-line no-param-reassign
//   //   };
//   // });
//   it(' - should handle an event to relative url', async (flags) => {
//     const numberOfEvents = 1;
//     const mockEvent = new MockEvent({
//       url: 'http://localhost:3000/cont/fullstream',
//       responses: [
//         { type: 'a message event', data: 'a short message' }
//       ]
//     });

//     const evtSource = new EventSource('http://localhost:3000/cont/fullstream');
//     let eventHandled = false;
//     let handlerCallCount = 0;
//     await new Promise((resolve) => {
//       evtSource.addEventListener('a message event', (event) => {
//         expect(event.type).to.equal('a message event');
//         expect(event.data).to.equal('a short message');
//         eventHandled = true;
//         handlerCallCount += 1;
//         if (handlerCallCount === numberOfEvents) resolve();
//       });
//     });

//     flags.onCleanup = () => {
//       expect(eventHandled).to.be.true();
//       expect(handlerCallCount).to.equal(1);
//       mockEvent.clear();
//     };
//   });
// })






// describe('Route integration', () => {
//   let server;
//   // beforeEach((flags) => {
//   //   // eslint-disable-next-line no-param-reassign
//   //   // flags.context.incrementCallCount = (eventType, handlerCallCounts) => {
//   //   //   handlerCallCounts.find(cntr => Object.keys(cntr)[0] === eventType)[eventType] += 1; // eslint-disable-line no-param-reassign
//   //   // };
//   // });

//   describe('GET/SSE requests', () => {
//     xit('responds with the correct status code', async () => {
//       const response = await request(server)
//         .get('/cont/list');   
//       const testing = new Readable();
//       console.log('testing line 15: ', testing);
//       expect(response.status).toEqual(200);

//     });
   
//     it('it sends a Server Sent Event on request', async (flags) => {
//       const mockEvent = new MockEvent({
//         url: 'http://localhost:3000/cont/fullstream',
//         responses: [
//           { type: 'a message event', data: 'a short message' }
//         ]
//       });
//       const evtSource = new EventSource('http://localhost:3000/cont/fullstream');
//       let eventHandled = false;
//       let handlerCallCount = 0;
//       await new Promise((resolve) => {
//         evtSource.addEventListener('a message event', (event) => {
//           expect(event.type).to.equal('a message event');
//           expect(event.data).to.equal('a short message');
//           eventHandled = true;
//           handlerCallCount += 1;
//           if (handlerCallCount === 1) resolve();
//         });
//       });
//         // we would need to to open the stream similar to 
//         //const sse = new EventSource(`http://localhost:3000/cont/fullstream`);
//        //Once the stream is open, check if the data is correct (maybe make an object or something to compare it)
//        //expect(response.type)
//         // then, the next test should test closing the stream 
//         flags.onCleanup = () => {
//           expect(eventHandled).to.be.true();
//           expect(handlerCallCount).to.equal(1);
//           mockEvent.clear();
//         };
    
//     });
//   });
