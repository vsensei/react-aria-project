import { Group, Input, Label, NumberField } from 'react-aria-components';
import Button from './Button';
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

import type { Dispatch, SetStateAction } from 'react';

import styles from './NumberField.module.scss';

export default function NumberFieldComponent({
  defaultValue = 0,
  isDisabled,
  label,
  maxValue = 100,
  minValue = 0,
  setValue,
  value,
}: {
  defaultValue?: number;
  isDisabled?: boolean;
  label?: string;
  maxValue?: number;
  minValue?: number;
  value?: number;
  setValue?: Dispatch<SetStateAction<number>>;
}) {
  const handleChange = (value: number) => {
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <NumberField
      className={styles.numberField}
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      isDisabled={isDisabled}
      onChange={handleChange}
      aria-label='Type to change value'
    >
      {label && <Label>{label}</Label>}
      <Group className={styles.group}>
        <Button
          slot='decrement'
          isDisabled={isDisabled}
          icon={<MinusIcon />}
          isSecondary
        />
        <Input />
        <Button
          slot='increment'
          isDisabled={isDisabled}
          icon={<PlusIcon />}
          isSecondary
        />
      </Group>
    </NumberField>
  );
}
