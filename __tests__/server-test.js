import request from 'supertest';
import app from '../server/app';

//testing the backend

describe('Route integration', () => {
  describe('GET requests', () => {
    //Testing get request in the backend 
    it('responds with the correct status code', async () => {
      const response = await request(app).get('/cont/list');
      expect(response.status).toEqual(200);
    });
    //testing objects of the container list
    it('responds with a list of containers', async () => {
      const response = await request(app).get('/cont/list');
      expect(typeof response.body).toBe('object');
    });
  });
}); 