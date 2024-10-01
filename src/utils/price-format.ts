export function priceFormat(value: string): string {
  // 只允許數字跟小數點，小數點只能有一個
  const filteredInput = value.replace(/[^\d.]/g, "");
  const parts = filteredInput.split(".");

  // 小數點只能出現一次，允許輸入小數點後的數字
  const validInput =
    parts.length > 2 ? `${parts[0]}.${parts[1]}` : filteredInput;

  // 只有 "."時返回 "0."
  if (validInput === ".") {
    return "0.";
  }

  const number = Number(validInput);

  //如果有小數點，前面格式化，後面維持
  if (validInput.includes(".")) {
    const [integer, decimal] = validInput.split(".");
    return Number(integer).toLocaleString() + "." + decimal;
  }

  //千分位符號
  return number.toLocaleString();
}


// function addComma(val:string) {
//   const [integer, decimal] = val.toString().split('.');
//   const integerWithComma = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// const integerWithComma = Number(integer).toLocaleString('en-US');
//   return decimal ? `${integerWithComma}.${decimal}` : integerWithComma;
// }

// function formatPrice(val:string) {
//   // 保留開頭的加號或減號
//   if (!val || val === '-' || val === '+') return '0';
//   if (val.startsWith('0.')) return val;
//   return val.replace(/^0+/, '') || '0';
// }

//邏輯有不同
// if (val === '') return '0';
//     if (val === '-' || val === '+') return '0';
//     if (val.startsWith('0.')) return val;
//     if (val.length > 1 && val[0] === '0') return val.slice(1);
//     return val;

// function removeComma(num: number | string): string {
//   return num.toString().replace(/,/g, '');
// }

// function handleChange(val : string) {
//   const raw = removeComma(val);
//   const sanitizedVal = formatPrice(raw);
//   if (Number.isNaN(Number(sanitizedVal))) return;
//   setPriceVal(addComma(sanitizedVal));
// }