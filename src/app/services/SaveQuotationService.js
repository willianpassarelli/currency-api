import { parseISO } from 'date-fns';
import csv from 'csvtojson';
import request from 'request';

import Currency from '../schemas/Currency';

import Cache from '../../lib/Cache';

class SaveQuotationService {
  async run({ date }) {
    /**
     * Download csv from bcb website and save to MongoDB
     */
    const res = csv({
      noheader: true,
      delimiter: ';',
      headers: [
        'quotationDate',
        'codCurrency',
        'type',
        'currency',
        'purchase',
        'sale',
        'prtPurchase',
        'prtSale',
      ],
    })
      .fromStream(
        request.get(`https://www4.bcb.gov.br/Download/fechamento/${date}.csv`)
      )
      .on('error', () => {
        throw new Error(
          "Date entered incorrect or information unavailable. Note: Date Format 'yyyyMMdd'"
        );
      })
      .then(async jsonObj => {
        const [dd, MM, yyyy] = jsonObj[0].quotationDate.split('/');
        const dateFormatted = parseISO(`${yyyy}-${MM}-${dd}`);
        // Check the database to see if data with the same saved date already exists.
        const currency = await Currency.find({
          quotationDate: dateFormatted,
        });

        // Will be saved if no data found
        if (currency.length === 0) {
          jsonObj.forEach(async doc => {
            await Currency.create({
              quotationDate: dateFormatted,
              codCurrency: doc.codCurrency,
              currency: doc.currency,
              purchase: doc.purchase,
              sale: doc.sale,
              prtPurchase: doc.prtPurchase,
              prtSale: doc.prtSale,
            });
          });

          await Cache.invalidate('currencyToday');
          await Cache.invalidate('currencies');
        } else {
          throw new Error(
            'Quotations with this date already exist in database'
          );
        }
      });

    return res;
  }
}

export default new SaveQuotationService();
