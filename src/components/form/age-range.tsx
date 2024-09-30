import { type ChangeEvent } from "react";
import styles from "./age-range.module.css";
import { AGES } from "../../constants";
import type { AgeRangePriceType } from "../../types";

import { Select, Option } from "../ui/select";
import { FormItems, FormLabel, FormMessage, FormControl } from "../ui/form";

interface AgeRangeProps {
  ageRange: AgeRangePriceType["ageRange"];
  onChange: (type: keyof AgeRangePriceType, value:  AgeRangePriceType["ageRange"]) => void;
  errorMsg?: string | null;
}

function AgeRange({ ageRange, onChange, errorMsg }: AgeRangeProps) {
  const [firstValue, secondValue] = ageRange;
  const hasErrorStyle = errorMsg ? styles["error"] : "";

  function updateAgeRange(position: 0 | 1, e: ChangeEvent<HTMLSelectElement>) {
    const updatedRange = [...ageRange] as [number, number];
    const value = Number(e.target.value);
    updatedRange[position] = value;
    onChange("ageRange", updatedRange);
  }
  
  function optionIsValidate(position: 0 | 1, value: number) {
    if (position === 0 && value <= secondValue) return false;
    if (position === 1 && value > firstValue) return false;
    return true;
  }

  return (
    <FormItems className={styles["age_range"]}>
      <FormLabel>年齡</FormLabel>
      <FormControl>
        <Select
          value={firstValue}
          onChange={(e) => updateAgeRange(0, e)}
          className={hasErrorStyle}
        >
          {AGES.map((age) => (
            <Option key={age} disabled={optionIsValidate(0, age)}>
              {age}
            </Option>
          ))}
        </Select>
        <div className={styles["tilde"]}>~</div>
        <Select
          value={secondValue}
          onChange={(e) => updateAgeRange(1, e)}
          className={hasErrorStyle}
        >
          {AGES.map((age) => (
            <Option key={age} disabled={optionIsValidate(1, age)}>
              {age}
            </Option>
          ))}
        </Select>
      </FormControl>
      {errorMsg && <FormMessage>{errorMsg}</FormMessage>}
    </FormItems>
  );
}

export default AgeRange;
