import { Input, Label, TextField } from 'react-aria-components';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import styles from './TextField.module.css';

export default function TextFieldComponent({
  isDisabled,
  label,
  placeholder = 'enter text',
  setValue,
  value,
}: {
  isDisabled?: boolean;
  label?: string;
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  value?: string;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <TextField className={styles.textField} isDisabled={isDisabled}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} value={value} onChange={handleChange} />
    </TextField>
  );
}
