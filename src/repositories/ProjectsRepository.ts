import { EntityRepository, Repository } from 'typeorm';

import Project from '../models/Project';

@EntityRepository(Project)
class ProjectsRepository extends Repository<Project> {
  // public otherMethod(): CreateProjectDTO {
  //   // TODO
  // }
}

export default ProjectsRepository;
