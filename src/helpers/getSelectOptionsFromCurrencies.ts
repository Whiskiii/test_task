import { ICurrency } from 'api/currency';

export const getSelectOptionsFromCurrencies = (currencies: ICurrency[]) =>
  currencies.map((currency) => ({
    value: currency.id,
    label: currency.id,
    name: currency.name,
  }));
