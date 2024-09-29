import { AgeRangePriceType } from "../types/constant";
export const MIN_AGE = 0;
export const MAX_AGE = 20;

export const AGES = [...Array(MAX_AGE - MIN_AGE + 1)].map((_, i) => i);

export const DEFAULT_ITEM: AgeRangePriceType = {
  ageRange: [MIN_AGE, MAX_AGE],
  price: 0,
};
