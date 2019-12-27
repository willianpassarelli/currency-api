import SaveQuotationService from '../services/SaveQuotationService';

class QuotationController {
  async store(req, res) {
    const { date } = req.params;

    const quotation = await SaveQuotationService.run({ date });

    return res.json(quotation);
  }
}

export default new QuotationController();
