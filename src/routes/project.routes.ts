import { Router } from 'express';

import ProjectsRepository from '../repositories/ProjectsRepository';
import CreateProjectService from '../services/CreateProjectService';

const projectRouter = Router();

// const projectsRepository = new ProjectsRepository();

projectRouter.get('/', (request, response) => {
  try {

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

projectRouter.post('/', (request, response) => {
  try {
    return response.json(request.body);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

projectRouter.put('/:id', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

projectRouter.delete('/:id', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default projectRouter;
