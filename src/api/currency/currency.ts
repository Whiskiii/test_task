import { type AxiosResponse } from 'axios';
import { type ICurrency } from './currency.types';
import api from 'api';

export const getCurrencies = async (): Promise<AxiosResponse<ICurrency[]>> =>
  await api.get('/currencies').then(({ data }) => data);
