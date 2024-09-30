import { useState, type FormEvent } from "react";
import type { AgeRangePriceType, ErrorListType } from "./types";
import style from "./App.module.css";
import { DEFAULT_ITEM } from "./constants";

import { Form } from "./components/ui/form";
import { Button } from "./components/ui/button";
import AgeRangePriceList from "./components/form/age-range-price-list";

import { validateData } from "./utils/validate-data";
import { checkFullCoverage } from "./utils/check-age-coverage";

function App() {
  const [data, setData] = useState<AgeRangePriceType[]>([DEFAULT_ITEM]);
  const [errors, setErrors] = useState<ErrorListType | null>(null);

  // 控制 add 按鈕 disabled
  const isMaxLength = data.length === 3;
  const isFullCoverage = checkFullCoverage(data);
  const addDisAbled = isMaxLength || isFullCoverage;

  function AddList() {
    setErrors(null);
    setData((prev) => [...prev, DEFAULT_ITEM]);
  }

  const RemoveList = (index: number) => {
    setErrors(null);
    const cloneData = [...data];
    cloneData.splice(index, 1);
    setData(cloneData);
  };

  const updateList = (index: number, value: AgeRangePriceType) => {
    setErrors(null);
    const cloneData = [...data];
    cloneData[index] = value;
    setData(cloneData);
  };

  const handleValidate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { errors, isValid } = validateData(data);
    if (!isValid) return setErrors(errors);
    alert("驗證通過!");
  };

  return (
    <main className={style["main"]}>
      <Form onSubmit={(e) => handleValidate(e)}>
        <Button type="submit" variant="validation">
          Validate
        </Button>
        {data.map((item, i) => (
          <AgeRangePriceList
            key={i}
            index={i}
            item={item}
            errors={errors?.[i]}
            onChange={updateList}
            onRemove={RemoveList}
          />
        ))}
      </Form>
      <div className={style["footer"]}>
        <Button
          type="button"
          disabled={addDisAbled}
          variant={addDisAbled ? "disabled" : "add"}
          onClick={AddList}
        >
          + 新增價格設定
        </Button>
      </div>
    </main>
  );
}

export default App;
