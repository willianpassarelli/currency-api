import { Router } from 'express';

import QuotationController from './app/controllers/QuotationController';

const routes = new Router();

routes.post('/download/:date', QuotationController.store);

export default routes;
