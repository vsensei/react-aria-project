import { useState } from 'react';
import { Form } from 'react-aria-components';
import Button from './Button';
import NumberField from './NumberField';
import Slider from './Slider';
import CustomText from './TextField';
import BinIcon from '../icons/BinIcon';

import styles from './CustomForm.module.css';

const minValue = -100;
const maxValue = 100;
const defaultValue = 0;

export default function CustomForm() {
  const [name, setName] = useState('');
  const [fileSize, setFileSize] = useState(defaultValue);

  return (
    <Form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();

        alert(`name: '${name}'\nfileSize: ${fileSize}`);
      }}
      onReset={() => {
        setName('');
        setFileSize(defaultValue);
      }}
    >
      <div className={styles.textField}>
        <CustomText label='Name' value={name} setValue={setName} />
      </div>
      <div className={styles.size}>
        <div className={styles.number}>
          <NumberField
            label='Size (GB)'
            minValue={minValue}
            maxValue={maxValue}
            value={fileSize}
            setValue={setFileSize}
          />
        </div>
        <div className={styles.slider}>
          <Slider
            defaultValue={0}
            value={fileSize}
            minValue={minValue}
            maxValue={maxValue}
            setValue={setFileSize}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          type='reset'
          label='Clear'
          icon={<BinIcon />}
          isMedium
          isOutlined
        />
        <Button type='submit' label='Submit' isMedium />
      </div>
    </Form>
  );
}
