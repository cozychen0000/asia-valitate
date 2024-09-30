import type { AgeRangePriceType } from "../../types";
import styles from "./price-input.module.css";

import { Input } from "../ui/input";
import {
  FormItems,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

import { priceFormat } from "../../utils/price-format";

interface PriceInputProps {
  price: AgeRangePriceType["price"];
  onChange: (type: keyof AgeRangePriceType, value: AgeRangePriceType["price"]) => void;
  errorMsg?: string | null;
}

function PriceInput({ price, onChange, errorMsg }: PriceInputProps) {
  return (
    <FormItems className={styles["price-input"]}>
      <FormLabel>入住費用 (每人每晚)</FormLabel>
      <FormControl>
        <div className={styles["currency"]}>TWD</div>
        <Input
          value={price}
          onChange={(e) => onChange("price", priceFormat(e.target.value))}
        />
      </FormControl>
      <FormDescription>輸入 0 表示免費</FormDescription>
      {errorMsg && <FormMessage>{errorMsg}</FormMessage>}
    </FormItems>
  );
}

export default PriceInput;
