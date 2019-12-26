import { Router } from 'express';
import cron from 'node-cron';

import QuotationController from './app/controllers/QuotationController';
import CurrencyController from './app/controllers/CurrencyController';

import SaveQuotationService from './app/services/SaveQuotationService';

const routes = new Router();

cron.schedule(
  '* 19 * * *',
  async () => {
    await SaveQuotationService.run();
    console.log('Rodou');
  },
  {
    scheduled: true,
    timezone: 'America/Sao_Paulo',
  }
);

routes.post('/quotation/:date', QuotationController.store);

routes.get('/currency/all', CurrencyController.index);
routes.get('/currency/:currency', CurrencyController.index);

export default routes;
