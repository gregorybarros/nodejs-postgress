import { getCustomRepository } from 'typeorm';

import ProjectsRepository from '../repositories/ProjectsRepository';
import Project from '../models/Project';

interface Request {
  title: string;
  content: string;
  date: Date;
}

class CreateProjectService {
  public async execute({ title, content, date }: Request): Promise<Project> {
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
      date,
    });

    await projectRepository.save(project);

    return project;
  }
}

export default CreateProjectService;
