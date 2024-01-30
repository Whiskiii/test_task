import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import { getSelectOptionsFromCurrencies } from 'helpers';
import { getCurrencies, ICurrencyFormatted } from 'api/currency';
import { Select } from 'components/ui';

const Home = () => {
  const [options, setOptions] = useState<ICurrencyFormatted[]>([]);
  const [selectedCurrency, setSelectedCurrency] =
    useState<ICurrencyFormatted | null>(null);

  const fetchCurrencies = async () => {
    try {
      const fetchData = await getCurrencies();
      setOptions(getSelectOptionsFromCurrencies(fetchData.data));
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (value: any) => {
    const searchedCurrency = options.find(
      (currency) => currency.value === value
    );
    if (searchedCurrency != null) {
      setSelectedCurrency(searchedCurrency);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.content__block}>
          <div className={styles.content__text}>
            <div className={styles.content__text__title}>
              <span>CAT</span>
            </div>
            <div className={styles.content__text__description}>
              <span>currencies academic terms</span>
            </div>
          </div>
          <div className={styles.content__currency_change}>
            <Select
              // @ts-ignore
              onChange={(value) => {
                handleChange(value);
              }}
              options={options}
            />
          </div>
        </div>
        <div className={styles.content__image}>
          <img src="img/Kitten.png" alt="" />
        </div>
      </div>
      <div className={styles.currency}>
        <span>{selectedCurrency?.name}</span>
      </div>
    </div>
  );
};

export default Home;
