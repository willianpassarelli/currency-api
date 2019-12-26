import { Router } from 'express';

import QuotationController from './app/controllers/QuotationController';
import CurrencyController from './app/controllers/CurrencyController';

const routes = new Router();

routes.post('/quotation/:date', QuotationController.store);

routes.get('/currency/all', CurrencyController.index);
routes.get('/currency/:currency', CurrencyController.index);

export default routes;
