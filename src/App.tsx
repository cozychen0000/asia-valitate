import { useState } from 'react'
import AgeRangePriceList from './components/form/age-range-price-list'
import { Form } from './components/ui/form'
import { Button } from './components/ui/button'
import { AgeRangePriceType } from './types/constant'
import { DEFAULT_ITEM } from './constants'
import style from './App.module.css'

// 剩下功能 驗證是否正確，如果0~20都涵蓋 add disabled 區間沒有重複

function App() {
  const [data, setData] = useState<AgeRangePriceType[]>([DEFAULT_ITEM])
  const [errors, setErrors] = useState<Partial<Record<keyof AgeRangePriceType, string>>[]>([]);

  const isMaxLength = data.length === 3;
  // const isFullRange = data

  function handleChange(value: AgeRangePriceType[]) {
    if (errors.length > 0) setErrors([]);
    setData(value);
    console.log(value);
  }

  // function handleValidate() {
  //   const { errors, isValid } = validateData(data);
  //   if (!isValid) return setErrors(errors);
  //   alert("驗證通過!");
  // }

  // const addDisAbled = isMaxLength 

  function AddList() {
    setData(prev => [...prev, DEFAULT_ITEM])
  }

  const RemoveList = (index: number) => {
    const cloneData = [...data]
    cloneData.splice(index, 1)
    setData(cloneData)
  }

  const updateList = (index: number, value: AgeRangePriceType) => {
    const cloneData = [...data];
    cloneData[index] = value;
    setData(cloneData)
  }

  return (
    <main className={style['main']}>
      <Form>
        <Button type='submit' variant='validation'>Validate</Button>
        {data.map((item, i) => (
          <AgeRangePriceList
            key={i}
            item={item}
            index={i}
            onChange={updateList}
            onRemove={RemoveList}
          />))}
      </Form>
      <div className={style['footer']}>
        <Button
          type='button'
          disabled={isMaxLength}
          variant={isMaxLength ? 'disabled' : 'add'}
          onClick={AddList}>
          + 新增價格設定
        </Button>
      </div>
    </main>
  )
}

export default App
