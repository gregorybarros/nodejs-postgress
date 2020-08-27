import { Router } from 'express';
import projectRouter from './project.routes';

const routes = Router();

routes.use('/projects', projectRouter);

export default routes;
