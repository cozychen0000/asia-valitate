export type AgeRangeType = [number, number];

export interface AgeRangePriceType {
  ageRange: AgeRangeType;
  price: string;
}

export interface ErrorType {
    ageError: null | string;
    priceError: null | string;
}

export type ErrorListType = {
  [key:string]: ErrorType
}