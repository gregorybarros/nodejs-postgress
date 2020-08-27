import { Router } from 'express';

import { getCustomRepository } from 'typeorm';
import ProjectsRepository from '../repositories/ProjectsRepository';
import CreateProjectService from '../services/CreateProjectService';

const projectRouter = Router();

projectRouter.get('/', async (request, response) => {
  const projectsRepository = getCustomRepository(ProjectsRepository);

  const findAllProjects = await projectsRepository.find();

  return response.json(findAllProjects);
});

projectRouter.post('/', async (request, response) => {
  try {
    const { title, content } = request.body;

    const createProject = new CreateProjectService();

    const project = await createProject.execute({ title, content });

    return response.json(project);
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
