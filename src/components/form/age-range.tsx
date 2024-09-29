import React, { type ChangeEvent } from 'react'
import { Select, Option } from '../ui/select'
import styles from './age-range.module.css'
import { FormItems, FormLabel, FormMessage, FormControl } from '../ui/form'
import { AGES } from '../../constants';
import type { AgeRangePriceType } from '../../types/constant';

interface AgeRangeProps {
  ageRange: AgeRangePriceType['ageRange'];
  onChange: (type: 'ageRange' | 'price', value: unknown) => void;
  index: number;
}


function AgeRange({ ageRange, onChange }: AgeRangeProps) {
  const [firstValue, secondValue] = ageRange;

  function updateAgeRange(position: 0 | 1, e: ChangeEvent<HTMLSelectElement>) {
    const updatedRange = [...ageRange]
    const value = Number(e.target.value);
    updatedRange[position] = value
    onChange('ageRange', updatedRange)
  }
  function OptionIsValidate(position: 0 | 1, value: number) {
    if (position === 0 && value < secondValue) return false;
    if (position === 1 && value > firstValue) return false;
    return true;
  }

  return (
    <FormItems className={styles['age_range']}>
      <FormLabel>年齡</FormLabel>
      <FormControl>
        <Select value={firstValue} onChange={e => updateAgeRange(0, e)}>
          {AGES.map(age => (
            <Option key={age} disabled={OptionIsValidate(0, age)}>{age}</Option>
          ))}
        </Select>
        <div className={styles['tilde']}>~</div>
        <Select value={secondValue} onChange={e => updateAgeRange(1, e)}>
          {AGES.map(age => (
            <Option key={age} disabled={OptionIsValidate(1, age)}>{age}</Option>
          ))}
        </Select>
      </FormControl>
      <FormMessage>年齡區間不可重疊</FormMessage>
    </FormItems >
  )
}

export default AgeRange
