import { Input } from '../ui/input'
import styles from './price-input.module.css'
import { FormItems, FormLabel, FormControl, FormDescription } from '../ui/form'
import type { AgeRangePriceType } from '../../types/constant';

interface PriceInputProps {
  price: AgeRangePriceType['price'];
  onChange: (type: 'ageRange' | 'price', value: unknown) => void;
  index: number;
}

function PriceInput({ price, onChange }: PriceInputProps) {

  function validateInput(value: string): string {
    const filteredInput = value.replace(/[^\d]/g, '');
    const number = filteredInput.trim() === '' ? 0 : Number(filteredInput);
    return number.toLocaleString(); // 自動加上千分位符號
  }

  return (
    <FormItems className={styles['price_input']}>
      <FormLabel>入住費用 (每人每晚)</FormLabel>
      <FormControl>
        <div className={styles['currency']}>TWD</div>
        <Input value={price} onChange={e => onChange('price', validateInput(e.target.value))} />
      </FormControl>
      <FormDescription>輸入 0 表示免費</FormDescription>
    </FormItems>
  )
}

export default PriceInput
