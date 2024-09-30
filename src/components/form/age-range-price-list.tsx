import AgeRange from "./age-range";
import PriceInput from "./price-input";
import styles from "./age-range-price-list.module.css";
import { Button } from "../ui/button";
import type { AgeRangePriceType, ErrorType } from "../../types";

interface AgeRangePriceListProps {
  index: number;
  item: AgeRangePriceType;
  onRemove: (index: number) => void;
  onChange: (index: number, value: AgeRangePriceType) => void;
  errors?: ErrorType | null;
}
function AgeRangePriceList({
  index,
  item,
  onChange,
  onRemove,
  errors,
}: AgeRangePriceListProps) {
  const { ageRange, price } = item;
  const isNotFirstList = index !== 0;

  const updatedHandler = <T extends keyof AgeRangePriceType>(
    type: T,
    value: AgeRangePriceType[T]
  ) => {
    const updated = { ...item, [type]: value };
    onChange(index, updated);
  };

  return (
    <>
      <div className={styles["age-range-price-header"]}>
        價格設定 - {index + 1}
        {isNotFirstList && (
          <Button
            type="button"
            variant="remove"
            onClick={() => onRemove(index)}
          >
            X 移除
          </Button>
        )}
      </div>
      <div className={styles["age-range-price-list"]}>
        <AgeRange
          ageRange={ageRange}
          onChange={updatedHandler}
          errorMsg={errors?.ageError}
        />
        <PriceInput
          price={price}
          onChange={updatedHandler}
          errorMsg={errors?.priceError}
        />
      </div>
    </>
  );
}

export default AgeRangePriceList;
