import { Button } from 'react-aria-components';

import type { ReactNode } from 'react';

import styles from './Button.module.scss';

const argumentNames = {
  isForcedActive: 'forcedActive',
  isMedium: 'medium',
  isReversed: 'reversed',
} as const;

export default function ButtonComponent(args: {
  icon?: ReactNode;
  isForcedActive?: boolean;
  isDisabled?: boolean;
  isReversed?: boolean;
  isSecondary?: boolean;
  isOutlined?: boolean;
  isMedium?: boolean;
  label?: string;
  slot?: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  const { icon, isDisabled, isSecondary, isOutlined, label, slot, type } = args;
  const isInArgs = (argument: string): argument is keyof typeof args =>
    argument in args;

  let classNames = [
    styles.button,
    isSecondary ? styles.secondary : styles.primary,
    isOutlined ? styles.outlined : styles.contained,
  ];

  classNames = Object.entries(argumentNames).reduce(
    (acc, [key, className]) =>
      isInArgs(key) && args[key] ? [...acc, styles[className]] : acc,
    classNames
  );

  if (!label && icon) {
    classNames = [...classNames, styles.hasOnlyIcon];
  } else {
    if (label && icon) {
      classNames = [...classNames, styles.hasLabelAndIcon];
    }
  }

  return (
    <Button
      className={classNames.join(' ')}
      isDisabled={isDisabled}
      slot={slot}
      type={type}
    >
      <span>
        {icon}
        {label && <span>{label}</span>}
      </span>
    </Button>
  );
}
