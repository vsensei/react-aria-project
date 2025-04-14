import { Slider, SliderThumb, SliderTrack } from 'react-aria-components';

import type { Dispatch, SetStateAction } from 'react';

import styles from './Slider.module.scss';

export default function SliderComponent({
  defaultValue = 0,
  maxValue = 100,
  minValue = 0,
  setValue,
  value,
}: {
  defaultValue?: number;
  maxValue?: number;
  minValue?: number;
  setValue?: Dispatch<SetStateAction<number>>;
  value?: number;
}) {
  const handleChange = (value: number) => {
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <Slider
      className={styles.slider}
      defaultValue={defaultValue}
      onChange={handleChange}
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      aria-label='Size slider'
    >
      <SliderTrack className={styles.sliderTrack}>
        {({ state }) => (
          <>
            <div
              className={styles.sliderFill}
              style={{
                width: `${state.getThumbPercent(0) * 100}%`,
              }}
            />
            <SliderThumb className={styles.sliderThumb} />
          </>
        )}
      </SliderTrack>
    </Slider>
  );
}
