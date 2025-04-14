import CustomForm from './components/CustomForm';
import NumberField from './components/NumberField';
import Slider from './components/Slider';
import Button from './components/Button';
import TextField from './components/TextField';
import PlusIcon from './icons/PlusIcon';
import CrossIcon from './icons/CrossIcon';

import './App.css';

export default function App() {
  return (
    <div className='app'>
      <CustomForm />
      <div className='textFieldWrapper'>
        <TextField label='Label' />
        <TextField label='Label (disabled)' isDisabled />
      </div>
      <div className='numberFieldWrapper'>
        <NumberField label='Label' />
        <NumberField label='Label (disabled)' isDisabled />
      </div>
      <div className='sliderWrapper'>
        <Slider />
      </div>
      <div className='table'>
        <div className='column-small'>
          <Button label='Button' />
          <Button label='Button' isForcedActive={true} />
          <Button label='Button' isDisabled={true} />
          <Button label='Button' icon={<PlusIcon />} />
          <Button label='Button' icon={<PlusIcon />} isReversed />
          <Button icon={<PlusIcon />} />
        </div>
        <div className='column'>
          <Button label='Button' isMedium={true} />
          <Button label='Button' isForcedActive={true} isMedium={true} />
          <Button label='Button' isDisabled={true} isMedium={true} />
          <Button label='Button' icon={<PlusIcon />} isMedium={true} />
          <Button
            label='Button'
            icon={<PlusIcon />}
            isReversed={true}
            isMedium={true}
          />
          <Button icon={<CrossIcon />} isMedium={true} />
        </div>
        <div className='column'>
          <Button label='Button' isOutlined={true} isMedium={true} />
          <Button
            label='Button'
            isOutlined={true}
            isForcedActive={true}
            isMedium={true}
          />
          <Button
            label='Button'
            isOutlined={true}
            isDisabled={true}
            isMedium={true}
          />
        </div>
        <div className='column'>
          <Button label='Button' isSecondary={true} isMedium={true} />
          <Button
            label='Button'
            isSecondary={true}
            isForcedActive={true}
            isMedium={true}
          />
          <Button
            label='Button'
            isSecondary={true}
            isDisabled={true}
            isMedium={true}
          />
        </div>
        <div className='column'>
          <Button
            label='Button'
            isSecondary={true}
            isOutlined={true}
            isMedium={true}
          />
          <Button
            label='Button'
            isSecondary={true}
            isOutlined={true}
            isForcedActive={true}
            isMedium={true}
          />
          <Button
            label='Button'
            isSecondary={true}
            isOutlined={true}
            isDisabled={true}
            isMedium={true}
          />
        </div>
      </div>
    </div>
  );
}
