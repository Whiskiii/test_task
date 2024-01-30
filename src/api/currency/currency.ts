import axios, { type AxiosResponse } from 'axios'
import { type ICurrency } from './currency.types'

export const getCurrencies = async (): Promise<AxiosResponse<ICurrency[]>> =>
  await axios
    .get('https://api.coinbase.com/v2/currencies')
    .then(({ data }) => data)
