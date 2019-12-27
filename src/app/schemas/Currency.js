import mongoose from 'mongoose';

const CurrencySchema = new mongoose.Schema(
  {
    quotationDate: {
      type: Date,
      required: true,
    },
    codCurrency: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    purchase: {
      type: String,
      required: true,
    },
    sale: {
      type: String,
      required: true,
    },
    prtPurchase: {
      type: String,
      required: true,
    },
    prtSale: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Currency', CurrencySchema);
