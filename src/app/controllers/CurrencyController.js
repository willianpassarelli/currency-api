import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Currency from '../schemas/Currency';

class CurrencyController {
  async index(req, res) {
    const { currency } = req.params;
    const { date } = req.query;

    // TAREFA: trazer a ultima cotação
    const quotationDate = format(new Date(), 'dd/MM/yyyy', { locale: pt });

    /**
     * Check reported currency
     */
    if (currency) {
      const checkCurrency = await Currency.findOne({ currency });

      if (!checkCurrency) {
        return res
          .status(400)
          .json({ error: 'Unidentified reported currency' });
      }
    }

    /**
     * Find currency specific with quotation date of today
     */
    if (currency && !date) {
      const currencyToday = await Currency.findOne({ currency, quotationDate });

      return res.json(currencyToday);
    }

    /**
     * Find currency specific with quotation date
     */
    if (currency && date) {
      const currencyDate = await Currency.findOne({
        currency,
        quotationDate: date,
      });

      if (!currencyDate) {
        return res.status(401).json({
          error:
            "Date entered incorrect or information unavailable. Note: Date Format 'dd/MM/yyyy'",
        });
      }

      return res.json(currencyDate);
    }

    /**
     * Find all currencies with quotation of date specific
     */
    if (date) {
      const currenciesDate = await Currency.find({ quotationDate: date });

      if (currenciesDate.length === 0) {
        return res.status(401).json({
          error:
            "Date entered incorrect or information unavailable. Note: Date Format 'dd/MM/yyyy'",
        });
      }

      return res.json(currenciesDate);
    }

    /**
     * Find all currencies with quotation of today
     */
    const currencies = await Currency.find({ quotationDate });

    return res.json(currencies);
  }
}

export default new CurrencyController();
