import { AgeRangePriceType } from "../types";

export function validateData(data: AgeRangePriceType[]) {
  const errors = {} as {
    [key: string]: { ageError: null | string; priceError: null | string };
  };

  // 創建一個包含原始索引的新數組
  const indexedData = data.map((item, index) => ({
    ...item,
    originalIndex: index,
  }));
  indexedData.sort((a, b) => a.ageRange[0] - b.ageRange[0]);

  let preEndAge = 0;
  let preOriginalIndex = 0;

  for (let index = 0; index < indexedData.length; index++) {
    const { ageRange, price, originalIndex } = indexedData[index];
    const [strAge, endAge] = ageRange;

    // 檢查是否有重疊
    if (strAge < preEndAge) {
      if (!errors[originalIndex]) {
        errors[originalIndex] = { ageError: null, priceError: null };
      }
      if (!errors[preOriginalIndex]) {
        errors[preOriginalIndex] = { ageError: null, priceError: null };
      }
      errors[originalIndex]["ageError"] = "年齡區間不可重疊";
      errors[preOriginalIndex]["ageError"] = "年齡區間不可重疊";

    }

    if (!price && price !== "") {
      if (!errors[originalIndex]) {
        errors[originalIndex] = { ageError: null, priceError: null };
      }
      errors[originalIndex]["priceError"] = "價格不可為空";
    }

    preEndAge = endAge;
    preOriginalIndex = originalIndex;

  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}
