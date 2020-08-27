import { getCustomRepository } from 'typeorm';

import ProjectsRepository from '../repositories/ProjectsRepository';
import Project from '../models/Project';

interface Request {
  title: string;
  content: string;
}

class CreateProjectService {
  public async execute({ title, content }: Request): Promise<Project> {
    const projectRepository = getCustomRepository(ProjectsRepository);

    const findProjectTitle = await projectRepository.findOne({
      where: {
        title,
      },
    });

    if (findProjectTitle) {
      throw Error('Already have a project with this title.');
    }

    const project = projectRepository.create({
      title,
      content,
    });

    await projectRepository.save(project);

    return project;
  }
}

export default CreateProjectService;
