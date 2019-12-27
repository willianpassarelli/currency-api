import { format, parseISO } from 'date-fns';

import Currency from '../schemas/Currency';

class CurrencyController {
  async index(req, res) {
    const { currency } = req.params;
    const { date, startDate, endDate } = req.query;

    // TAREFA: trazer a ultima cotação
    const quotationDate = parseISO(format(new Date(), 'yyyy-MM-dd'));

    /**
     * Find for quotation according to the period between two dates and the selected currency
     */
    if (currency && startDate && endDate) {
      const betweenDates = await Currency.find({
        currency,
        quotationDate: { $gte: parseISO(startDate), $lte: parseISO(endDate) },
      });

      return res.json(betweenDates);
    }

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
        quotationDate: parseISO(date),
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
      const currenciesDate = await Currency.find({
        quotationDate: parseISO(date),
      });

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
