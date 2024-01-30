import { ICurrency, ICurrencyFormatted } from 'api/currency';

export const getSelectOptionsFromCurrencies = (
  currencies: ICurrency[]
): ICurrencyFormatted[] =>
  currencies.map((currency) => ({
    value: currency.id,
    label: currency.id,
    name: currency.name,
  }));
