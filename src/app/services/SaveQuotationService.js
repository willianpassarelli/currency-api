import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import csv from 'csvtojson';
import request from 'request';

import Currency from '../schemas/Currency';

class SaveQuotationService {
  async run() {
    const date = format(new Date(), 'yyyyMMdd', { locale: pt });
    /**
     * Download csv from bcb website and save to MongoDB
     */
    csv({
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
        // Check the database to see if data with the same saved date already exists.
        const currency = await Currency.find({
          quotationDate: jsonObj[0].quotationDate,
        });

        // Will be saved if no data found
        if (currency.length === 0) {
          await Currency.create(jsonObj);
        }

        return jsonObj;
      });
  }
}

export default new SaveQuotationService();
