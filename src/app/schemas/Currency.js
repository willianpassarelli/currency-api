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
      type: Number,
      required: true,
    },
    sale: {
      type: Number,
      required: true,
    },
    prtPurchase: {
      type: Number,
      required: true,
    },
    prtSale: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Currency', CurrencySchema);
