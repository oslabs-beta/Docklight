import request from 'supertest';
import app from '../server/app';

describe('Route integration', () => {
  describe('GET requests', () => {
    
    it('responds with the correct status code', async () => {
      const response = await request(app).get('/cont/list');
      expect(response.status).toEqual(200);
    });

    it('responds with a list of containers', async () => {
      const response = await request(app).get('/cont/list');
      expect(typeof response.body).toBe('object');
    })
  });
}); 