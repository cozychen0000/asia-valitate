import React from 'react'
import AgeRange from './age-range'
import PriceInput from './price-input'
import styles from './age-range-price-list.module.css'
import { Button } from '../ui/button'
import type { AgeRangePriceType } from '../../types/constant'

interface AgeRangePriceListProps {
  index: number;
  item: AgeRangePriceType;
  onRemove: (index: number) => void;
  onChange: (index: number, value: AgeRangePriceType) => void;
}
function AgeRangePriceList({ index, item, onChange, onRemove }: AgeRangePriceListProps) {
  const { ageRange, price } = item
  const isNotFirstList = index !== 0;

  const updatedHandler = (type: 'ageRange' | 'price', value: unknown) => {
    const updated = { ...item, [type]: value }
    onChange(index, updated)
  }
  return (
    <>
      <div className={styles['age-range-price-header']}>
        價格設定 - {index + 1}
        {isNotFirstList && <Button type='button' variant='remove' onClick={() => onRemove(index)}>X 移除</Button>}
      </div>
      <div className={styles['age-range-price-list']}>
        <AgeRange ageRange={ageRange} index={index} onChange={updatedHandler} />
        <PriceInput price={price} index={index} onChange={updatedHandler} />
      </div>
    </>
  )
}

export default AgeRangePriceList
