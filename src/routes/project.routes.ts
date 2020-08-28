import { Router, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import ProjectsRepository from '../repositories/ProjectsRepository';
import CreateProjectService from '../services/CreateProjectService';

const projectRouter = Router();

projectRouter.get('/', async (request, response) => {
  const projectsRepository = getCustomRepository(ProjectsRepository);

  const findAllProjects = await projectsRepository.find();

  return response.json(findAllProjects);
});

projectRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const projectsRepository = getCustomRepository(ProjectsRepository);

  const findAllProjects = await projectsRepository.findOne(id);

  return response.json(findAllProjects);
});

projectRouter.post('/', async (request, response) => {
  try {
    const { title, content, date } = request.body;

    const createProject = new CreateProjectService();

    const project = await createProject.execute({ title, content, date });

    return response.json(project);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

projectRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { title, content, date } = request.body;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    const projectSave = await projectsRepository.update(id, {
      title,
      content,
      date,
    });

    return response.json(projectSave);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

projectRouter.delete('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    await projectsRepository.delete(id);

    return response.status(200).json({ ok: true });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default projectRouter;
