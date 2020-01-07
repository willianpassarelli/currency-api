import { Router } from 'express';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import cron from 'node-cron';

import QuotationController from './app/controllers/QuotationController';
import CurrencyController from './app/controllers/CurrencyController';

import SaveQuotationService from './app/services/SaveQuotationService';

const routes = new Router();

cron.schedule(
  '* 15 31 * *',
  async () => {
    const date = format(new Date(), 'yyyyMMdd', { locale: pt });
    await SaveQuotationService.run({ date });
    console.log('Cron executed');
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
