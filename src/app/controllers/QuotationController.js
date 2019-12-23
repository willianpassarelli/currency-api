import { resolve } from 'path';

import csv from 'csvtojson';
import https from 'https';
import fs from 'fs';

class QuotationController {
  async store(req, res) {
    const { date } = req.params;
    const csvFilePath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'csv',
      `${date}.csv`
    );

    const jsonFilePath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'json',
      `${date}.json`
    );
    const file = fs.createWriteStream(csvFilePath);

    try {
      https.get(
        `https://www4.bcb.gov.br/Download/fechamento/${date}.csv`,
        async response => {
          response.pipe(file);

          await csv({
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
            .fromFile(csvFilePath)
            .then(jsonObj => {
              return fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj));
            });
        }
      );
      return res.json({ msg: 'Data saved successfully' });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new QuotationController();
