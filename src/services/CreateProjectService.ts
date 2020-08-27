import ProjectsRepository from '../repositories/ProjectsRepository';
import Project from '../models/Project';

class CreateProjectService {
  private projectsRepository: ProjectsRepository;

  constructor(projectsRepository: ProjectsRepository) {
    this.projectsRepository = projectsRepository;
  }

  public execute(): Project {
    // TODO
  }
}

export default CreateProjectService;
