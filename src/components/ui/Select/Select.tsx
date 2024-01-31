import styles from './Select.module.scss';
import { Select as AntdSelect, type SelectProps } from 'antd';
import { type FC } from 'react';
import { Arrow } from 'components/icons';

const Select: FC<SelectProps> = (props) => {
  return (
    <AntdSelect
      suffixIcon={<Arrow />}
      className={styles.select}
      style={{}}
      dropdownStyle={{
        boxShadow: 'none',
        border: '1px solid #DAD6D6',
        borderRadius: 'none',
        padding: '0',
      }}
      {...props}
    />
  );
};

export default Select;
